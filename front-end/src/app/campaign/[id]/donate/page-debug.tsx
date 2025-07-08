'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { contractService, Campaign } from '@/services/contractService';

export default function DonatePageDebug() {
  console.log('DonatePageDebug component started');
  
  const params = useParams();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const campaignId = parseInt(params.id as string, 10);

  console.log('DonatePageDebug rendering, params:', params, 'campaignId:', campaignId);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      console.log('DonatePageDebug mounted, fetching campaign with ID:', campaignId);
      fetchCampaign();
    }
  }, [mounted, campaignId]);

  const fetchCampaign = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Fetching campaign, ID:', campaignId, 'isNaN:', isNaN(campaignId));
      
      if (!campaignId || isNaN(campaignId)) {
        setError('Invalid campaign ID');
        return;
      }

      const campaignData = await contractService.getCampaign(campaignId);
      
      console.log('Campaign data received:', campaignData);
      
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

  return (
    <div className="min-h-screen bg-yellow-50" style={{ minHeight: '100vh', backgroundColor: 'yellow' }}>
      <div className="p-8">
        <h1 className="text-4xl font-bold text-black mb-4">
          DONATE PAGE DEBUG - Campaign {campaignId}
        </h1>
        <p className="text-lg text-black">
          Mounted: {mounted ? 'Yes' : 'No'}<br />
          Loading: {loading ? 'Yes' : 'No'}<br />
          Campaign: {campaign ? campaign.title : 'None'}<br />
          Error: {error || 'None'}
        </p>
        
        {!mounted && (
          <div className="bg-red-200 p-4 mt-4">
            <p>Component not mounted yet</p>
          </div>
        )}
        
        {loading && (
          <div className="bg-blue-200 p-4 mt-4">
            <p>Loading campaign data...</p>
          </div>
        )}
        
        {error && (
          <div className="bg-red-200 p-4 mt-4">
            <p>Error: {error}</p>
          </div>
        )}
        
        {campaign && (
          <div className="bg-green-200 p-4 mt-4">
            <h2 className="font-bold">Campaign Found:</h2>
            <p>Title: {campaign.title}</p>
            <p>Target: {campaign.targetAmount} STX</p>
            <p>Current: {campaign.currentAmount} STX</p>
            <p>Active: {campaign.isActive ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
