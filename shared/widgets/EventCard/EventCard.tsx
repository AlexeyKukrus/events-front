import styles from './EventCard.module.css';
import { Event } from '@/types/Event';

interface EventCardProps {
  event: Event;
  key?: string;
}
export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className={styles.card}>
      <img src={event.previewImage} alt={event.title} className={styles.image} />
      <div className={styles.content}>
        <h3>{event.title}</h3>
        <p>{event.location}</p>
        <p className={styles.meta}>{event.author} · {event.date}</p>
      </div>
    </div>
  );
}