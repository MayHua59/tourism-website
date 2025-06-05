// "use client";

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { attractions } from '../../data/attractions';
// import styles from './AttractionList.module.css';

// const AttractionListPage = () => {
//   if (!attractions || attractions.length === 0) {
//     return (
//       <div className={styles.pageContainer}>
//         <h1 className={styles.pageTitle}>Attractions</h1>
//         <p className={styles.noItemsText}>No attractions found at the moment. Please check back later.</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <h1 className={styles.pageTitle}>Explore Our Attractions</h1>
//       <ul className={styles.itemGrid}>
//         {attractions.map(attraction => (
//           <li key={attraction.id} className={styles.interactiveCard}>
//             {attraction.image_url && (
//               <Image
//                 src={attraction.image_url}
//                 alt={`Image for ${attraction.name}`}
//                 className={styles.interactiveImageBg}
//                 layout="fill"
//                 objectFit="cover"
//                 priority={attraction.id <= 3} // Prioritize first few images
//               />
//             )}
//             <Link href={`/attractions/${attraction.slug}`} className={styles.interactiveLink}>
//               <div className={styles.interactiveContent}>
//                 <h2 className={styles.interactiveName}>{attraction.name}</h2>
//                 {attraction.description && (
//                     <p className={styles.interactiveDescription}>
//                         {attraction.description.substring(0, 100)}{attraction.description.length > 100 ? '...' : ''}
//                     </p>
//                 )}
//                 <span className={styles.interactiveViewText}>View Details &rarr;</span>
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AttractionListPage;

// ********* with API **************//
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './AttractionList.module.css'; 

const AttractionListPage = ({ attractions }) => {
  if (!attractions || attractions.length === 0) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Discover Attractions</h1>
        <p className={styles.noItemsText}>No attractions found at the moment. Please check back soon!</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Featured Attractions in Myanmar</h1>
      <p className={styles.pageSubtitle}>Explore the wonders and landmarks that make Myanmar unforgettable.</p>
      <div className={styles.attractionsGrid}>
        {attractions.map(attraction => (
          <Link key={attraction.id} href={`/attractions/${attraction.slug}`} className={styles.attractionCardLink}>
            <div className={styles.attractionCard}>
              {attraction.image_url && (
                <div className={styles.attractionImageWrapper}>
                  <Image
                    src={attraction.image_url}
                    alt={`Image for ${attraction.name}`}
                    layout="fill"
                    objectFit="cover"
                    className={styles.attractionImage}
                  />
                </div>
              )}
              <div className={styles.attractionInfo}>
                <h2 className={styles.attractionName}>{attraction.name}</h2>
                {attraction.location_city && ( // 
                  <p className={styles.attractionLocation}>{attraction.location_city}</p>
                )}
                {attraction.short_description && (
                  <p className={styles.attractionDescription}>
                    {attraction.short_description.substring(0, 110)}
                    {attraction.short_description.length > 110 ? '...' : ''}
                  </p>
                )}
                <span className={styles.viewDetailsButton}>Learn More &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AttractionListPage;