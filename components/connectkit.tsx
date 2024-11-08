'use client';

import { ConnectKitProvider, createConfig } from '@particle-network/connectkit';
import { authWalletConnectors } from '@particle-network/connectkit/auth';
import { mainnet } from '@particle-network/connectkit/chains';
import { evmWalletConnectors } from '@particle-network/connectkit/evm';
import React from 'react';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;
const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY as string;
const appId = process.env.NEXT_PUBLIC_APP_ID as string;

if (!projectId || !clientKey || !appId) {
    throw new Error('Please configure the Particle project in .env first!');
}

const config = createConfig({
    projectId,
    clientKey,
    appId,
    appearance: {
        connectorsOrder: ['email', 'phone', 'social', 'wallet'],
        splitEmailAndPhone: false,
        collapseWalletList: false,
        hideContinueButton: false,
        mode: 'light',
        theme: {
            '--pcm-accent-color': '#ff4d4f',
        },
    },
    walletConnectors: [
        authWalletConnectors({
            authTypes: ['email', 'google', 'github'],
            fiatCoin: 'USD',
            promptSettingConfig: {
                promptMasterPasswordSettingWhenLogin: 1,
                promptPaymentPasswordSettingWhenSign: 1,
            },
        }),
        evmWalletConnectors({
            metadata: { 
                name: 'Elizas', 
                description: 'AI Agent Marketplace',
                url: 'https://elizas.xyz',
            },
        }),
    ],
    chains: [mainnet],
});

export const ParticleConnectkit = ({ children }: React.PropsWithChildren) => {
    return <ConnectKitProvider config={config}>{children}</ConnectKitProvider>;
};;