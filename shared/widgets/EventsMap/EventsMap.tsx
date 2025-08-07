'use client';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import styles from './EventsMap.module.css';
import { mockEvents } from '@/entities/model/mockEvents';

export function EventsMap() {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.796289, 49.108795], zoom: 12 }}
        className={styles.map}
      >
        {mockEvents.map(event => (
          <Placemark key={event.id} geometry={event.coordinates} />
        ))}
      </Map>
    </YMaps>
  );
}