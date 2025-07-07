'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Temporary stub implementation of WalletContext
// This provides the same interface as the full implementation but without @stacks dependencies

interface WalletContextType {
  isConnected: boolean;
  userData: any;
  userSession: any;
  connect: () => Promise<void>;
  disconnect: () => void;
  createCampaign: (title: string, description: string, targetAmount: number, duration: number) => Promise<void>;
  donateToCampaign: (campaignId: number, amount: number, message?: string) => Promise<void>;
  makeDonation?: (campaignId: number, amount: number, message?: string) => Promise<void>;
  withdrawFunds?: (campaignId: number) => Promise<void>;
  loading?: boolean;
  error?: string | null;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connect = async () => {
    console.log('Wallet connection stub - @stacks integration disabled temporarily');
    // Simulate connection
    setIsConnected(true);
    setUserData({ profile: { stxAddress: { testnet: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM' } } });
  };

  const disconnect = () => {
    console.log('Wallet disconnect stub');
    setIsConnected(false);
    setUserData(null);
  };

  const createCampaign = async (title: string, description: string, targetAmount: number, duration: number) => {
    console.log('Create campaign stub:', { title, description, targetAmount, duration });
    setError('@stacks integration temporarily disabled - campaign creation not available');
    throw new Error('Campaign creation not implemented yet - @stacks integration needed');
  };

  const donateToCampaign = async (campaignId: number, amount: number, message?: string) => {
    console.log('Donate to campaign stub:', { campaignId, amount, message });
    setError('@stacks integration temporarily disabled - donations not available');
    throw new Error('Donation not implemented yet - @stacks integration needed');
  };

  const makeDonation = donateToCampaign;

  const withdrawFunds = async (campaignId: number) => {
    console.log('Withdraw funds stub:', { campaignId });
    setError('@stacks integration temporarily disabled - withdrawals not available');
    throw new Error('Withdrawal not implemented yet - @stacks integration needed');
  };

  const value: WalletContextType = {
    isConnected,
    userData,
    userSession: null,
    connect,
    disconnect,
    createCampaign,
    donateToCampaign,
    makeDonation,
    withdrawFunds,
    loading,
    error,
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};