// components/ConnectButton.tsx
"use client";

import { useAccount, useModal, useParticleAuth, useWallets } from "@particle-network/connectkit";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useEffect, useState } from "react";

export function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { setOpen } = useModal();
  const { getUserInfo } = useParticleAuth();
  const [primaryWallet] = useWallets();
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      // Only fetch user info if connected through Particle Auth
      if (isConnected && primaryWallet?.connector?.walletConnectorType === 'particleAuth') {
        try {
          const info = await getUserInfo();
          setUserInfo(info);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      }
    };

    fetchUserInfo();
  }, [isConnected, getUserInfo, primaryWallet]);

  const displayName = userInfo?.name || 
                     userInfo?.email || 
                     userInfo?.google_email ||
                     userInfo?.github_email ||
                     (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '');

  return (
    <Button
      onClick={() => setOpen(true)}
      className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white"
    >
      <Wallet className="h-4 w-4" />
      {isConnected ? displayName : "Connect Wallet"}
    </Button>
  );
}