import './globals.css';
import { SWRConfig } from 'swr';
import { getUser, getTeamForUser } from '@/lib/db/queries';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Next.js SaaS Starter',
  description: 'Get started quickly with Next.js, Postgres, and Stripe.'
};

export const viewport: Viewport = {
  maximumScale: 1
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode; }) {

  return (
      <html
        lang="en"
        className={manrope.className}
        suppressHydrationWarning
      >
        <body className="min-h-[100dvh] bg-gray-50">
          <SWRConfig
            value={{
              fallback: {
                '/api/user': getUser(),
                '/api/team': getTeamForUser()
              }
            }}
          >
            {children}
          </SWRConfig>
        </body>
      </html>
  );
}