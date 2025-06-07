'use client';
import { eventsData } from '../../data/events';
import EventCard from '../Cards/EventCard/EventCard';
import styles from './EventSection.module.css';

const EventsSection = () => {
  if (!eventsData || eventsData.length === 0) {
    return null;
  }

  //  Sort events by date
  const sortedEvents = [...eventsData].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <section className={`${styles.eventsSectionContainer}`}>
      <h2 className={styles.sectionTitle}>Upcoming Events & Festivals</h2>
      
      <div className={styles.scrollContainer}>
        <div className={styles.eventsGrid}>
          {/* {sortedEvents.map((event) => (
            <div key={event.id || event.name} className={styles.eventItem}>
              <EventCard event={event} />
            </div>
          ))} */}
        </div>
      </div>
      {/* View All Events */}
      {/* 
      <div className={styles.viewAllButtonContainer}>
        <button className={styles.viewAllButton}>View All Events</button>
      </div> 
      */}
    </section>
  );
};

export default EventsSection;