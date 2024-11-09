// components/ConnectButton.tsx
"use client";

import { useAccount, useModal, useAddress, useSmartAccount } from "@particle-network/connectkit";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useEffect } from "react";

export function ConnectButton() {
    const { isConnected, isConnecting } = useAccount();
    const { setOpen } = useModal();
    const address = useAddress(); // Will return smart account address when AA enabled
    const smartAccount = useSmartAccount(); // Get smart account instance

    // Optional: Log the smart account address when connected to verify AA is working
    useEffect(() => {
        if (smartAccount) {
            smartAccount.getAddress()
                .then(addr => console.log('Smart Account Address:', addr))
                .catch(console.error);
        }
    }, [smartAccount]);

    return (
        <Button
            onClick={() => setOpen(true)}
            disabled={isConnecting}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white"
        >
            <Wallet className="h-4 w-4" />
            {isConnecting ? 
                "Connecting..." : 
                isConnected ? 
                    `${address?.slice(0, 6)}...${address?.slice(-4)}` : 
                    "Connect Wallet"
            }
        </Button>
    );
}