// components/SmartAccountButton.tsx
'use client';

import { useSmartAccount } from '@particle-network/connectkit';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export function SmartAccountButton() {
    const smartAccount = useSmartAccount();
    const [address, setAddress] = useState<string | null>(null);

    useEffect(() => {
        if (smartAccount) {
            smartAccount.getAddress()
                .then(addr => setAddress(addr))
                .catch(console.error);
        }
    }, [smartAccount]);

    const sendTestTransaction = async () => {
        if (!smartAccount) return;

        try {
            const userOp = await smartAccount.buildUserOperation({
                tx: {
                    to: "0x0000000000000000000000000000000000000000",
                    value: "0x1", // 1 wei
                    data: "0x",
                }
            });
            
            const txHash = await smartAccount.sendUserOperation(userOp);
            console.log("Transaction hash:", txHash);
        } catch (error) {
            console.error("Transaction failed:", error);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            {address && (
                <>
                    <div>Smart Account: {address}</div>
                    <Button onClick={sendTestTransaction}>
                        Send Test Transaction
                    </Button>
                </>
            )}
        </div>
    );
}