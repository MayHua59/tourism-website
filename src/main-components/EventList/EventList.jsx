'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { eventsData } from '../../data/events';
import { getUniqueLocationsFromEvents } from '../../utils/eventUtils';
import EventCard from '../../components/ui/EventCard/EventCard';
import styles from './EventList.module.css';

const EventListPage = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  const uniqueLocations = useMemo(() => getUniqueLocationsFromEvents(), []);

  useEffect(() => {
    if (!selectedLocation) {
      setFilteredEvents(eventsData);
    } else {
      setFilteredEvents(
        eventsData.filter(item =>
          item.location && item.location.toLowerCase().includes(selectedLocation.toLowerCase())
        )
      );
    }
  }, [selectedLocation]);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Upcoming Events & Festivals</h1>
        <p className={styles.pageSubtitle}>
          Discover vibrant celebrations and cultural events happening across Myanmar.
        </p>
      </header>

      <div className={styles.filterContainer}>
        <label htmlFor="location-filter" className={styles.filterLabel}>Filter by Location:</label>
        <select
          id="location-filter"
          value={selectedLocation}
          onChange={handleLocationChange}
          className={styles.filterSelect}
        >
          <option value="">All Locations</option>
          {uniqueLocations.map(location => (
            <option key={location} value={location} className={styles.filterOption}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {filteredEvents.length > 0 ? (
        <div className={styles.eventsGrid}>
          {filteredEvents.map(eventItem => (
            <EventCard key={eventItem.id} eventItem={eventItem} />
          ))}
        </div>
      ) : (
        <p className={styles.noItemsMessage}>
          No events found for the selected location.
        </p>
      )}
    </div>
  );
};

export default EventListPage;