"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './TourCompanyList.module.css'; 

const TourCompanyList = ({ tourCompanies }) => {
  if (!tourCompanies || tourCompanies.length === 0) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Tour Companies</h1>
        <p className={styles.noItemsText}>No tour company found at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Explore Tour Companies</h1>
      <p className={styles.pageSubtitle}>Find tour company based on your interests and travel style.</p>
      <div className={styles.categoriesGrid}>
        {tourCompanies.map(category => (
          <Link key={category.id} href={`/tour-companies/${category.slug}`} className={styles.categoryCardLink}>
            <div className={styles.categoryCard}>
              {category.image_url && (
                <div className={styles.categoryImageWrapper}>
                  <Image
                    src={category.image_url}
                    alt={`Image for ${category.name}`}
                    layout="fill"
                    objectFit="cover"
                    className={styles.categoryImage}
                  />
                </div>
              )}
              <div className={styles.categoryInfo}>
                <h2 className={styles.categoryName}>{category.name}</h2>
                {category.description && (
                  <p className={styles.categoryDescription}>
                    {category.description.substring(0, 100)}
                    {category.description.length > 100 ? '...' : ''}
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

export default TourCompanyList;

