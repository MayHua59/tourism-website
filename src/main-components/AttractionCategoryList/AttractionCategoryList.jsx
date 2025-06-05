"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { attraction_categories } from '../../data/attraction-categories';
import styles from './AttractionCategoryList.module.css'; 

const AttractionCategoryListPage = () => {
  if (!attraction_categories || attraction_categories.length === 0) {
    return (
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Attraction Categories</h1>
        <p className={styles.noItemsText}>No attraction categories found. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Discover Attraction Categories</h1>
      <ul className={styles.itemGrid}>
        {attraction_categories.map(category => (
          <li key={category.id} className={styles.interactiveCard}>
            {category.image_url && (
              <Image
                src={category.image_url}
                alt={`Image for ${category.name}`}
                className={styles.interactiveImageBg}
                layout="fill"
                objectFit="cover"
                priority={category.id <= 3}
              />
            )}
            <Link href={`/attraction-categories/${category.slug}`} className={styles.interactiveLink}>
              <div className={styles.interactiveContent}>
                <h2 className={styles.interactiveName}>{category.name}</h2>
                {category.description && (
                    <p className={styles.interactiveDescription}>
                        {category.description.substring(0, 100)}{category.description.length > 100 ? '...' : ''}
                    </p>
                )}
                <span className={styles.interactiveViewText}>View Attractions &rarr;</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttractionCategoryListPage;