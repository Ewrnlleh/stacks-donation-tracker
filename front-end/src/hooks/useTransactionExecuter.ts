'use client';

import { useState, useCallback } from 'react';
import { openContractCall } from '@stacks/connect';
import { 
  PostConditionMode,
  AnchorMode,
} from '@stacks/transactions';
import { StacksNetwork } from '@stacks/network';

interface UseTransactionExecuterProps {
  network: StacksNetwork;
}

interface TransactionOptions {
  contractAddress: string;
  contractName: string;
  functionName: string;
  functionArgs: any[];
  postConditions?: any[];
  postConditionMode?: PostConditionMode;
  onSuccess?: (txId: string) => void;
  onError?: (error: Error) => void;
}

export const useTransactionExecuter = ({ network }: UseTransactionExecuterProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txId, setTxId] = useState<string | null>(null);

  const executeTransaction = useCallback(async (options: TransactionOptions) => {
    try {
      setIsLoading(true);
      setError(null);
      setTxId(null);

      const txOptions = {
        contractAddress: options.contractAddress,
        contractName: options.contractName,
        functionName: options.functionName,
        functionArgs: options.functionArgs,
        network,
        postConditions: options.postConditions || [],
        postConditionMode: options.postConditionMode || PostConditionMode.Deny,
        anchorMode: AnchorMode.Any,
        onFinish: (data: { txId: string }) => {
          setTxId(data.txId);
          setIsLoading(false);
          if (options.onSuccess) {
            options.onSuccess(data.txId);
          }
        },
        onCancel: () => {
          setIsLoading(false);
          setError('Transaction was cancelled');
        },
      };

      await openContractCall(txOptions);
    } catch (err) {
      setIsLoading(false);
      const errorMessage = err instanceof Error ? err.message : 'Transaction failed';
      setError(errorMessage);
      if (options.onError) {
        options.onError(err instanceof Error ? err : new Error(errorMessage));
      }
    }
  }, [network]);

  const reset = useCallback(() => {
    setIsLoading(false);
    setError(null);
    setTxId(null);
  }, []);

  return {
    executeTransaction,
    isLoading,
    error,
    txId,
    reset,
  };
};
