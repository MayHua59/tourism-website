// "use client";

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './DestinationDetail.module.css'; 



// const DestinationDetailPage = ({ destinationData }) => {
  

//   const item = destinationData;

//   if (!item) {
    
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1>Destination Data Missing</h1>
//         <Link href="/destinations" className={styles.backLink}> 
//           &larr; Back to Destinations
//         </Link>
//       </div>
//     );
//   }

// //   // Handle long description (e.g., if it's HTML)
// //   let longDescriptionContent;
// //   if (item.long_description) {
// //     // Assuming HTML content for long_description
// //     longDescriptionContent = <div dangerouslySetInnerHTML={{ __html: item.long_description }} />;
// //   } else if (item.description) {
// //     longDescriptionContent = <p>{item.description}</p>;
// //   } else {
// //     longDescriptionContent = <p>No detailed description available for this destination.</p>;
// //   }

//   return (
//     <div className={styles.pageContainer}>
//       <header className={styles.itemHeader}>
//         {item.image_url && (
//           <div className={styles.itemImageWrapper}>
//             <Image
//               src={item.image_url}
//               alt={`Image for ${item.name}`}
//               layout="fill"
//               objectFit="cover"
//               priority
//             />
//           </div>
//         )}
//         <div className={styles.itemHeaderText}>
//           <h1 className={styles.itemName}>{item.name}</h1>
//           {item.region && <p className={styles.itemRegion}>{item.region}</p>}
//           {item.category && (
//             <Link href={`/destination-categories/${item.category.slug || item.category.id}`} className={styles.categoryLink}>
//               Type: {item.category.name}
//             </Link>
//           )}
//         </div>
//       </header>

//       <nav className={styles.breadcrumbs}>
//         <Link href="/">Home</Link> &gt;
//         <Link href="/destination-categories">Destination Categories</Link>
//         {item.category && (
//           <>
//             &gt; <Link href={`/destination-categories/${item.category.slug || item.category.id}`}>{item.category.name}</Link>
//           </>
//         )}
//         &gt; <span>{item.name}</span>
//       </nav>

//       <article className={styles.itemContent}>
//         <section className={styles.mainDetailsSection}>
//           {item.best_time_to_visit && <p><strong>Best Time to Visit:</strong> {item.best_time_to_visit}</p>}
          
//         </section>

//         {item.description && !item.long_description && (
//             <p className={styles.shortDescription}>{item.description}</p>
//         )}

//         <section className={styles.descriptionSection}>
//           <h2>About {item.name}</h2>
//           {longDescriptionContent}
//         </section>

//         {item.things_to_do && item.things_to_do.length > 0 && (
//           <section className={styles.activitiesSection}>
//             <h2>Things to Do</h2>
//             <ul className={styles.activitiesList}>
//               {item.things_to_do.map((activity, index) => (
//                 <li key={index}>{typeof activity === 'string' ? activity : activity.name}</li>
//               ))}
//             </ul>
//           </section>
//         )}

//         {item.nearby_attractions && item.nearby_attractions.length > 0 && (
//           <section className={styles.nearbySection}>
//             <h2>Nearby Attractions</h2>
//             <ul className={styles.nearbyList}>
//               {item.nearby_attractions.map((attraction, index) => (
//                 <li key={index}>
//                   <Link href={`/attractions/${attraction.slug || attraction.id}`}>
//                     {attraction.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </section>
//         )}

//         {item.images && item.images.length > 0 && (
//           <section className={styles.gallerySection}>
//             <h2>Gallery</h2>
//             <div className={styles.galleryGrid}>
//               {item.images.map((img, index) => (
//                 <div key={index} className={styles.galleryImageContainer}>
//                   <Image src={img.url} alt={img.caption || `Image ${index + 1} for ${item.name}`} layout="responsive" width={300} height={200} objectFit="cover" />
//                   {img.caption && <p className={styles.galleryCaption}>{img.caption}</p>}
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {item.latitude && item.longitude && (
//           <section className={styles.mapSection}>
//             <h2>Location Map</h2>
//             <div className={styles.mapPlaceholder}>
//               Map for {item.name} (Lat: {item.latitude}, Lng: {item.longitude})
//               <p><small>Map integration component would go here.</small></p>
//             </div>
//           </section>
//         )}
//       </article>

//       <div style={{ textAlign: 'center', marginTop: '40px' }}>
//         {item.category ? (
//           <Link href={`/destination-categories/${item.category.slug || item.category.id}`} className={styles.backLink}>
//             &larr; Back to {item.category.name}
//           </Link>
//         ) : (
//           <Link href="/destination-categories" className={styles.backLink}>
//             &larr; Back to Destination Categories
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DestinationDetailPage;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import  destinationsData  from '../../data/destinations';
import styles from './DestinationDetail.module.css';
import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs';

const DestinationDetailPage = ({slug}) => {
  const destination = destinationsData.find(d => d.slug === slug);
   const segments = [
   
    { label: 'Destinations', url: '/destinations' },
    { label: destination.name },
  ];
  if (!destination) {
    return (
      <div className={styles.pageContainer}>
        <Breadcrumbs segments={segments} />
        <h1>Destination Not Found</h1>
        <p>The destination you are looking for does not exist.</p>
        <Link href="/destinations">
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
     <div className={styles.pageContainer}>
      <Breadcrumbs segments={segments} />
      <header className={styles.destinationHeader}>
        <h1 className={styles.destinationTitle}>{destination.name}</h1>
      </header>

      <div className={styles.destinationImageWrapper}>
        <Image
          src={destination.image_url}
          alt={destination.name}
          layout="fill"
          objectFit="cover"
          className={styles.destinationImage}
        />
      </div>

      <article className={styles.destinationContent}>
        <p>{destination.description}</p>
      </article>

      <footer className={styles.destinationFooter}>
        <Link href="/destinations">
          Back to Destinations
        </Link>
      </footer>
    </div>
  )
}

export default DestinationDetailPage