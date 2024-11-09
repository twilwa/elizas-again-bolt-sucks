// hooks/useSmartWallet.ts
import { useSmartAccount, useAccount } from '@particle-network/connectkit';
import { useState, useEffect } from 'react';

export function useSmartWallet() {
  const smartAccount = useSmartAccount();
  const { isConnected } = useAccount();
  const [smartAccountAddress, setSmartAccountAddress] = useState<string | null>(null);

  useEffect(() => {
    const getSmartAccountAddress = async () => {
      if (smartAccount && isConnected) {
        try {
          const address = await smartAccount.getAddress();
          setSmartAccountAddress(address);
        } catch (error) {
          console.error('Failed to get smart account address:', error);
        }
      }
    };

    getSmartAccountAddress();
  }, [smartAccount, isConnected]);

  return {
    smartAccount,
    smartAccountAddress,
    isConnected
  };
}