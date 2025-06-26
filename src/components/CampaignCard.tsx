'use client';

import React from 'react';
import Link from 'next/link';
import { Campaign } from '@/services/contractService';
import { Calendar, Target, TrendingUp, Users } from 'lucide-react';

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
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

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
            {campaign.title}
          </h3>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              campaign.isActive
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {campaign.isActive ? 'Active' : 'Ended'}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {campaign.description}
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm font-medium text-gray-900">
              {progressPercentage.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-orange-500" />
            <div>
              <p className="text-xs text-gray-500">Raised</p>
              <p className="text-sm font-semibold text-gray-900">
                {formatAmount(campaign.currentAmount)} STX
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Target className="h-4 w-4 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Goal</p>
              <p className="text-sm font-semibold text-gray-900">
                {formatAmount(campaign.targetAmount)} STX
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>
              {campaign.isActive
                ? `${getDaysRemaining()} days left`
                : 'Campaign ended'}
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Users className="h-3 w-3" />
            <span>Block #{campaign.createdAt}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex space-x-2">
          <Link
            href={`/campaign/${campaign.id}`}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
          >
            View Details
          </Link>
          
          {campaign.isActive && (
            <Link
              href={`/campaign/${campaign.id}/donate`}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
            >
              Donate Now
            </Link>
          )}
        </div>
      </div>

      {/* Creator Info */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">
              {campaign.creator.slice(2, 4).toUpperCase()}
            </span>
          </div>
          <div>
            <p className="text-xs text-gray-500">Created by</p>
            <p className="text-xs font-medium text-gray-700">
              {campaign.creator.slice(0, 12)}...{campaign.creator.slice(-6)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
