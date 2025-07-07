'use client';

import { ReactNode, useState } from 'react';
import { DevnetWalletContext, DevnetWallet, devnetWallets } from '@/lib/devnet-wallet-context';

interface DevnetWalletProviderProps {
  children: ReactNode;
}

export function DevnetWalletProvider({ children }: DevnetWalletProviderProps) {
  const [currentWallet, setCurrentWallet] = useState<DevnetWallet>(devnetWallets[0]);

  const handleSetCurrentWallet = (wallet: DevnetWallet | null) => {
    if (wallet) {
      setCurrentWallet(wallet);
    }
  };

  return (
    <DevnetWalletContext.Provider
      value={{
        currentWallet,
        wallets: devnetWallets,
        setCurrentWallet: handleSetCurrentWallet,
      }}
    >
      {children}
    </DevnetWalletContext.Provider>
  );
}
