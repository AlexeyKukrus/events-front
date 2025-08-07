'use client';

import styles from './EventsMap.module.css';
import { useYandexMap } from '@/shared/hooks/useYandexMap';


export function EventsMap() {
  const mapRef = useYandexMap([55.751574, 37.573856], 10);
  return <div ref={mapRef} className={styles.map} />;
}