// 'use client';

// import React, { useState, useEffect, useMemo } from 'react';
// import { eventsData } from '../../data/events';
// import { getUniqueLocationsFromEvents } from '../../utils/eventUtils';
// import EventCard from '../../components/ui/EventCard/EventCard';
// import styles from './EventList.module.css';

// const EventListPage = () => {
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [filteredEvents, setFilteredEvents] = useState(eventsData);

//   const uniqueLocations = useMemo(() => getUniqueLocationsFromEvents(), []);

//   useEffect(() => {
//     if (!selectedLocation) {
//       setFilteredEvents(eventsData);
//     } else {
//       setFilteredEvents(
//         eventsData.filter(item =>
//           item.location && item.location.toLowerCase().includes(selectedLocation.toLowerCase())
//         )
//       );
//     }
//   }, [selectedLocation]);

//   const handleLocationChange = (event) => {
//     setSelectedLocation(event.target.value);
//   };

//   return (
//     <div className={styles.pageContainer}>
//       <header className={styles.header}>
//         <h1 className={styles.pageTitle}>Upcoming Events & Festivals</h1>
//         <p className={styles.pageSubtitle}>
//           Discover vibrant celebrations and cultural events happening across Myanmar.
//         </p>
//       </header>

//       <div className={styles.filterContainer}>
//         <label htmlFor="location-filter" className={styles.filterLabel}>Filter by Location:</label>
//         <select
//           id="location-filter"
//           value={selectedLocation}
//           onChange={handleLocationChange}
//           className={styles.filterSelect}
//         >
//           <option value="">All Locations</option>
//           {uniqueLocations.map(location => (
//             <option key={location} value={location} className={styles.filterOption}>
//               {location}
//             </option>
//           ))}
//         </select>
//       </div>

//       {filteredEvents.length > 0 ? (
//         <div className={styles.eventsGrid}>
//           {filteredEvents.map(eventItem => (
//             <EventCard key={eventItem.id} eventItem={eventItem} />
//           ))}
//         </div>
//       ) : (
//         <p className={styles.noItemsMessage}>
//           No events found for the selected location.
//         </p>
//       )}
//     </div>
//   );
// };

// export default EventListPage;
// ****** with API integration ***********//
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './EventList.module.css'; 

const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (error) {
    console.error("Error formatting date:", dateString, error);
    return 'TBD'; 
  }
};

const EventListPage = ({ events }) => {
  if (!events || events.length === 0) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Upcoming Events in Myanmar</h1>
        <p className={styles.noItemsText}>No events found at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Discover Exciting Events in Myanmar</h1>
      <p className={styles.pageSubtitle}>Plan your trip around these amazing cultural festivals and happenings.</p>
      <div className={styles.eventsGrid}>
        {events.map(event => (
          <Link key={event.id} href={`/events/${event.slug}`} className={styles.eventCardLink}>
            <div className={styles.eventCard}>
              {event.image_url && (
                <div className={styles.eventImageWrapper}>
                  <Image
                    src={event.image_url}
                    alt={`Image for ${event.name}`}
                    layout="fill"
                    objectFit="cover"
                    className={styles.eventImage}
                  />
                </div>
              )}
              <div className={styles.eventInfo}>
                <h2 className={styles.eventName}>{event.name}</h2>
                <p className={styles.eventDate}>Date: {formatDate(event.date)}</p>
                <p className={styles.eventLocation}>Location: {event.location}</p>
                {event.short_description && (
                  <p className={styles.eventDescription}>
                    {event.short_description.substring(0, 80)}
                    {event.short_description.length > 80 ? '...' : ''}
                  </p>
                )}
                <span className={styles.viewDetailsButton}>Learn More &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventListPage;