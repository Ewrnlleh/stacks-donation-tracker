'use client';

import React, { useState } from 'react';
import { useDevnetWallet, devnetWallets } from '@/lib/devnet-wallet-context';

interface DevnetWalletButtonProps {
  className?: string;
}

export const DevnetWalletButton: React.FC<DevnetWalletButtonProps> = ({ 
  className = '' 
}) => {
  const { currentWallet, setCurrentWallet } = useDevnetWallet();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleWalletSelect = (wallet: typeof devnetWallets[0]) => {
    setCurrentWallet(wallet);
    setShowDropdown(false);
  };

  const handleDisconnect = () => {
    setCurrentWallet(null);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
          currentWallet
            ? 'bg-green-500 hover:bg-green-600 text-white'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        } ${className}`}
      >
        {currentWallet 
          ? `${currentWallet.label} (${currentWallet.stxAddress.slice(0, 6)}...${currentWallet.stxAddress.slice(-4)})` 
          : 'Connect Devnet Wallet'
        }
      </button>

      {showDropdown && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-2">
            {devnetWallets.map((wallet) => (
              <button
                key={wallet.stxAddress}
                onClick={() => handleWalletSelect(wallet)}
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-sm"
              >
                <div className="font-medium">{wallet.label}</div>
                <div className="text-gray-500 text-xs">{wallet.stxAddress}</div>
              </button>
            ))}
            {currentWallet && (
              <>
                <hr className="my-2" />
                <button
                  onClick={handleDisconnect}
                  className="w-full text-left px-3 py-2 rounded hover:bg-red-50 text-red-600 text-sm"
                >
                  Disconnect
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DevnetWalletButton;
