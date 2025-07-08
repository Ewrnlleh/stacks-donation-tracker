'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import CampaignCard from '@/components/CampaignCard';
import { contractService, Campaign } from '@/services/contractService';
import { useWallet } from '@/context/WalletContext';
import { Search, Plus, Heart, TrendingUp, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState<Campaign[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'ended'>('all');
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState({
    totalCampaigns: 0,
    totalDonations: 0,
    totalRaised: 0,
    activeCampaigns: 0,
  });

  const { isConnected } = useWallet();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      loadCampaigns();
      loadStats();
    }
  }, [mounted]);

  useEffect(() => {
    if (mounted) {
      filterCampaigns();
    }
  }, [campaigns, searchTerm, filter, mounted]);

  const handleExploreCampaigns = () => {
    // Clear search term to show all campaigns
    setSearchTerm('');
    setFilter('all');
    
    // Scroll to campaigns section
    const campaignSection = document.getElementById('campaigns-section');
    if (campaignSection) {
      campaignSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const loadCampaigns = async () => {
    try {
      setLoading(true);
      const allCampaigns = await contractService.getAllCampaigns();
      setCampaigns(allCampaigns);
    } catch (error) {
      console.error('Error loading campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    try {
      const totalCampaigns = await contractService.getTotalCampaigns();
      const totalDonations = await contractService.getTotalDonations();
      
      setStats(prev => ({
        ...prev,
        totalCampaigns,
        totalDonations,
      }));
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const filterCampaigns = () => {
    let filtered = campaigns;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        campaign =>
          campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          campaign.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (filter === 'active') {
      filtered = filtered.filter(campaign => campaign.isActive);
    } else if (filter === 'ended') {
      filtered = filtered.filter(campaign => !campaign.isActive);
    }

    setFilteredCampaigns(filtered);

    // Update stats
    const totalRaised = filtered.reduce((sum, campaign) => sum + campaign.currentAmount, 0);
    const activeCampaigns = filtered.filter(campaign => campaign.isActive).length;
    
    setStats(prev => ({
      ...prev,
      totalRaised,
      activeCampaigns,
    }));
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading DeFi Donation Tracker...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent Charity
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Donate with confidence on the Stacks blockchain
            </p>
            <p className="text-lg mb-8 text-orange-100 max-w-3xl mx-auto">
              Every donation is tracked transparently on-chain. Support causes you care about 
              and see exactly how your contributions make an impact.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {isConnected ? (
                <Link
                  href="/create"
                  className="flex items-center justify-center space-x-2 bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <Plus className="h-5 w-5" />
                  <span>Create Campaign</span>
                </Link>
              ) : (
                <button
                  onClick={() => {}}
                  className="flex items-center justify-center space-x-2 bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <Heart className="h-5 w-5" />
                  <span>Connect to Get Started</span>
                </button>
              )}
              
              <button
                onClick={handleExploreCampaigns}
                className="flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <Search className="h-5 w-5" />
                <span>Explore Campaigns</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.totalCampaigns}</div>
              <div className="text-sm text-gray-600">Total Campaigns</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.activeCampaigns}</div>
              <div className="text-sm text-gray-600">Active Now</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.totalDonations}</div>
              <div className="text-sm text-gray-600">Total Donations</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="h-6 w-6 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {stats.totalRaised.toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">STX Raised</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div id="campaigns-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search campaigns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Filter */}
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                filter === 'all'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                filter === 'active'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('ended')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                filter === 'ended'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Ended
            </button>
          </div>
        </div>

        {/* Campaigns Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        ) : filteredCampaigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No campaigns found
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm
                ? 'Try adjusting your search terms or filters.'
                : 'Be the first to create a campaign and make a difference!'}
            </p>
            {isConnected && (
              <Link
                href="/create"
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Plus className="h-5 w-5" />
                <span>Create First Campaign</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
