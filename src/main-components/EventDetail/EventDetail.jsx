"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { eventsData } from '../../data/events';
import { getEventBySlug } from '../../utils/getItem';
import styles from './EventDetail.module.css';


const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  try {
    const date = new Date(dateString);
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (error) {
    console.error("Error formatting date:", dateString, error);
    return dateString; 
  }
};

const EventDetailPage = ({ eventSlug }) => {
  const event = getEventBySlug(eventSlug, eventsData);

  if (!event) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.eventName}>Event Not Found</h1>
        <p>Sorry, we couldn't find the event: "{eventSlug}".</p>
        <Link href="/events" className={styles.backLink}>
          &larr; Back to All Events
        </Link>
      </div>
    );
  }

  const descriptionParagraphs = event.description
    ? event.description.split('\n').map((para, index) => (
        <p key={index} className={styles.eventDescriptionParagraph}>
          {para}
        </p>
      ))
    : null;

  return (
    <div className={styles.pageContainer}>
      <header className={styles.eventHeader}>
        {event.image_url && (
          <div className={styles.eventImageWrapper}>
            <Image
              src={event.image_url}
              alt={`Image for ${event.name}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        )}
        <div className={styles.eventHeaderText}>
          <h1 className={styles.eventName}>{event.name}</h1>
        </div>
      </header>

      <nav className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt;
        <Link href="/events">Events</Link> &gt;
        <span>{event.name}</span>
      </nav>

      <article className={styles.eventContentSection}>
        <div className={styles.eventMeta}>
          <p><strong>Date:</strong> {formatDate(event.date)}
            {event.endDate && ` - ${formatDate(event.endDate)}`}</p>
          <p><strong>Location:</strong> {event.location || 'N/A'}</p>
        </div>

        <h2 className={styles.sectionTitle}>About This Event</h2>
        {descriptionParagraphs || <p>No detailed description available for this event.</p>}
      </article>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link href="/events" className={styles.backLink}>
          &larr; Explore Other Events
        </Link>
      </div>
    </div>
  );
};

export default EventDetailPage;