"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { culture_categories } from '../../data/culture-categories';
import { myanmarCulturesData } from '../../data/cultures'; 
import { getCultureCategoryBySlug } from '../../utils/getItem';
import styles from './CultureCategoryDetail.module.css';

const CultureCategoryDetailPage = ({ categorySlug }) => {
  const currentCategory = getCultureCategoryBySlug(categorySlug, culture_categories);

  if (!currentCategory) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.categoryName}>Culture Category Not Found</h1>
        <p>Sorry, we couldn't find the culture category: "{categorySlug}".</p>
        <Link href="/culture-categories" className={styles.backLink}> 
          &larr; Back to All Culture Categories
        </Link>
      </div>
    );
  }

  // Filter culture items that belong to the current category
  const categoryCultureItems = myanmarCulturesData.filter(
    item => item.culture_category_id === currentCategory.id
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
        
        <Link href="/culture-categories">Culture Categories</Link> &gt;
        <span>{currentCategory.name}</span>
      </nav>

      <section className={styles.itemsSection}>
        <h2 className={styles.sectionTitle}>
          Cultural Items in {currentCategory.name}
        </h2>
        {categoryCultureItems.length > 0 ? (
          <ul className={styles.itemsGrid}>
            {categoryCultureItems.map(item => (
              <li key={item.id} className={styles.itemCard}>
                
                <Link href={`/cultures/${item.slug || item.id}`} className={styles.itemLink}>
                  {item.image_url && (
                    <div className={styles.itemImageWrapperSmall}>
                      <Image
                        src={'/bagan.jpg'} 
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  )}
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemNameSmall}>{item.name}</h3>
                    {item.description && (
                      <p className={styles.itemCardDescription}>
                        {item.description.substring(0, 80)}{item.description.length > 80 ? '...' : ''}
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
            No cultural items currently listed for the "{currentCategory.name}" category.
          </p>
        )}
      </section>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link href="/culture-categories" className={styles.backLink}> 
          &larr; Explore Other Culture Categories
        </Link>
      </div>
    </div>
  );
};

export default CultureCategoryDetailPage;