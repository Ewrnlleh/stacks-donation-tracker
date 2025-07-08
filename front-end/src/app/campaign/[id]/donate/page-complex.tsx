'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useWallet } from '@/context/WalletContext';
import { contractService, Campaign } from '@/services/contractService';
import { ArrowLeft, Heart, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function DonatePage() {
  const params = useParams();
  const router = useRouter();
  const { isConnected, userData, donateToCampaign } = useWallet();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);
  const [donating, setDonating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Form state
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

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
              <Link href="/" className="btn-primary">
                Back to Campaigns
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    // Add a small delay to ensure proper hydration
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mounted) {
      fetchCampaign();
    }
  }, [mounted]);

  // Add a fallback effect that doesn't depend on campaignId to avoid infinite loops
  useEffect(() => {
    if (mounted && !campaign && !loading && !error) {
      fetchCampaign();
    }
  }, [mounted, campaign, loading, error]);

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

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected || !campaign || !donateToCampaign) {
      setError('Please connect your wallet first');
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      setError('Please enter a valid donation amount');
      return;
    }

    try {
      setDonating(true);
      setError(null);
      
      await donateToCampaign(campaign.id, parseFloat(amount), message || undefined);
      
      setSuccess(true);
      setAmount('');
      setMessage('');
      
      // Refresh campaign data
      fetchCampaign();
      
      // Redirect to campaign page after 3 seconds
      setTimeout(() => {
        router.push(`/campaign/${campaignId}`);
      }, 3000);
      
    } catch (err: any) {
      console.error('Donation failed:', err);
      setError(err.message || 'Donation failed. Please try again.');
    } finally {
      setDonating(false);
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

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Initializing...</p>
        </div>
      </div>
    );
  }

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
            <Link href="/" className="btn-primary">
              View All Campaigns
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Donation Successful!
              </h1>
              <p className="text-gray-600 mb-6">
                Thank you for your generous donation to "{campaign?.title}". 
                Your contribution will make a real difference!
              </p>
              <div className="text-sm text-gray-500 mb-6">
                Redirecting to campaign page in 3 seconds...
              </div>
              <Link 
                href={`/campaign/${campaignId}`}
                className="btn-primary"
              >
                View Campaign
              </Link>
            </div>
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
            
            {!isConnected ? (
              <div className="text-center py-8">
                <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Connect Your Wallet
                </h3>
                <p className="text-gray-600 mb-6">
                  Please connect your Stacks wallet to make a donation
                </p>
                <button className="btn-primary">
                  Connect Wallet
                </button>
              </div>
            ) : !campaign?.isActive ? (
              <div className="text-center py-8">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Campaign Ended
                </h3>
                <p className="text-gray-600">
                  This campaign is no longer accepting donations.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDonate} className="space-y-6">
                {/* Amount Input */}
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                    Donation Amount (STX) *
                  </label>
                  <input
                    type="number"
                    id="amount"
                    step="0.000001"
                    min="0.000001"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter amount in STX"
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Leave a message for the campaign creator..."
                  />
                </div>

                {/* Error Display */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex">
                      <AlertCircle className="w-5 h-5 text-red-400 mr-2 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={donating || !amount}
                  className="w-full flex items-center justify-center btn-primary disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {donating ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing Donation...
                    </>
                  ) : (
                    <>
                      <Heart className="w-5 h-5 mr-2" />
                      Donate {amount ? `${amount} STX` : ''}
                    </>
                  )}
                </button>
              </form>
            )}
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
