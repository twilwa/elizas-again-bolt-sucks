"use client";

import { WalletEntryPosition } from "@particle-network/auth";
import { Ethereum, Polygon } from "@particle-network/chains";
import { ModalProvider } from "@particle-network/connect-react-ui";
import "@particle-network/connect-react-ui/dist/index.css";

export function ParticleProvider({ children }: { children: React.ReactNode }) {
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
  const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY;
  const appId = process.env.NEXT_PUBLIC_APP_ID;

  if (!projectId || !clientKey || !appId) {
    console.warn(
      "Particle Network credentials not found. Please add them to your .env.local file."
    );
  }

  return (
    <ModalProvider
      options={{
        projectId: projectId as string,
        clientKey: clientKey as string,
        appId: appId as string,
        chains: [Ethereum, Polygon],
        particleWalletEntry: {
          displayWalletEntry: true,
          defaultWalletEntryPosition: WalletEntryPosition.BR,
          supportChains: [Ethereum, Polygon],
        },
        authentication: {
          options: ['email', 'google', 'twitter', 'github'],
          defaultMethod: 'email',
        },
        appearance: {
          showSignUpLink: true,
          showTermsOfService: true,
          showPrivacyPolicy: true,
          theme: 'dark',
          accentColor: '#FF5D01',
          displayCloseButton: true,
          modalWidth: '420px',
        },
      }}
      theme="dark"
      language="en"
      walletSort={['particle', 'metamask', 'walletconnect']}
    >
      {children}
    </ModalProvider>
  );
}