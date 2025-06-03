"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { event_categories } from '../../data/event-categories';
import { eventsData } from '../../data/events';
import { getEventCategoryBySlug } from '../../utils/getItem';
import styles from './EventCategoryDetail.module.css';


const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch (error) {
    return dateString;
  }
};

const EventCategoryDetailPage = ({ categorySlug }) => {
  const currentCategory = getEventCategoryBySlug(categorySlug, event_categories);

  if (!currentCategory) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.categoryName}>Event Category Not Found</h1>
        <p>Sorry, we couldn't find the event category: "{categorySlug}".</p>
        <Link href="/event-categories" className={styles.backLink}> 
          &larr; Back to All Event Categories
        </Link>
      </div>
    );
  }

  
  const categoryEvents = eventsData.filter(
    event => event.event_category_id === currentCategory.id
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
        <Link href="/event-categories">Event Categories</Link> &gt; 
        <span>{currentCategory.name}</span>
      </nav>

      <section className={styles.itemsSection}>
        <h2 className={styles.sectionTitle}>
          Events in {currentCategory.name}
        </h2>
        {categoryEvents.length > 0 ? (
          <ul className={styles.itemsGrid}>
            {categoryEvents.map(event => {
              const eventSlugFromUrl = event.url ? event.url.split('/').pop() : event.id;
              return (
                <li key={event.id} className={styles.itemCard}>
                  <Link href={`/events/${eventSlugFromUrl}`} className={styles.itemLink}>
                    {event.image_url && (
                      <div className={styles.itemImageWrapperSmall}>
                        <Image
                          src={event.image_url}
                          alt={event.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    )}
                    <div className={styles.itemInfo}>
                      <h3 className={styles.itemNameSmall}>{event.name}</h3>
                      <p className={styles.itemDate}>
                        {formatDate(event.date)}
                        {event.endDate && ` - ${formatDate(event.endDate)}`}
                      </p>
                      <p className={styles.itemLocation}>{event.location}</p>
                      {event.description && (
                        <p className={styles.itemCardDescription}>
                          {event.description.substring(0, 80)}{event.description.length > 80 ? '...' : ''}
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
            No events currently listed for the "{currentCategory.name}" category.
          </p>
        )}
      </section>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link href="/event-categories" className={styles.backLink}> 
          &larr; Explore Other Event Categories
        </Link>
      </div>
    </div>
  );
};

export default EventCategoryDetailPage;