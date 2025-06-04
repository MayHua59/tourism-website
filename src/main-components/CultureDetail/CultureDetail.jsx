"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CultureDetail.module.css'; 

// const formatDate = (dateString) => { ... };

const CultureDetailPage = ({ cultureItemData }) => {
  
  const item = cultureItemData;

  if (!item) {
    
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1>Culture Item Data Missing</h1>
        <Link href="/culture-items" className={styles.backLink}> 
          &larr; Back to Culture Items
        </Link>
      </div>
    );
  }

  // Handle long description (e.g., if it's HTML)
  // let longDescriptionContent;
  // if (item.long_description) {
  //   // Assuming HTML content for long_description
  //   longDescriptionContent = <div dangerouslySetInnerHTML={{ __html: item.long_description }} />;
  //   // If plain text with newlines:
  //   // longDescriptionContent = item.long_description.split('\n').map((para, index) => <p key={index}>{para}</p>);
  // } else if (item.description) {
  //   // Fallback to short description if long one isn't available
  //   longDescriptionContent = <p>{item.description}</p>;
  // } else {
  //   longDescriptionContent = <p>No detailed description available for this item.</p>;
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
            <Link href={`/culture-categories/${item.category.slug || item.category.id}`} className={styles.categoryLink}>
              Part of: {item.category.name}
            </Link>
          )}
        </div>
      </header>

      <nav className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt;
        <Link href="/culture-categories">Culture Categories</Link>
        {item.category && (
          <>
            &gt; <Link href={`/culture-categories/${item.category.slug || item.category.id}`}>{item.category.name}</Link>
          </>
        )}
        &gt; <span>{item.name}</span>
      </nav>

      <article className={styles.itemContent}>
        {item.description && !item.long_description && ( 
            <p className={styles.shortDescription}>{item.description}</p>
        )}

        {item.significance && (
          <section className={styles.detailSection}>
            <h2>Significance</h2>
            <p>{item.significance}</p>
          </section>
        )}

        {item.history && (
          <section className={styles.detailSection}>
            <h2>History</h2>
            <p>{item.history}</p>
          </section>
        )}

        <section className={styles.detailSection}>
          <h2>Details</h2>
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

        
      </article>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        {item.category ? (
          <Link href={`/culture-categories/${item.category.slug || item.category.id}`} className={styles.backLink}>
            &larr; Back to {item.category.name}
          </Link>
        ) : (
          <Link href="/culture-categories" className={styles.backLink}>
            &larr; Back to Culture Categories
          </Link>
        )}
      </div>
    </div>
  );
};

export default CultureDetailPage; 