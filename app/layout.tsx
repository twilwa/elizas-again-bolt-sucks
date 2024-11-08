import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ParticleProvider } from './providers/ParticleProvider';
import { ThemeProvider } from './providers/theme-provider';
import { ChatWidget } from '@/components/ChatWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elizas - AI Agent Marketplace',
  description: 'The premier marketplace for AI agents',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="elizas-theme"
        >
          <ParticleProvider>
            {children}
            <ChatWidget />
          </ParticleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}