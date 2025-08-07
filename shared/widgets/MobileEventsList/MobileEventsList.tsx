'use client';

import { useState } from 'react';
import styles from './MobileEventsList.module.css';
import { EventsList } from '../EventsList/EventsList';

export default function MobileEventsList() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.sheet} ${expanded ? styles.expanded : ''}`}>
      <div className={styles.handle} onClick={() => setExpanded(!expanded)} />
      <div className={styles.content}>
        <EventsList />
      </div>
    </div>
  );
}