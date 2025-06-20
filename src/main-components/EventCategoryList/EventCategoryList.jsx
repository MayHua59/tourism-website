"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { event_categories } from '../../data/event-categories';
import styles from './EventCategoryList.module.css';

const EventCategoryListPage = () => {
  if (!event_categories || event_categories.length === 0) {
    return (
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Event Categories</h1>
        <p className={styles.noItemsText}>No event categories found. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Myanmar&rsquo;s Event Categories</h1>
        <p className={styles.pageSubtitle}>
          From vibrant festivals to solemn ceremonies, explore the types of events Myanmar offers.
        </p>
      </header>

      <div className={styles.itemGrid}>
        {event_categories.map(category => (
          <div key={category.id} className={styles.interactiveCard}>
            {category.image_url && (
              <Image
                src={category.image_url}
                alt={`Image for ${category.name}`}
                className={styles.interactiveImageBg}
                fill
                objectFit="cover"
                priority={category.id <= 3}
              />
            )}
            <Link href={`/event-categories/${category.slug}`} className={styles.interactiveLink}>
              <div className={styles.interactiveContent}>
                <h2 className={styles.interactiveName}>{category.name}</h2>
                {category.description && (
                    <p className={styles.interactiveDescription}>
                        {category.description.substring(0, 100)}{category.description.length > 100 ? '...' : ''}
                    </p>
                )}
                <span className={styles.interactiveViewText}>View {category.name} Events &rarr;</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCategoryListPage;