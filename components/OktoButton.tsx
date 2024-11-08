"use client";

import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useState } from "react";

export function OktoButton() {
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState<string | null>(null);

  const handleConnect = async () => {
    setLoading(true);
    // TODO: Implement Okto connection logic
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleDisconnect = async () => {
    setLoading(true);
    // TODO: Implement Okto disconnection logic
    setAccount(null);
    setLoading(false);
  };

  return (
    <Button
      onClick={account ? handleDisconnect : handleConnect}
      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white"
      disabled={loading}
    >
      <Wallet className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
      {loading ? "Connecting..." :
        account ? 
          `${account.slice(0, 6)}...${account.slice(-4)}` : 
          "Okto Connect"
      }
    </Button>
  );
}