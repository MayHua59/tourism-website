"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './TourGuideList.module.css'; 

const TourGuideList = ({ tourGuideList }) => {
  if (!tourGuideList || tourGuideList.length === 0) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Tour Guides</h1>
        <p className={styles.noItemsText}>No tour guides found at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Explore Tour Guides</h1>
      <p className={styles.pageSubtitle}>Find tour guide based on your interests and travel style.</p>
      <div className={styles.categoriesGrid}>
        {tourGuideList.map(tourGuide => (
          <Link key={tourGuide.id} href={`/tour-guides/${tourGuide.slug}`} className={styles.categoryCardLink}>
            <div className={styles.categoryCard}>
              {tourGuide.image_url && (
                <div className={styles.categoryImageWrapper}>
                  <Image
                    src={tourGuide.image_url}
                    alt={`Image for ${tourGuide.name}`}
                    layout="fill"
                    objectFit="cover"
                    className={styles.categoryImage}
                  />
                </div>
              )}
              <div className={styles.categoryInfo}>
                <h2 className={styles.categoryName}>{tourGuide.name}</h2>
                {tourGuide.description && (
                  <p className={styles.categoryDescription}>
                    {tourGuide.description.substring(0, 100)}
                    {tourGuide.description.length > 100 ? '...' : ''}
                  </p>
                )}
                <span className={styles.viewDetailsButton}>View Company &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TourGuideList;

