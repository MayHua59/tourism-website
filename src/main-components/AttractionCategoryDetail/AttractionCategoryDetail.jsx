"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './AttractionCategoryDetail.module.css'; 

const AttractionCategoryDetailPage = ({ categoryData }) => {
  

  const currentCategory = categoryData;
  const categoryAttractions = categoryData.attractions || []; 

  if (!currentCategory) {
    
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1>Attraction Category Data Missing</h1>
        <Link href="/attraction-categories" className={styles.backLink}>
          &larr; Back to Attraction Categories
        </Link>
      </div>
    );
  }

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
            {categoryAttractions.map(item => {
              
              const itemLink = item.url || (item.slug ? `/attractions/${item.slug}` : `/attractions/${item.id}`);
              return (
                <li key={item.id} className={styles.itemCard}>
                  <Link href={itemLink} className={styles.itemLink}>
                    {item.image_url && (
                      <div className={styles.itemImageWrapperSmall}>
                        <Image
                          src={item.image_url}
                          alt={item.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    )}
                    <div className={styles.itemInfo}>
                      <h3 className={styles.itemNameSmall}>{item.name}</h3>
                      {item.short_description && (
                        <p className={styles.itemCardDescription}>
                          {item.short_description.substring(0, 80)}{item.short_description.length > 80 ? '...' : ''}
                        </p>
                      )}
                      <span className={styles.viewItemButton}>View Details &rarr;</span>
                    </div>
                  </Link>
                </li>
              );
            })}
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