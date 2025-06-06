// "use client";

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// // Removed: import { eventsData } from '../../data/events';
// // Removed: import { getEventBySlug } from '../../utils/getItem';
// import styles from './EventDetail.module.css';


// const formatDate = (dateString) => {
//   if (!dateString) return 'N/A';
//   try {
//     const date = new Date(dateString);
//     // Ensure date is valid before formatting
//     if (isNaN(date.getTime())) {
//         return dateString; // Return original string if date is invalid
//     }
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       // You might want to add time formatting if your API provides it and it's relevant
//       // hour: '2-digit',
//       // minute: '2-digit',
//     });
//   } catch (error) {
//     console.error("Error formatting date:", dateString, error);
//     return dateString;
//   }
// };

// // Component now receives the full eventData object
// const EventDetailPage = ({ eventData }) => {
//   // The eventData prop is expected to be the full event object from the API
//   // The "Not Found" state is handled by the parent page.js
//   const event = eventData;

//   // The parent page.js should handle the case where eventData is null/undefined
//   // and render a "Not Found" message before this component is even called with invalid data.
//   // However, a defensive check here is not harmful.
//   if (!event) {
//     // This fallback might not be strictly necessary if page.js handles it,
//     // but can be a safeguard.
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.eventName}>Event Data Missing</h1>
//         <p>There was an issue loading event details.</p>
//         <Link href="/events" className={styles.backLink}>
//           &larr; Back to All Events
//         </Link>
//       </div>
//     );
//   }


//   // Handle description:
//   // If description is HTML from a rich text editor, use dangerouslySetInnerHTML.
//   // If it's plain text with newlines, split into paragraphs.
//   // If it's just plain text, render directly in a <p>.
//   let descriptionContent;
//   if (event.description) {
//     // Example: Assuming plain text with newlines that should be paragraphs
//     descriptionContent = event.description.split('\n').map((para, index) => (
//       <p key={index} className={styles.eventDescriptionParagraph}>
//         {para}
//       </p>
//     ));
//     // If your API returns HTML for the description:
//     // descriptionContent = <div dangerouslySetInnerHTML={{ __html: event.description }} />;
//   } else {
//     descriptionContent = <p>No detailed description available for this event.</p>;
//   }


//   return (
//     <div className={styles.pageContainer}>
//       <header className={styles.eventHeader}>
//         {event.image_url && (
//           <div className={styles.eventImageWrapper}>
//             <Image
//               src={event.image_url}
//               alt={`Image for ${event.name || 'Event'}`}
//               layout="fill"
//               objectFit="cover"
//               priority // Consider if priority is always needed
//             />
//           </div>
//         )}
//         <div className={styles.eventHeaderText}>
//           <h1 className={styles.eventName}>{event.name || 'Event Details'}</h1>
//           {/* You could add category link here if eventData includes category info */}
//           {/* {event.category && event.category.name && event.category.slug && (
//             <Link href={`/event-categories/${event.category.slug}`} className={styles.categoryLink}>
//               Category: {event.category.name}
//             </Link>
//           )} */}
//         </div>
//       </header>

//       <nav className={styles.breadcrumbs}>
//         <Link href="/">Home</Link> &gt;
//         <Link href="/events">Events</Link> &gt;
//         <span>{event.name || 'Event'}</span>
//       </nav>

//       <article className={styles.eventContentSection}>
//         <div className={styles.eventMeta}>
//           <p><strong>Date:</strong> {formatDate(event.date)}
//             {event.endDate && ` - ${formatDate(event.endDate)}`}</p>
//           <p><strong>Location:</strong> {event.location || 'N/A'}</p>
          
//           {/* {event.time && <p><strong>Time:</strong> {event.time}</p>} */}
//           {/* {event.organizer && <p><strong>Organizer:</strong> {event.organizer}</p>} */}
//         </div>

//         <h2 className={styles.sectionTitle}>About This Event</h2>
//         {descriptionContent}
//       </article>

//       {/* Add other sections here based on your eventData */}
//       {/* e.g., Speakers, Schedule, Map, Tickets */}

//       <div style={{ textAlign: 'center', marginTop: '40px' }}>
//         <Link href="/events" className={styles.backLink}>
//           &larr; Explore Other Events
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default EventDetailPage;

// ** start Section with Static Data **///
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './EventDetail.module.css';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'; 
import {formatDate} from '../../utils/date-formatter'

// const formatDate = (dateString) => {
//   if (!dateString) return 'N/A';
//   try {
//     const date = new Date(dateString);
//     // Ensure date is valid before formatting
//     if (isNaN(date.getTime())) {
//       return dateString; // Return original string if date is invalid
//     }
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//   } catch (error) {
//     console.error("Error formatting date:", dateString, error);
//     return dateString;
//   }
// };

const EventDetailPage = ({ eventData, regionName, cityName, townshipName, villiageName }) => {
  const event = eventData;

  if (!event) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.eventName}>Event Data Missing</h1>
        <p>There was an issue loading event details.</p>
        <Link href="/events" className={styles.backLink}>
          &larr; Back to All Events
        </Link>
      </div>
    );
  }

  
  let descriptionContent;
  if (event.description) {
    descriptionContent = event.description.split('\n').map((para, index) => (
      <p key={index} className={styles.eventDescriptionParagraph}>
        {para}
      </p>
    ));
  } else {
    descriptionContent = <p>No detailed description available for this event.</p>;
  }

  let locationString = '';
  if (regionName) {
      locationString += regionName;
    }
if (cityName) {
      locationString += (locationString ? ', ' : '') + cityName;
    }
    if (townshipName) {
      locationString += (locationString ? ', ' : '') + townshipName;
    }
    if (villiageName) {
      locationString += (locationString ? ', ' : '') + villiageName;
    }
  return (
    <div className={styles.pageContainer}>
      <header className={styles.eventHeader}>
        {event.image_url && (
          <div className={styles.eventImageWrapper}>
            <Image
              src={event.image_url}
              alt={`Image for ${event.name || 'Event'}`}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        )}
        <div className={styles.eventHeaderText}>
          <h1 className={styles.eventName}>{event.name || 'Event Details'}</h1>
        </div>
      </header>

      <nav className={styles.breadcrumbs}>
        <Link href="/">Home</Link> &gt;
        <Link href="/events">Events</Link> &gt;
        <span>{event.name || 'Event'}</span>
      </nav>

      <article className={styles.eventContentSection}>
        <div className={styles.eventMeta}>
          <p>
            <FaCalendarAlt className={styles.calendarIcon} />
            <strong>Date:</strong>
            <span className={styles.startDateHighlight}>{formatDate(event.start_date)}</span>
            <span> - </span>
            <span className={styles.endDateHighlight}>{formatDate(event.end_date)}</span>
            
          </p>
          {locationString && (
            <p>
              <FaMapMarkerAlt />
              <strong>Location:</strong> {locationString}
            </p>
          )}
          
         
         
        </div>

        <h2 className={styles.sectionTitle}>About This Event</h2>
        {descriptionContent}
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
// ** end Section with Static Data **///