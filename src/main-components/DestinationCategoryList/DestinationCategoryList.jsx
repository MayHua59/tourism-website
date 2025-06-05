"use client"; 

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { destination_categories } from '../../data/destination-categories';
import styles from './DestinationCategoryList.module.css';

const DestinationCategoryListPage = () => {
  if (!destination_categories || destination_categories.length === 0) {
    return (
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Destination Categories</h1>
        <p style={{ textAlign: 'center' }}>No destination categories found.</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Explore Our Destination Categories</h1>
    
<ul className={styles.categoryGrid}> {/* Assuming you have a grid container */}
  {destination_categories.map(category => (
    <li key={category.id} className={styles.interactiveCard}>
      {category.image_url && (
       <Image
          src={category.image_url}
          alt={`Background for ${category.name}`} 
          className={styles.interactiveImageBg}
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" 
          priority={category.id <= 3} // Optional: Prioritize loading for the first few images
          
        />
      )}
      <Link href={`/destination-categories/${category.slug}`} className={styles.interactiveLink}>
        <div className={styles.interactiveContent}>
          <h2 className={styles.interactiveName}>{category.name}</h2>
          <p className={styles.interactiveDescription}>{category.description}</p>
          <span className={styles.interactiveViewText}>Discover &rarr;</span>
        </div>
      </Link>
    </li>
  ))}
</ul>

    </div>
  );
};

export default DestinationCategoryListPage;