'use client';

import { ReactNode, createContext, useCallback, useState, useMemo } from 'react';
import { 
  AppConfig, 
  UserSession, 
  showConnect as showConnectModal,
  disconnect as disconnectWallet,
  getLocalStorage,
  isConnected
} from '@stacks/connect';

interface HiroWallet {
  isWalletOpen: boolean;
  isWalletConnected: boolean;
  testnetAddress: string | null;
  mainnetAddress: string | null;
  authenticate: () => void;
  disconnect: () => void;
}

const defaultValue: HiroWallet = {
  isWalletOpen: false,
  isWalletConnected: false,
  testnetAddress: null,
  mainnetAddress: null,
  authenticate: () => {},
  disconnect: () => {},
};

const HiroWalletContext = createContext<HiroWallet>(defaultValue);

interface ProviderProps {
  children: ReactNode | ReactNode[];
}

export const HiroWalletProvider = ({ children }: ProviderProps) => {
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(isConnected());

  const connect = useCallback(async () => {
    try {
      setIsWalletOpen(true);
      await showConnectModal({
        appDetails: {
          name: 'DeFi Donation Tracker',
          icon: '/logo.svg'
        },
        onFinish: () => {
          setIsWalletOpen(false);
          setIsWalletConnected(true);
        },
        onCancel: () => {
          setIsWalletOpen(false);
        }
      });
      setIsWalletOpen(false);
      setIsWalletConnected(isConnected());
    } catch (error) {
      console.error('Connection failed:', error);
      setIsWalletOpen(false);
    }
  }, []);

  const handleDisconnect = useCallback(() => {
    disconnectWallet();
    setIsWalletConnected(false);
  }, []);

  const { testnetAddress, mainnetAddress } = useMemo(() => {
    if (!isWalletConnected) return { testnetAddress: null, mainnetAddress: null };
    
    const data = getLocalStorage();
    const stxAddresses = data?.addresses?.stx || [];
    
    const address = stxAddresses.length > 0 ? stxAddresses[0].address : null;
    
    const isTestnet = address?.startsWith('ST');
    const isMainnet = address?.startsWith('SP');
    
    return {
      testnetAddress: isTestnet ? address : null,
      mainnetAddress: isMainnet ? address : null,
    };
  }, [isWalletConnected]);

  return (
    <HiroWalletContext.Provider
      value={{
        isWalletOpen,
        isWalletConnected,
        testnetAddress,
        mainnetAddress,
        authenticate: connect,
        disconnect: handleDisconnect,
      }}
    >
      {children}
    </HiroWalletContext.Provider>
  );
};

export default HiroWalletContext;
