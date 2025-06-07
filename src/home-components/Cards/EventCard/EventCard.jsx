import Link from 'next/link';
import Image from 'next/image';
import styles from './EventCard.module.css';


const formatDate = (dateString, endDateString) => {
  if (!dateString) return '';
  const startDate = new Date(dateString);
  const options = { month: 'short', day: 'numeric' };
  let formattedDate = startDate.toLocaleDateString('en-US', options);

  if (endDateString) {
    const endDate = new Date(endDateString);
    if (startDate.getMonth() === endDate.getMonth()) {
      formattedDate = `${startDate.toLocaleDateString('en-US', { month: 'short' })} ${startDate.getDate()}-${endDate.getDate()}`;
    } else {
      formattedDate = `${formattedDate} - ${endDate.toLocaleDateString('en-US', options)}`;
    }
  }
  return formattedDate;
};


const EventCard = ({ event }) => {
  if (!event) return null;

  const displayDate = formatDate(event.date, event.endDate);

  return (
    <Link href={`/events/${event.slug}`} passHref>
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={event.image_url}
          alt={event.name}
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.dateBadge}>
          <span className={styles.dateMonth}>{new Date(event.start_date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</span>
          <span className={styles.dateDay}>{new Date(event.start_date).getDate()}</span>
        </div>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.eventName}>{event.name}</h3>
        {event.location && <p className={styles.eventLocation}><span className={styles.icon}>📍</span> {event.location}</p>}
        <p className={styles.eventDescription}>{event.description}</p>
        {event.url && (
          <Link href={event.url} passHref>
            <span className={styles.detailsLink}>View Details &rarr;</span>
          </Link>
        )}
      </div>
    </div>
    </Link>
  );
};

export default EventCard;