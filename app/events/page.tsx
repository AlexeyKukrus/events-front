'use client'
import dynamic from 'next/dynamic';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { EventsMap } from '@/shared/widgets/EventsMap/EventsMap';
import { EventsList } from '@/shared/widgets/EventsList/EventsList';
import styles from './page.module.css';

const MobileEventsList = dynamic(() => import('@/shared/widgets/MobileEventsList/MobileEventsList'), { ssr: false });

export default function Page() {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div className={styles.page}>
      <EventsMap />
      {isMobile ? (
        <div className={styles.mobileSheet}>
          <MobileEventsList />
        </div>
      ) : (
        <div className={styles.desktopList}>
          <EventsList />
        </div>
      )}
    </div>
  );
}