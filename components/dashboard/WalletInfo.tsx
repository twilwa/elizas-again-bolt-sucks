"use client";

import { Wallet, ExternalLink, Copy } from "lucide-react";

export function WalletInfo() {
  // Mock data - replace with real wallet data later
  const walletData = {
    address: "0x1234...5678",
    balance: "1.234 ETH",
    usdBalance: "$2,468.00",
    network: "Ethereum",
  };

  return (
    <div className="card bg-neutral">
      <div className="card-body">
        <div className="flex items-start justify-between mb-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">Wallet</h3>
            <p className="text-sm opacity-70">Connected to {walletData.network}</p>
          </div>
          <Wallet className="h-6 w-6 text-primary" />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-70">Address</span>
              <div className="flex items-center gap-2">
                <button className="btn btn-ghost btn-sm btn-square">
                  <Copy className="h-4 w-4" />
                </button>
                <button className="btn btn-ghost btn-sm btn-square">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
            <p className="font-mono">{walletData.address}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-sm opacity-70">Balance</span>
              <p className="text-2xl font-bold">{walletData.balance}</p>
            </div>
            <div className="space-y-1">
              <span className="text-sm opacity-70">USD Value</span>
              <p className="text-2xl font-bold">{walletData.usdBalance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}