"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './DestinationList.module.css';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('/api/v1/destinations');
        if (!response.ok) {
          throw new Error(`Failed to fetch destinations: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setDestinations(data);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching destinations:', error);
        setError(error.message || 'Failed to load destinations');
        // setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (error === 'No destinations found') { 
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Explore Destinations</h1>
        <p className={styles.noItemsText}>No destinations found at the moment. Please check back later!</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Explore Destinations</h1>
        <p>Error: {error}</p> 
      </div>
    );
  }

  

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Explore Our Destinations</h1>
      <p className={styles.pageSubtitle}>Discover the beauty and diversity of Myanmar through its unique destinations.</p>
      <div className={styles.destinationsGrid}>
        {destinations.map(destination => (
          <Link key={destination.id} href={`/destinations/${destination.slug}`} className={styles.destinationCardLink}>
            <div className={styles.destinationCard}>
              {destination.image_url && (
                <div className={styles.destinationImageWrapper}>
                  <Image
                    src={destination.image_url}
                    alt={`Image for ${destination.name}`}
                    layout="fill"
                    objectFit="cover"
                    className={styles.destinationImage}
                    
                    
                  />
                </div>
              )}
              <div className={styles.destinationInfo}>
                <h2 className={styles.destinationName}>{destination.name}</h2>
                {destination.region && (
                  <p className={styles.destinationRegion}>{destination.region}</p>
                )}
                {destination.short_description && (
                  <p className={styles.destinationDescription}>
                    {destination.short_description.substring(0, 120)}
                    {destination.short_description.length > 120 ? '...' : ''}
                  </p>
                )}
                <span className={styles.viewDetailsButton}>Discover More &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DestinationList;