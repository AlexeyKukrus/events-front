'use client'
import './globals.css';
import Navigation from '@/shared/widgets/Navigation/Navigation';
import { ReactNode } from 'react';
import './globals.css';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import MobileHeader from '@/shared/widgets/MobileHeader/MobileHeader';




export default function RootLayout({ children }: { children: ReactNode }) {
  const isMobile = useMediaQuery('(max-width: 768px)');

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