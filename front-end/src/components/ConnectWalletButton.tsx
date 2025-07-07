'use client';

import React from 'react';

interface ConnectWalletButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  className = '',
  children = 'Connect Wallet',
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  const handleClick = () => {
    // Simplified wallet connection for now
    console.log('Connect wallet clicked');
  };

  const baseClasses = 'font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={classes}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default ConnectWalletButton;
