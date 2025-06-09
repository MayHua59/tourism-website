// "use client";

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// // Removed: import { event_categories } from '../../data/event-categories';
// // Removed: import { eventsData } from '../../data/events';
// // Removed: import { getEventCategoryBySlug } from '../../utils/getItem';
// import styles from './EventCategoryDetail.module.css';


// const formatDate = (dateString) => {
//   if (!dateString) return 'N/A';
//   try {
//     const date = new Date(dateString);
//     // Ensure the date is valid before formatting
//     if (isNaN(date.getTime())) {
//         return dateString; // Return original string if date is invalid
//     }
//     return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
//   } catch (error) {
//     console.error("Error formatting date:", dateString, error);
//     return dateString; // Return original string in case of error
//   }
// };

// // The component now receives categoryData directly
// const EventCategoryDetailPage = ({ categoryData }) => {
//   // The categoryData prop should contain all necessary info, including the events array.
//   // Example structure for categoryData:
//   // {
//   //   id: "some-id",
//   //   slug: "actual-slug-from-api", // if available
//   //   name: "Category Name",
//   //   description: "Category Description",
//   //   image_url: "...",
//   //   events: [
//   //     { id: "event1", name: "Event 1", date: "...", endDate: "...", location: "...", image_url: "...", description: "...", url: "/events/event1-slug" },
//   //     // ... other events
//   //   ]
//   // }

//   // If categoryData is null or undefined (e.g., error handled by parent page),
//   // this component might not even render, or you can add a check here.
//   // However, the parent page.js should ideally handle the "not found" or "error" states.

//   const currentCategory = categoryData; 
//   const categoryEvents = categoryData.events || []; // Access events from the prop

//   // The "Not Found" case is now primarily handled by the page.js component
//   // before this component is even rendered with invalid data.

//   return (
//     <div className={styles.pageContainer}>
//       <header className={styles.categoryHeader}>
//         {currentCategory.image_url && (
//           <div className={styles.categoryImageWrapper}>
//             <Image
//               src={currentCategory.image_url}
//               alt={`Image for ${currentCategory.name}`}
//               layout="fill"
//               objectFit="cover"
//               priority 
//             />
//           </div>
//         )}
//         <div className={styles.categoryHeaderText}>
//           <h1 className={styles.categoryName}>{currentCategory.name}</h1>
//           {currentCategory.description && (
//             <p className={styles.categoryDescription}>{currentCategory.description}</p>
//           )}
//         </div>
//       </header>

//       <nav className={styles.breadcrumbs}>
//         <Link href="/">Home</Link> &gt;
//         <Link href="/event-categories">Event Categories</Link> &gt;
//         <span>{currentCategory.name}</span>
//       </nav>

//       <section className={styles.itemsSection}>
//         <h2 className={styles.sectionTitle}>
//           Events in {currentCategory.name}
//         </h2>
//         {categoryEvents.length > 0 ? (
//           <ul className={styles.itemsGrid}>
//             {categoryEvents.map(event => {
              
//               const eventLink = event.url || (event.slug ? `/events/${event.slug}` : `/events/${event.id}`);
//               return (
//                 <li key={event.id} className={styles.itemCard}>
//                   <Link href={eventLink} className={styles.itemLink}>
//                     {event.image_url && (
//                       <div className={styles.itemImageWrapperSmall}>
//                         <Image
//                           src={event.image_url}
//                           alt={event.name}
//                           layout="fill"
//                           objectFit="cover"
//                         />
//                       </div>
//                     )}
//                     <div className={styles.itemInfo}>
//                       <h3 className={styles.itemNameSmall}>{event.name}</h3>
//                       <p className={styles.itemDate}>
//                         {formatDate(event.date)}
//                         {event.endDate && ` - ${formatDate(event.endDate)}`}
//                       </p>
//                       <p className={styles.itemLocation}>{event.location}</p>
//                       {event.description && (
//                         <p className={styles.itemCardDescription}>
//                           {event.description.substring(0, 80)}{event.description.length > 80 ? '...' : ''}
//                         </p>
//                       )}
//                       <span className={styles.viewItemButton}>View Details &rarr;</span>
//                     </div>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         ) : (
//           <p className={styles.noItemsText}>
//             No events currently listed for the "{currentCategory.name}" category.
//           </p>
//         )}
//       </section>

//       <div style={{ textAlign: 'center', marginTop: '40px' }}>
//         <Link href="/event-categories" className={styles.backLink}>
//           &larr; Explore Other Event Categories
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default EventCategoryDetailPage;

//****with static data *****/
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './EventCategoryDetail.module.css';
import  eventCategoriesData  from '../../data/event-categories';
import  eventsData  from '../../data/events';
import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs';

const EventCategoryDetailPage = ({slug}) => {
  const currentCategory = eventCategoriesData.find(d => d.slug === slug);
  if (!currentCategory) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1>Event Category Data Missing</h1>
        <Link href="/event-categories" className={styles.backLink}>
          &larr; Back to Event Categories
        </Link>
      </div>
    );
  }
  const categoryEvents = eventsData.filter(d => d.myanmar_event_category_id === currentCategory.id);
    const segments = [
    
    { label: 'Event Categories', url: '/event-categories' },
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
          Events in {currentCategory.name}
        </h2>
        {categoryEvents.length > 0 ? (
          <ul className={styles.itemsGrid}>
            {categoryEvents.map(item => {
              const itemLink = `/events/${item.slug}`;
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
  )
}

export default EventCategoryDetailPage