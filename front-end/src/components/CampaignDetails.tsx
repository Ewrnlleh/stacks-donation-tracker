'use client';

import React, { useState } from 'react';
import { Calendar, Target, Users, Clock, Share2, Heart } from 'lucide-react';
import { useWallet } from '@/context/WalletContext';
import { DonationModal } from './DonationModal';

interface Campaign {
  id: number;
  title: string;
  description: string;
  creator: string;
  targetAmount: number;
  currentAmount: number;
  startTime: number;
  endTime: number;
  isActive: boolean;
  totalDonors: number;
  progress: number;
}

interface CampaignDetailsProps {
  campaign: Campaign;
  onDonate?: (campaignId: number, amount: number, message?: string) => Promise<void>;
}

export const CampaignDetails: React.FC<CampaignDetailsProps> = ({ 
  campaign, 
  onDonate 
}) => {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const { isConnected, donateToCampaign, loading } = useWallet();

  const handleDonate = async (amount: number, message?: string) => {
    if (onDonate) {
      await onDonate(campaign.id, amount, message);
    } else {
      await donateToCampaign(campaign.id, amount, message);
    }
    setShowDonationModal(false);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };

  const daysRemaining = Math.max(0, Math.ceil((campaign.endTime - Date.now()) / (1000 * 60 * 60 * 24)));

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
        <h1 className="text-3xl font-bold mb-2">{campaign.title}</h1>
        <p className="text-blue-100 flex items-center gap-2">
          <Users className="h-4 w-4" />
          Created by {campaign.creator.slice(0, 8)}...{campaign.creator.slice(-4)}
        </p>
      </div>

      <div className="p-6">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-3xl font-bold text-gray-900">
                {campaign.currentAmount.toFixed(2)} STX
              </p>
              <p className="text-gray-600">
                raised of {campaign.targetAmount.toFixed(2)} STX goal
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">
                {campaign.progress.toFixed(1)}%
              </p>
              <p className="text-gray-600">funded</p>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(campaign.progress, 100)}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Users className="h-6 w-6 text-blue-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900">{campaign.totalDonors}</p>
              <p className="text-sm text-gray-600">Donors</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Clock className="h-6 w-6 text-blue-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900">{daysRemaining}</p>
              <p className="text-sm text-gray-600">Days left</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Target className="h-6 w-6 text-blue-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900">
                {(campaign.targetAmount - campaign.currentAmount).toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">STX to go</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">About this campaign</h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {campaign.description}
          </p>
        </div>

        <div className="space-y-4">
          {campaign.isActive ? (
            <button
              onClick={() => setShowDonationModal(true)}
              disabled={!isConnected || loading}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Heart className="h-4 w-4" />
              {loading ? 'Processing...' : isConnected ? 'Donate Now' : 'Connect Wallet to Donate'}
            </button>
          ) : (
            <div className="w-full bg-gray-200 text-gray-600 py-3 px-4 rounded-lg font-medium text-center">
              Campaign Ended
            </div>
          )}

          {!isConnected && campaign.isActive && (
            <p className="text-xs text-gray-500 text-center">
              Please connect your wallet to make a donation
            </p>
          )}
        </div>
      </div>

      <DonationModal
        isOpen={showDonationModal}
        onClose={() => setShowDonationModal(false)}
        campaignId={campaign.id}
        campaignTitle={campaign.title}
        onDonate={handleDonate}
      />
    </div>
  );
};

export default CampaignDetails;
