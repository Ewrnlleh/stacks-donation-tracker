'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useWallet } from '@/context/WalletContext';
import { Wallet, Heart, TrendingUp, Users, LogOut } from 'lucide-react';

const Navigation: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { isConnected, connect, disconnect, userData } = useWallet();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and main navigation */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-orange-500" />
              <span className="font-bold text-xl text-gray-900">
                DeFi Donation Tracker
              </span>
            </Link>
            
            <div className="hidden md:flex ml-10 space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1"
              >
                <TrendingUp className="h-4 w-4" />
                <span>Campaigns</span>
              </Link>
              
              {mounted && isConnected && (
                <>
                  <Link
                    href="/create"
                    className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Create Campaign
                  </Link>
                  <Link
                    href="/dashboard"
                    className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1"
                  >
                    <Users className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Wallet connection */}
          <div className="flex items-center space-x-4">
            {mounted && isConnected ? (
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">
                    {userData?.profile?.stxAddress?.testnet?.slice(0, 8)}...
                  </span>
                </div>
                <button
                  onClick={disconnect}
                  className="flex items-center space-x-2 bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Disconnect</span>
                </button>
              </div>
            ) : mounted ? (
              <button
                onClick={connect}
                className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                <Wallet className="h-4 w-4" />
                <span>Connect Wallet</span>
              </button>
            ) : (
              <div className="flex items-center space-x-2 bg-gray-300 text-gray-500 px-6 py-2 rounded-lg">
                <Wallet className="h-4 w-4" />
                <span>Loading...</span>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Campaigns
            </Link>
            
            {mounted && isConnected && (
              <>
                <Link
                  href="/create"
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Create Campaign
                </Link>
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
