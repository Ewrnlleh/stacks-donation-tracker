'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useWallet } from '@/context/WalletContext';
import { contractService, Campaign } from '@/services/contractService';
import { DonationModal } from '@/components/DonationModal';
import { ArrowLeft, Calendar, Target, TrendingUp, Users, Heart, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function CampaignDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { isConnected, userData, donateToCampaign } = useWallet();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  const campaignId = parseInt(params.id as string, 10);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      fetchCampaign();
    }
  }, [mounted, campaignId]);

  const fetchCampaign = async () => {
    try {
      setLoading(true);
      setError(null);
      
      if (!campaignId || isNaN(campaignId)) {
        setError('Invalid campaign ID');
        return;
      }

      const campaignData = await contractService.getCampaign(campaignId);
      
      if (!campaignData) {
        setError('Campaign not found');
        return;
      }
      
      setCampaign(campaignData);
    } catch (err) {
      console.error('Error fetching campaign:', err);
      setError('Failed to load campaign details');
    } finally {
      setLoading(false);
    }
  };

  const handleDonationSuccess = () => {
    // Refresh campaign data after successful donation
    fetchCampaign();
    setShowDonationModal(false);
  };

  const handleDonate = async (amount: number, message?: string) => {
    try {
      if (!isConnected || !campaign || !donateToCampaign) return;
      
      await donateToCampaign(campaign.id, amount, message);
      handleDonationSuccess();
    } catch (error) {
      console.error('Donation failed:', error);
      throw error;
    }
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    }).format(amount);
  };

  const progressPercentage = campaign 
    ? Math.min((campaign.currentAmount / campaign.targetAmount) * 100, 100)
    : 0;

  const getDaysRemaining = () => {
    if (!campaign) return 0;
    // Assuming each block is ~10 minutes on average
    const blocksPerDay = 144;
    const currentBlock = 0; // This would need to be fetched from the network
    const remainingBlocks = Math.max(0, campaign.endBlock - currentBlock);
    return Math.ceil(remainingBlocks / blocksPerDay);
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="loading-spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !campaign) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Campaigns
          </Link>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {error || 'Campaign Not Found'}
            </h1>
            <p className="text-gray-600 mb-6">
              The campaign you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/" className="btn-primary">
              View All Campaigns
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Campaigns
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {campaign.title}
                  </h1>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      campaign.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {campaign.isActive ? 'Active' : 'Ended'}
                  </span>
                </div>
                
                {/* Creator Info */}
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Created by: {campaign.creator}</span>
                </div>
              </div>

              {/* Progress Section */}
              <div className="p-6 border-b border-gray-200">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm text-gray-600">
                      {progressPercentage.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatAmount(campaign.currentAmount)} STX
                    </div>
                    <div className="text-sm text-gray-600">Raised</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatAmount(campaign.targetAmount)} STX
                    </div>
                    <div className="text-sm text-gray-600">Goal</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {getDaysRemaining()}
                    </div>
                    <div className="text-sm text-gray-600">Days Left</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About This Campaign</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {campaign.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Support This Campaign</h3>
              
              {campaign.isActive ? (
                <div className="space-y-4">
                  {isConnected ? (
                    <button
                      onClick={() => setShowDonationModal(true)}
                      className="w-full btn-primary flex items-center justify-center"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Donate Now
                    </button>
                  ) : (
                    <div className="text-center">
                      <p className="text-gray-600 mb-4">Connect your wallet to donate</p>
                      <button className="btn-secondary w-full">
                        Connect Wallet
                      </button>
                    </div>
                  )}
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Campaign Stats</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Campaign Status:</span>
                        <span className="font-medium">{campaign.isActive ? 'Active' : 'Ended'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Campaign ID:</span>
                        <span className="font-medium">#{campaign.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">End Block:</span>
                        <span className="font-medium">{campaign.endBlock}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Campaign Ended</h4>
                  <p className="text-gray-600">This campaign is no longer accepting donations.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {showDonationModal && campaign && (
        <DonationModal
          campaignId={campaign.id}
          campaignTitle={campaign.title}
          isOpen={showDonationModal}
          onClose={() => setShowDonationModal(false)}
          onDonate={handleDonate}
        />
      )}
    </div>
  );
}
