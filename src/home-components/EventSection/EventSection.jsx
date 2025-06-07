'use client';
import { eventsData } from '../../data/homepage-data/events';
import EventCard from '../Cards/EventCard/EventCard';
import styles from './EventSection.module.css';
import Link from 'next/link';

const EventsSection = () => {
  if (!eventsData || eventsData.length === 0) {
    return null;
  }

  //  Sort events by date
  const sortedEvents = [...eventsData].sort((a, b) => new Date(a.start_date) - new Date(b.end_date));

  return (
    <section className={`${styles.eventsSectionContainer}`}>
      <h2 className={styles.sectionTitle}>Upcoming Events & Festivals</h2>
      
      <div className={styles.scrollContainer}>
        <div className={styles.eventsGrid}>
          {sortedEvents.map((event) => (
            <div key={event.id || event.name} className={styles.eventItem}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
      
      
      <div className={styles.viewAllContainer}>
        <Link href="/articles" className={styles.viewAllButton}>
          View All Events
        </Link>
      </div>
     
    </section>
  );
};

export default EventsSection;