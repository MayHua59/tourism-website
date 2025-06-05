import Link from 'next/link';
import Image from 'next/image';
import styles from './EventCard.module.css';

const EventCard = ({ eventItem }) => {
  if (!eventItem) return null;

  return (
    <Link href={eventItem.url || `/events/${eventItem.id}`} passHref>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={eventItem.image_url || '/placeholder-event.jpg'} // Provide a placeholder
            alt={eventItem.name}
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.name}>{eventItem.name}</h3>
          {eventItem.date && <p className={styles.date}>{eventItem.date}</p>}
          <p className={styles.description}>{eventItem.description}</p>
          {eventItem.location && <p className={styles.location}>Location: {eventItem.location}</p>}
          <span className={styles.learnMore}>Learn More &rarr;</span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;