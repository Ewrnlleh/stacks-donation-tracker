'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { contractService, Campaign } from '@/services/contractService';
import { ArrowLeft, Heart, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function DonatePage() {
  const params = useParams();
  const router = useRouter();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const campaignId = parseInt(params.id as string, 10);

  // Early return for invalid campaign ID
  if (!params.id || isNaN(campaignId) || campaignId <= 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Invalid Campaign</h1>
              <p className="text-gray-600 mb-6">The campaign ID "{params.id}" is not valid.</p>
              <Link href="/" className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                <span>Back to Campaigns</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    fetchCampaign();
  }, [campaignId]);

  const fetchCampaign = async () => {
    try {
      setLoading(true);
      setError(null);
      
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

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    }).format(amount);
  };

  const progressPercentage = campaign 
    ? Math.min((campaign.currentAmount / campaign.targetAmount) * 100, 100)
    : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Campaign</h2>
              <p className="text-gray-600">Please wait while we load the campaign details...</p>
              <p className="text-sm text-gray-500 mt-2">Campaign ID: {campaignId}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error && !campaign) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Campaigns
          </Link>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Error</h1>
            <p className="text-gray-600 mb-6">{error}</p>
            <Link href="/" className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              <span>View All Campaigns</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex items-center mb-6">
          <Link 
            href={`/campaign/${campaignId}`} 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Campaign
          </Link>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Campaign Summary */}
          {campaign && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Donate to: {campaign.title}
              </h1>
              
              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Campaign Progress</span>
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

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {formatAmount(campaign.currentAmount)} STX
                  </div>
                  <div className="text-sm text-gray-600">Raised</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {formatAmount(campaign.targetAmount)} STX
                  </div>
                  <div className="text-sm text-gray-600">Goal</div>
                </div>
              </div>
            </div>
          )}

          {/* Donation Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Make a Donation</h2>
            
            <div className="text-center py-8">
              <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Connect Your Wallet
              </h3>
              <p className="text-gray-600 mb-6">
                Please connect your Stacks wallet to make a donation to this campaign.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                This feature requires wallet integration to process donations on the Stacks blockchain.
              </p>
              <Link 
                href="/"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                <span>Back to Campaigns</span>
              </Link>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 rounded-lg p-4 mt-6">
            <h3 className="text-sm font-medium text-blue-900 mb-2">
              About Blockchain Donations
            </h3>
            <p className="text-sm text-blue-700">
              Your donation will be recorded permanently on the Stacks blockchain, 
              ensuring complete transparency and accountability. Transaction fees may apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
