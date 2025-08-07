import { EventCard } from '../EventCard/EventCard';
import styles from './EventsList.module.css';
import { mockEvents } from '@/entities/model/mockEvents';

export function EventsList() {
  return (
    <div className={styles.list}>
      {mockEvents.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}