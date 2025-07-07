'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppConfig, UserSession, showConnect, openContractCall } from '@stacks/connect';
import { STACKS_TESTNET, STACKS_MAINNET } from '@stacks/network';
import { 
  PostConditionMode, 
  makeContractCall,
  broadcastTransaction,
  AnchorMode,
  PostCondition
} from '@stacks/transactions';
import { principalCV, uintCV, stringAsciiCV, someCV, noneCV } from '@stacks/transactions';

// App configuration
const appConfig = new AppConfig(['store_write', 'publish_data']);

// Network configuration using environment variables
const getNetwork = () => {
  const networkType = process.env.NEXT_PUBLIC_STACKS_NETWORK || 'testnet';
  return networkType === 'mainnet' ? STACKS_MAINNET : STACKS_TESTNET;
};

const network = getNetwork();

// Contract details from environment variables
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_DEPLOYER_TESTNET_ADDRESS || 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
const DONATION_CONTRACT_NAME = process.env.NEXT_PUBLIC_DONATION_CONTRACT_NAME || 'donation-tracker';
const REWARDS_CONTRACT_NAME = process.env.NEXT_PUBLIC_REWARDS_CONTRACT_NAME || 'donation-rewards';

interface WalletContextType {
  userSession: UserSession;
  userData: any;
  isConnected: boolean;
  connect: () => void;
  disconnect: () => void;
  createCampaign: (title: string, description: string, targetAmount: number, durationBlocks: number) => Promise<void>;
  makeDonation: (campaignId: number, amount: number, message?: string) => Promise<void>;
  withdrawFunds: (campaignId: number) => Promise<void>;
  loading: boolean;
  error: string | null;
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
  const [userSession] = useState(() => new UserSession({ appConfig }));
  const [userData, setUserData] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        setUserData(userData);
        setIsConnected(true);
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
      setIsConnected(true);
    }
  }, [userSession, mounted]);

  const connect = () => {
    showConnect({
      appDetails: {
        name: 'Stacks DeFi Donation Tracker',
        icon: '/logo.png',
      },
      redirectTo: '/',
      onFinish: () => {
        window.location.reload();
      },
      userSession,
    });
  };

  const disconnect = () => {
    userSession.signUserOut('/');
    setUserData(null);
    setIsConnected(false);
  };

  const createCampaign = async (
    title: string, 
    description: string, 
    targetAmount: number, 
    durationBlocks: number
  ) => {
    if (!isConnected) {
      throw new Error('Wallet not connected');
    }

    setLoading(true);
    setError(null);

    try {
      const functionArgs = [
        stringAsciiCV(title),
        stringAsciiCV(description),
        uintCV(targetAmount * 1000000), // Convert to microSTX
        uintCV(durationBlocks),
      ];

      const txOptions = {
        contractAddress: CONTRACT_ADDRESS,
        contractName: DONATION_CONTRACT_NAME,
        functionName: 'create-campaign',
        functionArgs,
        network,
        anchorMode: AnchorMode.Any,
        postConditionMode: PostConditionMode.Allow,
      };

      await openContractCall(txOptions);
    } catch (err) {
      setError(`Failed to create campaign: ${err}`);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const makeDonation = async (campaignId: number, amount: number, message?: string) => {
    if (!isConnected) {
      throw new Error('Wallet not connected');
    }

    setLoading(true);
    setError(null);

    try {
      const amountInMicroSTX = amount * 1000000; // Convert to microSTX
      
      const functionArgs = [
        uintCV(campaignId),
        uintCV(amountInMicroSTX),
        message ? someCV(stringAsciiCV(message)) : noneCV(),
      ];

      // Post condition to ensure the user has enough STX
      const postConditions: PostCondition[] = [];

      const txOptions = {
        contractAddress: CONTRACT_ADDRESS,
        contractName: DONATION_CONTRACT_NAME,
        functionName: 'donate',
        functionArgs,
        network,
        anchorMode: AnchorMode.Any,
        postConditions,
        postConditionMode: PostConditionMode.Allow,
      };

      await openContractCall(txOptions);
    } catch (err) {
      setError(`Failed to make donation: ${err}`);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const withdrawFunds = async (campaignId: number) => {
    if (!isConnected) {
      throw new Error('Wallet not connected');
    }

    setLoading(true);
    setError(null);

    try {
      const functionArgs = [uintCV(campaignId)];

      const txOptions = {
        contractAddress: CONTRACT_ADDRESS,
        contractName: DONATION_CONTRACT_NAME,
        functionName: 'withdraw-funds',
        functionArgs,
        network,
        anchorMode: AnchorMode.Any,
        postConditionMode: PostConditionMode.Allow,
      };

      await openContractCall(txOptions);
    } catch (err) {
      setError(`Failed to withdraw funds: ${err}`);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value: WalletContextType = {
    userSession,
    userData,
    isConnected: mounted ? isConnected : false,
    connect,
    disconnect,
    createCampaign,
    makeDonation,
    withdrawFunds,
    loading,
    error,
  };

  // Prevent hydration issues by not rendering until mounted
  if (!mounted) {
    return (
      <WalletContext.Provider value={{
        userSession,
        userData: null,
        isConnected: false,
        connect,
        disconnect,
        createCampaign,
        makeDonation,
        withdrawFunds,
        loading: false,
        error: null,
      }}>
        {children}
      </WalletContext.Provider>
    );
  }

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};
