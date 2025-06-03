"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { destination_categories } from '../../data/destination-categories';
import { destinations } from '../../data/destinations'; 
import styles from './DestinationCategoryDetail.module.css';

const DestinationCategoryDetailPage = ({ categorySlug }) => {
  const currentCategory = destination_categories.find(cat => cat.slug === categorySlug);

  if (!currentCategory) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.categoryName}>Category Not Found</h1>
        <p>Sorry, we couldn't find the category you're looking for: "{categorySlug}".</p>
        <Link href="/destination-categories" className={styles.backLink}>
          &larr; Back to All Categories
        </Link>
      </div>
    );
  }

  // Filter destinations that belong to the current category
  const categoryDestinations = destinations.filter(
    dest => dest.destination_category_id === currentCategory.id
  );

  return (
    <div className={styles.pageContainer}>
      <header className={styles.categoryHeader}>
        {currentCategory.image_url && (
          <div className={styles.categoryImageWrapper}>
            <Image
              src={currentCategory.image_url} 
              alt={`Image for ${currentCategory.name}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        )}
        <div className={styles.categoryHeaderText}>
          <h1 className={styles.categoryName}>{currentCategory.name}</h1>
          {currentCategory.description && (
            <p className={styles.categoryDescription}>{currentCategory.description}</p>
          )}
        </div>
      </header>

      <nav className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt; 
        <Link href="/destination-categories">Categories</Link> &gt;
        <span>{currentCategory.name}</span>
      </nav>

      <section className={styles.destinationsSection}>
        <h2 className={styles.sectionTitle}>
          Destinations in {currentCategory.name}
        </h2>
        {categoryDestinations.length > 0 ? (
          <ul className={styles.destinationsGrid}>
            {categoryDestinations.map(dest => (
              <li key={dest.id} className={styles.destinationCard}>
                <Link href={`/destinations/${dest.slug}`} className={styles.destinationLink}>
                  {dest.image_url && (
                    <div className={styles.destinationImageWrapper}>
                      <Image
                        src={dest.image_url} 
                        alt={dest.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  )}
                  <div className={styles.destinationInfo}>
                    <h3 className={styles.destinationName}>{dest.name}</h3>
                    {dest.description && (
                      <p className={styles.destinationCardDescription}>
                        {dest.description.substring(0, 100)}{dest.description.length > 100 ? '...' : ''}
                      </p>
                    )}
                    <span className={styles.viewDestinationButton}>View Details &rarr;</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noDestinationsText}>
            No destinations currently listed for the "{currentCategory.name}" category.
          </p>
        )}
      </section>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link href="/destination-categories" className={styles.backLink}>
          &larr; Explore Other Categories
        </Link>
      </div>
    </div>
  );
};

export default DestinationCategoryDetailPage;