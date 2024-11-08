"use client";

import { ConnectButton as ParticleConnectButton } from "@particle-network/connect-react-ui";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export function ConnectButton() {
  return (
    <ParticleConnectButton.Custom>
      {({ account, connect, disconnect, loading }) => (
        <Button
          onClick={account ? disconnect : connect}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white"
          disabled={loading}
        >
          <Wallet className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          {loading ? "Connecting..." :
            account ? 
              `${account.slice(0, 6)}...${account.slice(-4)}` : 
              "Particle Connect"
          }
        </Button>
      )}
    </ParticleConnectButton.Custom>
  );
}