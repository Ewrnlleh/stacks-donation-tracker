'use client';

import React, { useState } from 'react';
import { Calendar, Target, TrendingUp, Users, Clock, Share2, Heart } from 'lucide-react';
import { DonationModal } from './DonationModal';

interface Campaign {
  id: number;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  creator: string;
  endBlock: number;
  isActive: boolean;
  createdAt: number;
}

interface CampaignDetailsProps {
  campaign: Campaign;
  onDonate?: (amount: number, message?: string) => Promise<void>;
  isConnected?: boolean;
}

export const CampaignDetails: React.FC<CampaignDetailsProps> = ({
  campaign,
  onDonate,
  isConnected = false,
}) => {
  const [showDonationModal, setShowDonationModal] = useState(false);

  const progressPercentage = Math.min(
    (campaign.currentAmount / campaign.targetAmount) * 100,
    100
  );

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    }).format(amount);
  };

  const getDaysRemaining = () => {
    // Assuming each block is ~10 minutes on average
    const blocksPerDay = 144;
    const currentBlock = 0; // This would need to be fetched from the network
    const remainingBlocks = Math.max(0, campaign.endBlock - currentBlock);
    return Math.ceil(remainingBlocks / blocksPerDay);
  };

  const handleDonate = async (amount: number, message?: string) => {
    if (onDonate) {
      await onDonate(amount, message);
    }
  };

  const handleShare = () => {
    const url = `${window.location.origin}/campaign/${campaign.id}`;
    navigator.clipboard.writeText(url);
    // TODO: Add toast notification
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    campaign.isActive
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {campaign.isActive ? 'Active' : 'Ended'}
                </span>
                <button
                  onClick={handleShare}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Share campaign"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {campaign.title}
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {campaign.description}
              </p>
            </div>

            {/* Donation Actions */}
            <div className="lg:w-80">
              <div className="bg-gray-50 rounded-lg p-6">
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium text-gray-900">
                      {progressPercentage.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {formatAmount(campaign.currentAmount)} STX
                  </div>
                  <div className="text-sm text-gray-600">
                    of {formatAmount(campaign.targetAmount)} STX goal
                  </div>
                </div>

                {/* Action Button */}
                {campaign.isActive ? (
                  <button
                    onClick={() => setShowDonationModal(true)}
                    disabled={!isConnected}
                    className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Heart className="h-4 w-4" />
                    {isConnected ? 'Donate Now' : 'Connect Wallet to Donate'}
                  </button>
                ) : (
                  <div className="w-full bg-gray-200 text-gray-600 py-3 px-4 rounded-lg font-medium text-center">
                    Campaign Ended
                  </div>
                )}

                {!isConnected && campaign.isActive && (
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Please connect your wallet to make a donation
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {formatAmount(campaign.currentAmount)}
              </div>
              <div className="text-sm text-gray-600">STX Raised</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {formatAmount(campaign.targetAmount)}
              </div>
              <div className="text-sm text-gray-600">STX Goal</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {Math.ceil(campaign.currentAmount / 5)}
              </div>
              <div className="text-sm text-gray-600">Donors</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-3">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {campaign.isActive ? getDaysRemaining() : 0}
              </div>
              <div className="text-sm text-gray-600">Days Left</div>
            </div>
          </div>
        </div>

        {/* Creator Info */}
        <div className="p-8 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-white">
                {campaign.creator.slice(2, 4).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Campaign Creator</h3>
              <p className="text-sm text-gray-600 font-mono">
                {campaign.creator}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {showDonationModal && (
        <DonationModal
          isOpen={showDonationModal}
          onClose={() => setShowDonationModal(false)}
          campaignId={campaign.id}
          campaignTitle={campaign.title}
          onDonate={handleDonate}
        />
      )}
    </div>
  );
};
