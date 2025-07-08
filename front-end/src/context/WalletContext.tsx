'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { AppConfig, UserSession, showConnect, openContractCall } from '@stacks/connect';
import { StacksTestnet, StacksMainnet } from '@stacks/network';
import { 
  standardPrincipalCV, 
  uintCV, 
  stringUtf8CV,
  PostConditionMode,
  AnchorMode
} from '@stacks/transactions';

interface WalletContextType {
  isConnected: boolean;
  userData: any;
  userSession: UserSession;
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

const appConfig = new AppConfig(['store_write', 'publish_data']);

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [userSession] = useState(() => new UserSession({ appConfig }));
  const [isConnected, setIsConnected] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const network = process.env.NEXT_PUBLIC_NETWORK === 'mainnet' ? new StacksMainnet() : new StacksTestnet();
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || 'ST3AM1A56AK2C1XAFJ4115ZSV26EB49BVQ10MGCS0';
  const donationContractName = process.env.NEXT_PUBLIC_DONATION_CONTRACT_NAME || 'donation-tracker-v2';

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        setUserData(userData);
        setIsConnected(true);
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
      setIsConnected(true);
    }
  }, [userSession]);

  const connect = async () => {
    setLoading(true);
    try {
      await showConnect({
        appDetails: {
          name: 'DeFi Donation Tracker',
          icon: '/logo.svg',
        },
        redirectTo: '/',
        onFinish: () => {
          window.location.reload();
        },
        userSession,
      });
    } catch (err) {
      console.error('Wallet connection error:', err);
      setError('Failed to connect wallet');
    } finally {
      setLoading(false);
    }
  };

  const disconnect = () => {
    userSession.signUserOut();
    setIsConnected(false);
    setUserData(null);
    window.location.reload();
  };

  const createCampaign = async (title: string, description: string, targetAmount: number, duration: number) => {
    if (!isConnected) throw new Error('Wallet not connected');
    
    setLoading(true);
    try {
      const targetAmountMicroSTX = Math.floor(targetAmount * 1000000); // Convert STX to microSTX
      
      await openContractCall({
        network,
        contractAddress,
        contractName: donationContractName,
        functionName: 'create-campaign',
        functionArgs: [
          stringUtf8CV(title),
          stringUtf8CV(description),
          uintCV(targetAmountMicroSTX),
          uintCV(duration)
        ],
        postConditionMode: PostConditionMode.Allow,
        anchorMode: AnchorMode.Any,
        onFinish: (data) => {
          console.log('Campaign created successfully:', data);
        },
        onCancel: () => {
          console.log('Campaign creation cancelled');
        },
      });
    } catch (err) {
      console.error('Campaign creation error:', err);
      setError('Failed to create campaign');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const donateToCampaign = async (campaignId: number, amount: number, message?: string) => {
    if (!isConnected) throw new Error('Wallet not connected');
    
    setLoading(true);
    try {
      const amountMicroSTX = Math.floor(amount * 1000000); // Convert STX to microSTX
      
      await openContractCall({
        network,
        contractAddress,
        contractName: donationContractName,
        functionName: 'donate-to-campaign',
        functionArgs: [
          uintCV(campaignId),
          uintCV(amountMicroSTX),
          stringUtf8CV(message || '')
        ],
        postConditionMode: PostConditionMode.Allow,
        anchorMode: AnchorMode.Any,
        onFinish: (data) => {
          console.log('Donation successful:', data);
        },
        onCancel: () => {
          console.log('Donation cancelled');
        },
      });
    } catch (err) {
      console.error('Donation error:', err);
      setError('Failed to make donation');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const makeDonation = donateToCampaign;

  const withdrawFunds = async (campaignId: number) => {
    if (!isConnected) throw new Error('Wallet not connected');
    
    setLoading(true);
    try {
      await openContractCall({
        network,
        contractAddress,
        contractName: donationContractName,
        functionName: 'withdraw-funds',
        functionArgs: [uintCV(campaignId)],
        postConditionMode: PostConditionMode.Allow,
        anchorMode: AnchorMode.Any,
        onFinish: (data) => {
          console.log('Withdrawal successful:', data);
        },
        onCancel: () => {
          console.log('Withdrawal cancelled');
        },
      });
    } catch (err) {
      console.error('Withdrawal error:', err);
      setError('Failed to withdraw funds');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value: WalletContextType = {
    isConnected,
    userData,
    userSession,
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