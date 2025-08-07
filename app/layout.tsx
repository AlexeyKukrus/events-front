'use client'

import { ReactNode } from 'react';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import Navigation from '@/shared/widgets/Navigation/Navigation';
import MobileHeader from '@/shared/widgets/MobileHeader/MobileHeader';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <html lang="ru">
      <body>
        {isMobile ? <MobileHeader /> : <Navigation />}

        <main
          style={{
            paddingTop: isMobile ? 'var(--header-height)' : '0',
            paddingLeft: isMobile ? '0' : 'var(--sidebar-width)',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}