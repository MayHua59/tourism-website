"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './AttractionDetail.module.css'; 


// const formatOpeningHours = (hours) => { ... };

const AttractionDetailPage = ({ attractionData }) => {
  

  const item = attractionData;

  if (!item) {
   
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1>Attraction Data Missing</h1>
        <Link href="/attractions" className={styles.backLink}> 
          &larr; Back to Attractions
        </Link>
      </div>
    );
  }

  // // Handle long description (e.g., if it's HTML)
  // let longDescriptionContent;
  // if (item.long_description) {
  //   // Assuming HTML content for long_description
  //   longDescriptionContent = <div dangerouslySetInnerHTML={{ __html: item.long_description }} />;
  // } else if (item.description) {
  //   longDescriptionContent = <p>{item.description}</p>;
  // } else {
  //   longDescriptionContent = <p>No detailed description available for this attraction.</p>;
  // }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.itemHeader}>
        {item.image_url && (
          <div className={styles.itemImageWrapper}>
            <Image
              src={item.image_url}
              alt={`Image for ${item.name}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        )}
        <div className={styles.itemHeaderText}>
          <h1 className={styles.itemName}>{item.name}</h1>
          {item.category && (
            <Link href={`/attraction-categories/${item.category.slug || item.category.id}`} className={styles.categoryLink}>
              Category: {item.category.name}
            </Link>
          )}
        </div>
      </header>

      <nav className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt;
        <Link href="/attraction-categories">Attraction Categories</Link>
        {item.category && (
          <>
            &gt; <Link href={`/attraction-categories/${item.category.slug || item.category.id}`}>{item.category.name}</Link>
          </>
        )}
        &gt; <span>{item.name}</span>
      </nav>

      <article className={styles.itemContent}>
        <section className={styles.mainDetailsSection}>
          {item.address && <p><strong>Address:</strong> {item.address}</p>}
          {item.location && !item.address && <p><strong>Location:</strong> {item.location}</p>}
          {item.opening_hours && <p><strong>Opening Hours:</strong> {item.opening_hours}</p>}
          {item.ticket_price && <p><strong>Ticket Price:</strong> {item.ticket_price}</p>}
          {item.contact_info && <p><strong>Contact:</strong> {item.contact_info}</p>}
          {item.website && <p><strong>Website:</strong> <a href={item.website} target="_blank" rel="noopener noreferrer">{item.website}</a></p>}
        </section>

        {item.description && !item.long_description && (
            <p className={styles.shortDescription}>{item.description}</p>
        )}

        <section className={styles.descriptionSection}>
          <h2>About this Attraction</h2>
          {longDescriptionContent}
        </section>

        {item.images && item.images.length > 0 && (
          <section className={styles.gallerySection}>
            <h2>Gallery</h2>
            <div className={styles.galleryGrid}>
              {item.images.map((img, index) => (
                <div key={index} className={styles.galleryImageContainer}>
                  <Image src={img.url} alt={img.caption || `Image ${index + 1} for ${item.name}`} layout="responsive" width={300} height={200} objectFit="cover" />
                  {img.caption && <p className={styles.galleryCaption}>{img.caption}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Placeholder for a map if latitude and longitude are available */}
        {item.latitude && item.longitude && (
          <section className={styles.mapSection}>
            <h2>Location Map</h2>
            {/* You would integrate a map component here, e.g., Google Maps, Leaflet */}
            <div className={styles.mapPlaceholder}>
              Map for {item.name} (Lat: {item.latitude}, Lng: {item.longitude})
              <p><small>Map integration component would go here.</small></p>
            </div>
          </section>
        )}
      </article>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        {item.category ? (
          <Link href={`/attraction-categories/${item.category.slug || item.category.id}`} className={styles.backLink}>
            &larr; Back to {item.category.name}
          </Link>
        ) : (
          <Link href="/attraction-categories" className={styles.backLink}>
            &larr; Back to Attraction Categories
          </Link>
        )}
      </div>
    </div>
  );
};

export default AttractionDetailPage;