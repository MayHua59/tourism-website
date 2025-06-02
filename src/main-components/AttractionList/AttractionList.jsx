"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { attractions } from '../../data/attractions';
import styles from './AttractionList.module.css';

const AttractionListPage = () => {
  if (!attractions || attractions.length === 0) {
    return (
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Attractions</h1>
        <p className={styles.noItemsText}>No attractions found at the moment. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Explore Our Attractions</h1>
      <ul className={styles.itemGrid}>
        {attractions.map(attraction => (
          <li key={attraction.id} className={styles.interactiveCard}>
            {attraction.image_url && (
              <Image
                src={"/bagan.jpg"}
                alt={`Image for ${attraction.name}`}
                className={styles.interactiveImageBg}
                layout="fill"
                objectFit="cover"
                priority={attraction.id <= 3} // Prioritize first few images
              />
            )}
            <Link href={`/attractions/${attraction.slug}`} className={styles.interactiveLink}>
              <div className={styles.interactiveContent}>
                <h2 className={styles.interactiveName}>{attraction.name}</h2>
                {attraction.description && (
                    <p className={styles.interactiveDescription}>
                        {attraction.description.substring(0, 100)}{attraction.description.length > 100 ? '...' : ''}
                    </p>
                )}
                <span className={styles.interactiveViewText}>View Details &rarr;</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttractionListPage;