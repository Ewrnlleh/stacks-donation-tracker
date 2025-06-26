'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { useWallet } from '@/context/WalletContext';
import { contractService, Campaign } from '@/services/contractService';
import { 
  Heart, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Calendar,
  Target,
  ArrowRight,
  Plus,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const [myCampaigns, setMyCampaigns] = useState<Campaign[]>([]);
  const [myDonations, setMyDonations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'campaigns' | 'donations'>('campaigns');
  const [stats, setStats] = useState({
    totalCampaignsCreated: 0,
    totalRaised: 0,
    totalDonated: 0,
    totalDonationsMade: 0,
  });

  const { isConnected, userData } = useWallet();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && isConnected) {
      loadDashboardData();
    }
  }, [mounted, isConnected]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      
      // Get all campaigns and filter by user's address
      const allCampaigns = await contractService.getAllCampaigns();
      const userAddress = userData?.profile?.stxAddress?.testnet || '';
      
      // Filter campaigns created by the user
      const userCampaigns = allCampaigns.filter(campaign => 
        campaign.creator === userAddress
      );
      
      setMyCampaigns(userCampaigns);
      
      // Calculate stats
      const totalRaised = userCampaigns.reduce((sum, campaign) => 
        sum + campaign.currentAmount, 0
      );
      
      setStats(prev => ({
        ...prev,
        totalCampaignsCreated: userCampaigns.length,
        totalRaised,
        // Mock donation data for now
        totalDonated: 15.5,
        totalDonationsMade: 8,
      }));
      
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Connect Your Wallet
            </h2>
            <p className="text-gray-600 mb-6">
              You need to connect your Stacks wallet to view your dashboard.
            </p>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <Heart className="h-4 w-4" />
              <span>Go to Home</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Track your campaigns and donations
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Campaigns Created</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalCampaignsCreated}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Raised</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalRaised.toFixed(2)} STX</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Donated</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalDonated.toFixed(2)} STX</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Donations Made</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalDonationsMade}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'campaigns'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                My Campaigns ({myCampaigns.length})
              </button>
              <button
                onClick={() => setActiveTab('donations')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'donations'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                My Donations ({stats.totalDonationsMade})
              </button>
            </nav>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
              </div>
            ) : activeTab === 'campaigns' ? (
              <CampaignsTab campaigns={myCampaigns} />
            ) : (
              <DonationsTab />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Campaigns Tab Component
function CampaignsTab({ campaigns }: { campaigns: Campaign[] }) {
  if (campaigns.length === 0) {
    return (
      <div className="text-center py-16">
        <Target className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No campaigns yet
        </h3>
        <p className="text-gray-600 mb-6">
          Create your first campaign to start raising funds for your cause.
        </p>
        <Link
          href="/create"
          className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          <Plus className="h-4 w-4" />
          <span>Create Campaign</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {campaign.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {campaign.description}
              </p>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              {campaign.isActive ? (
                <span className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  <CheckCircle className="h-3 w-3" />
                  <span>Active</span>
                </span>
              ) : (
                <span className="flex items-center space-x-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                  <XCircle className="h-3 w-3" />
                  <span>Ended</span>
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">
                {campaign.currentAmount.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">Raised</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">
                {campaign.targetAmount.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">Goal</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">
                {Math.round((campaign.currentAmount / campaign.targetAmount) * 100)}%
              </p>
              <p className="text-sm text-gray-600">Progress</p>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${Math.min((campaign.currentAmount / campaign.targetAmount) * 100, 100)}%` 
              }}
            ></div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Block {campaign.endBlock}</span>
              </span>
            </div>
            <button className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center space-x-1">
              <span>View Details</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Donations Tab Component
function DonationsTab() {
  // Mock donation data
  const mockDonations = [
    {
      id: 1,
      campaignTitle: "Help Flood Victims in Local Community",
      amount: 5.0,
      date: "2025-06-20",
      status: "confirmed"
    },
    {
      id: 2,
      campaignTitle: "Education Fund for Underprivileged Children",
      amount: 10.5,
      date: "2025-06-18",
      status: "confirmed"
    }
  ];

  if (mockDonations.length === 0) {
    return (
      <div className="text-center py-16">
        <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No donations yet
        </h3>
        <p className="text-gray-600 mb-6">
          Start supporting campaigns to make a difference in the world.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          <Heart className="h-4 w-4" />
          <span>Browse Campaigns</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {mockDonations.map((donation) => (
        <div key={donation.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-1">
                {donation.campaignTitle}
              </h4>
              <p className="text-sm text-gray-600">{donation.date}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">
                {donation.amount.toFixed(2)} STX
              </p>
              <span className="inline-flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                <CheckCircle className="h-3 w-3" />
                <span>Confirmed</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
