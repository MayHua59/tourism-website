"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CultureCategoryDetail.module.css';
import  cultureCategoriesData from '../../data/culture-categories';
import  myanmarCulturesData from '../../data/cultures'; 
import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs';

const CultureCategoryDetailPage = ({ slug }) => {
  const currentCategory = cultureCategoriesData.find(d => d.slug === slug);

  if (!currentCategory) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1>Culture Category Data Missing</h1>
        <Link href="/culture-categories" className={styles.backLink}>
          &larr; Back to Culture Categories
        </Link>
      </div>
    );
  }

  const categoryCultures = myanmarCulturesData.filter(d => d.culture_category_id === currentCategory.id);
  

  const segments = [
    { label: 'Culture Categories', url: '/culture-categories' },
    { label: currentCategory.name },
  ];

  return (
    <div className={styles.pageContainer}>
      <Breadcrumbs segments={segments} />
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

      <section className={styles.itemsSection}>
        <h2 className={styles.sectionTitle}>
          Cultures in {currentCategory.name}
        </h2>
        {categoryCultures.length > 0 ? (
          <ul className={styles.itemsGrid}>
            {categoryCultures.map(item => {
              const itemLink = `/cultures/${item.slug}`; 
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
                      {item.description && (
                        <p className={styles.itemCardDescription}>
                          {item.description.substring(0, 80)}{item.description.length > 80 ? '...' : ''}
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
            No cultures currently listed for the "{currentCategory.name}" category.
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