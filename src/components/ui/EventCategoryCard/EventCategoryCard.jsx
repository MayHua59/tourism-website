"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './EventCategoryCard.module.css';

const EventCategoryCard = ({ category }) => {
  return (
    <div className={styles.interactiveCard}>
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
  );
};

export default EventCategoryCard;