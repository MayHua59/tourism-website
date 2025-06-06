"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cultureCategoriesData } from '../../data/culture-categories';
import styles from './CultureCategoryList.module.css';

const CultureCategoryListPage = () => {
  if (!cultureCategoriesData || cultureCategoriesData.length === 0) {
    return (
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Culture Categories</h1>
        <p className={styles.noItemsText}>No culture categories found. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Discover Myanmar's Culture</h1>
        <p className={styles.pageSubtitle}>
          Explore the rich tapestry of traditions, arts, and lifestyles that define Myanmar.
        </p>
      </header>

      <div className={styles.itemGrid}>
        {cultureCategoriesData.map(category => (
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
            <Link href={`/culture-categories/${category.slug}`} className={styles.interactiveLink}>
              <div className={styles.interactiveContent}>
                <h2 className={styles.interactiveName}>{category.name}</h2>
                {category.description && (
                  <p className={styles.interactiveDescription}>
                    {category.description.substring(0, 100)}{category.description.length > 100 ? '...' : ''}
                  </p>
                )}
                <span className={styles.interactiveViewText}>Explore {category.name} &rarr;</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultureCategoryListPage;