"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { attraction_categories } from '../../data/attraction-categories';
import { attractions } from '../../data/attractions'; 
import { getAttractionCategoryBySlug } from '../../utils/getItem';
import styles from './AttractionCategoryDetail.module.css'; 

const AttractionCategoryDetailPage = ({ categorySlug }) => {
  const currentCategory = getAttractionCategoryBySlug(categorySlug, attraction_categories);

  if (!currentCategory) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.categoryName}>Category Not Found</h1>
        <p>Sorry, we couldn't find the category: "{categorySlug}".</p>
        <Link href="/attraction-categories" className={styles.backLink}>
          &larr; Back to All Attraction Categories
        </Link>
      </div>
    );
  }

  // Filter attractions that belong to the current category
  const categoryAttractions = attractions.filter(
    attraction => attraction.attraction_category_id === currentCategory.id
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
        <Link href="/attraction-categories">Attraction Categories</Link> &gt;
        <span>{currentCategory.name}</span>
      </nav>

      <section className={styles.itemsSection}>
        <h2 className={styles.sectionTitle}>
          Attractions in {currentCategory.name}
        </h2>
        {categoryAttractions.length > 0 ? (
          <ul className={styles.itemsGrid}>
            {categoryAttractions.map(attraction => (
              <li key={attraction.id} className={styles.itemCard}>
                <Link href={`/attractions/${attraction.slug}`} className={styles.itemLink}>
                  {attraction.image_url && (
                    <div className={styles.itemImageWrapperSmall}>
                      <Image
                        src={attraction.image_url}
                        alt={attraction.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  )}
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemNameSmall}>{attraction.name}</h3>
                    {attraction.description && (
                      <p className={styles.itemCardDescription}>
                        {attraction.description.substring(0, 80)}{attraction.description.length > 80 ? '...' : ''}
                      </p>
                    )}
                    <span className={styles.viewItemButton}>View Details &rarr;</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noItemsText}>
            No attractions currently listed for the "{currentCategory.name}" category.
          </p>
        )}
      </section>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link href="/attraction-categories" className={styles.backLink}>
          &larr; Explore Other Attraction Categories
        </Link>
      </div>
    </div>
  );
};

export default AttractionCategoryDetailPage;