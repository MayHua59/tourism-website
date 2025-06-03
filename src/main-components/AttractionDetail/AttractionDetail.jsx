"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { attractions } from '../../data/attractions';
import { getAttractionBySlug } from '../../utils/getItem';
import styles from './AttractionDetail.module.css';

const AttractionDetailPage = ({ attractionSlug }) => {
  const attraction = getAttractionBySlug(attractionSlug, attractions);

  if (!attraction) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.itemName}>Attraction Not Found</h1>
        <p>Sorry, we couldn't find the attraction: "{attractionSlug}".</p>
        <Link href="/attractions" className={styles.backLink}>
          &larr; Back to All Attractions
        </Link>
      </div>
    );
  }

  // Split description into paragraphs if it contains newline characters
  const descriptionParagraphs = attraction.description
    ? attraction.description.split('\n').map((para, index) => (
        <p key={index} className={styles.itemDescriptionParagraph}>
          {para}
        </p>
      ))
    : null;

  return (
    <div className={styles.pageContainer}>
      <header className={styles.itemHeader}>
        {attraction.image_url && (
          <div className={styles.itemImageWrapper}>
            <Image
              src={attraction.image_url}
              alt={`Image for ${attraction.name}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        )}
        <div className={styles.itemHeaderText}>
          <h1 className={styles.itemName}>{attraction.name}</h1>
        </div>
      </header>

      <nav className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt;
        <Link href="/attractions">Attractions</Link> &gt;
        <span>{attraction.name}</span>
      </nav>

      <article className={styles.itemContentSection}>
        <h2 className={styles.sectionTitle}>About {attraction.name}</h2>
        {descriptionParagraphs || <p>No description available for this attraction.</p>}

        {/* You can add more details here if available in your data */}
        {/* For example:
        <div className={styles.detailsGrid}>
          {attraction.city_id && <p><strong>City ID:</strong> {attraction.city_id}</p>}
          {attraction.region_id && <p><strong>Region ID:</strong> {attraction.region_id}</p>}
          {attraction.attraction_category_id && <p><strong>Category ID:</strong> {attraction.attraction_category_id}</p>}
        </div>
        */}
      </article>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link href="/attractions" className={styles.backLink}>
          &larr; Explore Other Attractions
        </Link>
      </div>
    </div>
  );
};

export default AttractionDetailPage;