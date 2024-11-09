// components/dashboard/WalletInfo.tsx
"use client";

import { Wallet } from "lucide-react";
import { useSmartAccount, useAccount } from "@particle-network/connectkit";
import { useEffect, useState } from "react";
import { initializeKlaster, getUnifiedBalance } from "@/lib/klaster";
import type { MultichainClient, MultichainTokenMapping } from "klaster-sdk";
import type { UnifiedBalanceResult } from "klaster-sdk/dist/types";

interface KlasterState {
  mcClient: MultichainClient;
  supportedUSDC: MultichainTokenMapping;
}

export function WalletInfo() {
  const smartAccountHook = useSmartAccount();
  const { isConnected } = useAccount();
  const [klasterState, setKlasterState] = useState<KlasterState | null>(null);
  const [unifiedBalance, setUnifiedBalance] = useState<UnifiedBalanceResult | null>(null);
  const [smartAccountAddress, setSmartAccountAddress] = useState<string | null>(null);

  useEffect(() => {
    const initializeWithSmartAccount = async () => {
      if (smartAccountHook && isConnected) {
        try {
          const address = await smartAccountHook.getAddress();
          setSmartAccountAddress(address);

          if (address) {
            const state = await initializeKlaster(address);
            setKlasterState(state);

            const balance = await getUnifiedBalance(
              state.mcClient,
              state.supportedUSDC,
              address
            );
            setUnifiedBalance(balance);
          }
        } catch (error) {
          console.error("Error initializing:", error);
        }
      }
    };

    initializeWithSmartAccount();
  }, [smartAccountHook, isConnected]);

  // Helper function to format chain names
  const getChainName = (chainId: number): string => {
    const chains: Record<number, string> = {
      1: "Mainnet",
      11155111: "Sepolia",
      84532: "Base Sepolia",
    };
    return chains[chainId] || `Chain ${chainId}`;
  };

  if (!isConnected) {
    return (
      <div className="card bg-neutral">
        <div className="card-body">
          <h3 className="text-2xl font-bold">Connect Wallet</h3>
          <p className="text-sm opacity-70">
            Please connect your wallet to view balance information
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 space-y-6">
        {smartAccountAddress && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Wallet className="h-6 w-6" />
              <p className="font-mono">{smartAccountAddress}</p>
            </div>
          </div>
        )}

        {unifiedBalance && (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-sm opacity-70">Total USDC Balance</span>
              <p className="text-2xl font-bold">
                {(Number(unifiedBalance.balance) / 10 ** unifiedBalance.decimals).toFixed(2)} USDC
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-sm opacity-70">Balance by Chain</span>
              <div className="space-y-1">
                {unifiedBalance.breakdown.map((b) => (
                  <p key={b.chainId} className="text-sm">
                    {(Number(b.amount) / 10 ** unifiedBalance.decimals).toFixed(2)} USDC on{" "}
                    {getChainName(b.chainId)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}