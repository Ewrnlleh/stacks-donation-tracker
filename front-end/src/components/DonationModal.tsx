'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaignId: number;
  campaignTitle: string;
  onDonate: (amount: number, message?: string) => Promise<void>;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  campaignId,
  campaignTitle,
  onDonate,
}) => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const donationAmount = parseFloat(amount);
    if (isNaN(donationAmount) || donationAmount <= 0) {
      setError('Please enter a valid donation amount');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);
      await onDonate(donationAmount, message || undefined);
      // Reset form
      setAmount('');
      setMessage('');
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process donation');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Make a Donation</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <p className="text-sm text-gray-600">Donating to:</p>
            <p className="font-medium text-gray-900">{campaignTitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Amount */}
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                Amount (STX) *
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                step="0.000001"
                min="0.000001"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.00"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message (optional)
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                maxLength={200}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Add an optional message..."
              />
              <p className="text-xs text-gray-500 mt-1">{message.length}/200 characters</p>
            </div>

            {/* Error */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !amount}
                className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Donate'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
