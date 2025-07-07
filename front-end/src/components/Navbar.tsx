"use client";

import Link from "next/link";
import { DevnetWalletButton } from "./DevnetWalletButton";
import { ConnectWalletButton } from "./ConnectWalletButton";

export const Navbar = () => {
  // For now, let's just use ConnectWalletButton
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between h-16 items-center px-4">
          <div className="flex items-center">
            <div className="bg-white rounded-md border-2 border-gray-700 text-xl font-bold w-12 h-12 flex justify-center items-center text-gray-900">
              ♦
            </div>
            <Link href="/" className="no-underline">
              <div className="text-lg font-bold text-gray-900 ml-4">
                Donation Tracker
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {isDev ? (
              <DevnetWalletButton />
            ) : (
              <ConnectWalletButton />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
