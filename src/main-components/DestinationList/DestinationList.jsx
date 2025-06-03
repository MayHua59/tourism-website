"use client"; 

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { destinations } from '../../data/destinations'; 
import styles from './DestinationList.module.css'; 

const DestinationListPage = () => {
  if (!destinations || destinations.length === 0) {
    return (
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Destinations</h1>
        <p className={styles.noItemsText}>No destinations found. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Explore Our Destinations</h1>
        <p className={styles.pageSubtitle}>
          Journey through the diverse landscapes and rich cultural heritage of Myanmar.
        </p>
      </header>

      <div className={styles.itemGrid}>
        {destinations.map(destination => (
          <div key={destination.id} className={styles.interactiveCard}>
            {destination.image_url && (
              <Image
                src={destination.image_url}
                alt={`Image for ${destination.name}`}
                className={styles.interactiveImageBg}
                layout="fill"
                objectFit="cover"
                priority={destination.id <= 3} // Prioritize loading for the first few images
              />
            )}
            <Link href={`/destinations/${destination.slug}`} className={styles.interactiveLink}>
              <div className={styles.interactiveContent}>
                <h2 className={styles.interactiveName}>{destination.name}</h2>
                {destination.description && (
                    <p className={styles.interactiveDescription}>
                        {destination.description.substring(0, 100)}{destination.description.length > 100 ? '...' : ''}
                    </p>
                )}
                <span className={styles.interactiveViewText}>Discover {destination.name} &rarr;</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationListPage;