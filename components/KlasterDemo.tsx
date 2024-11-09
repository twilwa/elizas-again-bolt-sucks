// components/KlasterDemo.tsx
'use client';

import { useSmartAccount, useAccount } from "@particle-network/connectkit";
import { Button } from "./ui/button";
import { initializeKlaster, getUnifiedBalance } from "@/lib/klaster";
import { useEffect, useState } from "react";
import type { MultichainClient, MultichainTokenMapping } from "klaster-sdk";

interface KlasterState {
  mcClient: MultichainClient;
  supportedUSDC: MultichainTokenMapping;
}

export function KlasterDemo() {
  const smartAccount = useSmartAccount();
  const { isConnected, chain } = useAccount();
  const [klasterState, setKlasterState] = useState<KlasterState | null>(null);
  const [smartAccountAddress, setSmartAccountAddress] = useState<string | null>(null);

  useEffect(() => {
    const initializeWithSmartAccount = async () => {
      if (smartAccount && isConnected) {
        try {
          const address = await smartAccount.getAddress();
          setSmartAccountAddress(address);
          
          const state = await initializeKlaster(address);
          setKlasterState(state);
          
          console.log('Smart Account Address:', address);
        } catch (error) {
          console.error('Error initializing:', error);
        }
      }
    };

    initializeWithSmartAccount();
  }, [smartAccount, isConnected]);

  const handleCheckBalance = async () => {
    if (!klasterState || !smartAccountAddress) return;
    
    try {
      const balance = await getUnifiedBalance(
        klasterState.mcClient,
        klasterState.supportedUSDC,
        smartAccountAddress
      );

      console.log('Chain:', chain?.name);
      console.log('Smart Account:', smartAccountAddress);
      console.log('Unified Balance:', balance);
    } catch (error) {
      console.error('Failed to get balance:', error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {smartAccountAddress && (
          <p className="text-sm">Smart Account: {smartAccountAddress}</p>
        )}
        {chain && (
          <p className="text-sm">Current Chain: {chain.name}</p>
        )}
      </div>

      <Button 
        onClick={handleCheckBalance}
        disabled={!klasterState || !smartAccountAddress}
      >
        Check Unified Balance
      </Button>
    </div>
  );
}