// "use client";

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './DestinationList.module.css'; 

// const DestinationListPage = ({ destinations }) => {
//   if (!destinations || destinations.length === 0) {
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.pageTitle}>Explore Destinations</h1>
//         <p className={styles.noItemsText}>No destinations found at the moment. Please check back later!</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <h1 className={styles.pageTitle}>Explore Our Destinations</h1>
//       <p className={styles.pageSubtitle}>Discover the beauty and diversity of Myanmar through its unique destinations.</p>
//       <div className={styles.destinationsGrid}>
//         {destinations.map(destination => (
//           <Link key={destination.id} href={`/destinations/${destination.slug}`} className={styles.destinationCardLink}>
//             <div className={styles.destinationCard}>
//               {destination.image_url && (
//                 <div className={styles.destinationImageWrapper}>
//                   <Image
//                     src={destination.image_url}
//                     alt={`Image for ${destination.name}`}
//                     layout="fill"
//                     objectFit="cover"
//                     className={styles.destinationImage}
//                   />
//                 </div>
//               )}
//               <div className={styles.destinationInfo}>
//                 <h2 className={styles.destinationName}>{destination.name}</h2>
//                 {destination.region && (
//                   <p className={styles.destinationRegion}>{destination.region}</p>
//                 )}
//                 {destination.short_description && (
//                   <p className={styles.destinationDescription}>
//                     {destination.short_description.substring(0, 120)}
//                     {destination.short_description.length > 120 ? '...' : ''}
//                   </p>
//                 )}
//                 <span className={styles.viewDetailsButton}>Discover More &rarr;</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DestinationListPage;

//*** with API ***/
// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './DestinationList.module.css';
// import Loading from '../../components/ui/Loading/Loading';

// const DestinationListPage = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         const response = await fetch('/api/v1/destinations');
//         if (!response.ok) {
//           throw new Error(`Failed to fetch destinations: ${response.status} ${response.statusText}`);
//         }
//         const data = await response.json();
//         setDestinations(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching destinations:', error);
//         setError('Failed to load destinations');
//         setLoading(false);
//       }
//     };

//     fetchDestinations();
//   }, []);

//   if (loading) {
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.pageTitle}>Explore Destinations</h1>
//         <Loading message='Loading Destinations....'/>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.pageTitle}>Explore Destinations</h1>
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   if (!destinations || destinations.length === 0) {
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.pageTitle}>Explore Destinations</h1>
//         <p className={styles.noItemsText}>No destinations found at the moment. Please check back later!</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <h1 className={styles.pageTitle}>Explore Our Destinations</h1>
//       <p className={styles.pageSubtitle}>Discover the beauty and diversity of Myanmar through its unique destinations.</p>
//       <div className={styles.destinationsGrid}>
//         {destinations.map(destination => (
//           <Link key={destination.id} href={`/destinations/${destination.slug}`} className={styles.destinationCardLink}>
//             <div className={styles.destinationCard}>
//               {destination.image_url && (
//                 <div className={styles.destinationImageWrapper}>
//                   <Image
//                     src={destination.image_url}
//                     alt={`Image for ${destination.name}`}
//                     layout="fill"
//                     objectFit="cover"
//                     className={styles.destinationImage}
//                   />
//                 </div>
//               )}
//               <div className={styles.destinationInfo}>
//                 <h2 className={styles.destinationName}>{destination.name}</h2>
//                 {destination.region && (
//                   <p className={styles.destinationRegion}>{destination.region}</p>
//                 )}
//                 {destination.short_description && (
//                   <p className={styles.destinationDescription}>
//                     {destination.short_description.substring(0, 120)}
//                     {destination.short_description.length > 120 ? '...' : ''}
//                   </p>
//                 )}
//                 <span className={styles.viewDetailsButton}>Discover More &rarr;</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DestinationListPage;

//*** with Pagination ***/
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './DestinationList.module.css';
import Loading from '../../components/ui/Loading/Loading';
import Pagination from '../../components/ui/Pagination/Pagination';

const DestinationListPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        console.log(`Fetching page ${currentPage} with ${perPage} items per page`);
        const response = await fetch(`/api/v1/destinations?page=${currentPage}&per_page=${perPage}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch destinations: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log("API Data:", data);
        setDestinations(data.data);
        setTotalItems(data.total);
        setTotalPages(data.last_page);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching destinations:', error);
        setError('Failed to load destinations');
        setLoading(false);
      }
    };

    fetchDestinations();
  }, [currentPage, perPage]);

  const handlePageChange = (newPage) => {
    console.log("New Page:", newPage);
    setCurrentPage(newPage);
  };

  const handlePerPageChange = (newPerPage) => {
    console.log("New Per Page:", newPerPage);
    setPerPage(newPerPage);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Explore Destinations</h1>
        <Loading message='Loading Destinations....'/>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Explore Destinations</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!destinations || destinations.length === 0) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Explore Destinations</h1>
        <p className={styles.noItemsText}>No destinations found at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Explore Our Destinations</h1>
      <p className={styles.pageSubtitle}>Discover the beauty and diversity of Myanmar through its unique destinations.</p>
      <div className={styles.destinationsGrid}>
        {destinations.map(destination => (
          <Link key={destination.id} href={`/destinations/${destination.slug}`} className={styles.destinationCardLink}>
            <div className={styles.destinationCard}>
              {destination.image_url && (
                <div className={styles.destinationImageWrapper}>
                  <Image
                    src={destination.image_url}
                    alt={`Image for ${destination.name}`}
                    layout="fill"
                    objectFit="cover"
                    className={styles.destinationImage}
                    
                  />
                </div>
              )}
              <div className={styles.destinationInfo}>
                <h2 className={styles.destinationName}>{destination.name}</h2>
                {destination.region && (
                  <p className={styles.destinationRegion}>{destination.region}</p>
                )}
                {destination.short_description && (
                  <p className={styles.destinationDescription}>
                    {destination.short_description.substring(0, 120)}
                    {destination.short_description.length > 120 ? '...' : ''}
                  </p>
                )}
                <span className={styles.viewDetailsButton}>Discover More &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        perPage={perPage}
        onPageChange={handlePageChange}
        onPerPageChange={handlePerPageChange}
      />
    </div>
  );
};

export default DestinationListPage;