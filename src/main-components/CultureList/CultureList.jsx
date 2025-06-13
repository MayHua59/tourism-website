// // 'use client';

// // import React, { useState, useEffect, useMemo } from 'react';
// // import { myanmarCulturesData } from '../../data/cultures.js';
// // import { getUniqueRegionsFromCultures } from '../../utils/filterCulture';
// // import CultureCard from '../../components/ui/CultureCard/CultureCard';
// // import styles from './CultureList.module.css';

// // const CultureListPage = () => {
// //   const [selectedRegion, setSelectedRegion] = useState('');
// //   const [filteredCultures, setFilteredCultures] = useState(myanmarCulturesData);

// //   const uniqueRegions = useMemo(() => getUniqueRegionsFromCultures(), []);

// //   useEffect(() => {
// //     if (!selectedRegion) {
// //       setFilteredCultures(myanmarCulturesData);
// //     } else {
// //       setFilteredCultures(
// //         myanmarCulturesData.filter(item =>
// //           item.region && item.region.toLowerCase().replace(/_/g, ' ') === selectedRegion
// //         )
// //       );
// //     }
// //   }, [selectedRegion]);

// //   const handleRegionChange = (event) => {
// //     setSelectedRegion(event.target.value);
// //   };

// //   return (
// //     <div className={styles.pageContainer}>
// //       <header className={styles.header}>
// //         <h1 className={styles.pageTitle}>Discover Myanmar's Rich Culture</h1>
// //         <p className={styles.pageSubtitle}>
// //           Explore the diverse traditions, arts, and heritage of Myanmar.
// //         </p>
// //       </header>

// //       <div className={styles.filterContainer}>
// //         <label htmlFor="region-filter" className={styles.filterLabel}>Filter by Region:</label>
// //         <select
// //           id="region-filter"
// //           value={selectedRegion}
// //           onChange={handleRegionChange}
// //           className={styles.filterSelect}
// //         >
// //           <option value="">All Regions</option>
// //           {uniqueRegions.map(region => (
// //             <option key={region} value={region} className={styles.filterOption}>
// //               {region.charAt(0).toUpperCase() + region.slice(1)}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       {filteredCultures.length > 0 ? (
// //         <div className={styles.culturesGrid}>
// //           {filteredCultures.map(cultureItem => (
// //             <CultureCard key={cultureItem.id} cultureItem={cultureItem} />
// //           ))}
// //         </div>
// //       ) : (
// //         <p className={styles.noItemsMessage}>
// //           No cultural items found for the selected region.
// //         </p>
// //       )}
// //     </div>
// //   );
// // };

// // export default CultureListPage;

// // **** with API *********//
// // "use client";

// // import React from 'react';
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import styles from './CultureList.module.css'; 

// // const CultureListPage = ({ culturalItems }) => {
// //   if (!culturalItems || culturalItems.length === 0) {
// //     return (
// //       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
// //         <h1 className={styles.pageTitle}>Explore Myanmar's Culture</h1>
// //         <p className={styles.noItemsText}>No cultural experiences found at the moment. Please check back soon!</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className={styles.pageContainer}>
// //       <h1 className={styles.pageTitle}>Immerse Yourself in Myanmar's Culture</h1>
// //       <p className={styles.pageSubtitle}>Discover the traditions, festivals, and historical sites that define Myanmar's rich heritage.</p>
// //       <div className={styles.cultureGrid}>
// //         {culturalItems.map(item => (
// //           <Link key={item.id} href={`/culture/${item.slug}`} className={styles.cultureCardLink}>
// //             <div className={styles.cultureCard}>
// //               {item.image_url && (
// //                 <div className={styles.cultureImageWrapper}>
// //                   <Image
// //                     src={item.image_url}
// //                     alt={`Image for ${item.name}`}
// //                     layout="fill"
// //                     objectFit="cover"
// //                     className={styles.cultureImage}
// //                   />
// //                 </div>
// //               )}
// //               <div className={styles.cultureInfo}>
// //                 <h2 className={styles.cultureName}>{item.name}</h2>
// //                 {item.type && (
// //                   <p className={styles.cultureType}>Type: {item.type}</p>
// //                 )}
// //                 {item.short_description && (
// //                   <p className={styles.cultureDescription}>
// //                     {item.short_description.substring(0, 100)}
// //                     {item.short_description.length > 100 ? '...' : ''}
// //                   </p>
// //                 )}
// //                 <span className={styles.viewDetailsButton}>Experience Culture &rarr;</span>
// //               </div>
// //             </div>
// //           </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CultureListPage;

// // ****** start Section with Static Data ********//
// "use client";

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './CultureList.module.css'; 

// const CultureList = ({ cultures, villages, townships }) => {
//   if (!cultures || cultures.length === 0) {
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.pageTitle}>Myanmar Cultures</h1>
//         <p className={styles.noItemsText}>No cultures found at the moment. Please check back later!</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <h1 className={styles.pageTitle}>Explore Myanmar Cultures</h1>
//       <p className={styles.pageSubtitle}>Discover the diverse traditions and heritage of Myanmar.</p>
//       <div className={styles.culturesGrid}>
//         {cultures.map(culture => {
//           const village = villages && culture.village_id ? villages.find(v => v.id === culture.village_id) : null;
//           const township = townships && culture.township_id ? townships.find(t => t.id === culture.township_id) : null;

//           return (
//             <Link key={culture.id} href={`/cultures/${culture.slug}`} className={styles.cultureCardLink}>
//               <div className={styles.cultureCard}>
//                 {culture.image_url && (
//                   <div className={styles.cultureImageWrapper}>
//                     <Image
//                       src={culture.image_url}
//                       alt={`Image for ${culture.name}`}
//                       layout="fill"
//                       objectFit="cover"
//                       className={styles.cultureImage}
//                     />
//                   </div>
//                 )}
//                 <div className={styles.cultureInfo}>
//                   <h2 className={styles.cultureName}>{culture.name}</h2>
//                   {village && (
//                     <p className={styles.cultureVillage}>Village: {village.name}</p>
//                   )}
//                    {township && (
//                     <p className={styles.cultureTownship}>Township: {township.name}</p>
//                   )}
//                   <p className={styles.cultureDescription}>
//                     {culture.description.substring(0, 100)}
//                     {culture.description.length > 100 ? '...' : ''}
//                   </p>
//                   <span className={styles.viewCultureButton}>Learn More &rarr;</span>
//                 </div>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CultureList;
// // ****** end Section with Static Data ********//

//*** with API ***/
// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './CultureList.module.css';
// import Loading from '../../components/ui/Loading/Loading';

// const CultureList = () => {
//   const [cultures, setCultures] = useState([]);
//   const [villages, setVillages] = useState([]);
//   const [townships, setTownships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCultures = async () => {
//       try {
//         const culturesResponse = await fetch('/api/v1/cultures');
//         const villagesResponse = await fetch('/api/v1/villages');
//         const townshipsResponse = await fetch('/api/v1/townships');

//         if (!culturesResponse.ok || !villagesResponse.ok || !townshipsResponse.ok) {
//           throw new Error(`Failed to fetch data: 
//             Cultures: ${culturesResponse.status} ${culturesResponse.statusText},
//             Villages: ${villagesResponse.status} ${villagesResponse.statusText},
//             Townships: ${townshipsResponse.status} ${townshipsResponse.statusText}
//           `);
//         }

//         const culturesData = await culturesResponse.json();
//         const villagesData = await villagesResponse.json();
//         const townshipsData = await townshipsResponse.json();

//         setCultures(culturesData);
//         setVillages(villagesData);
//         setTownships(townshipsData);
//         setLoading(false);

//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Failed to load cultural data');
//         setLoading(false);
//       }
//     };

//     fetchCultures();
//   }, []);

//   if (loading) {
//     return (
//       <div className={styles.pageContainer}>
//         <Loading message="Loading cultural information..." />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.pageTitle}>Explore Myanmar Cultures</h1>
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   if (!cultures || cultures.length === 0) {
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.pageTitle}>Myanmar Cultures</h1>
//         <p className={styles.noItemsText}>No cultures found at the moment. Please check back later!</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <h1 className={styles.pageTitle}>Explore Myanmar Cultures</h1>
//       <p className={styles.pageSubtitle}>Discover the diverse traditions and heritage of Myanmar.</p>
//       <div className={styles.culturesGrid}>
//         {cultures.map(culture => {
//           const village = villages && culture.village_id ? villages.find(v => v.id === culture.village_id) : null;
//           const township = townships && culture.township_id ? townships.find(t => t.id === culture.township_id) : null;

//           return (
//             <Link key={culture.id} href={`/cultures/${culture.slug}`} className={styles.cultureCardLink}>
//               <div className={styles.cultureCard}>
//                 {culture.image_url && (
//                   <div className={styles.cultureImageWrapper}>
//                     <Image
//                       src={culture.image_url}
//                       alt={`Image for ${culture.name}`}
//                       layout="fill"
//                       objectFit="cover"
//                       className={styles.cultureImage}
//                     />
//                   </div>
//                 )}
//                 <div className={styles.cultureInfo}>
//                   <h2 className={styles.cultureName}>{culture.name}</h2>
//                   {village && (
//                     <p className={styles.cultureVillage}>Village: {village.name}</p>
//                   )}
//                   {township && (
//                     <p className={styles.cultureTownship}>Township: {township.name}</p>
//                   )}
//                   <p className={styles.cultureDescription}>
//                     {culture.description.substring(0, 100)}
//                     {culture.description.length > 100 ? '...' : ''}
//                   </p>
//                   <span className={styles.viewCultureButton}>Learn More &rarr;</span>
//                 </div>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CultureList;

//*** with Pagination ***/
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CultureList.module.css';
import Loading from '../../components/ui/Loading/Loading';
import Pagination from '../../components/ui/Pagination/Pagination';

const CultureList = () => {
  const [cultures, setCultures] = useState([]);
  const [villages, setVillages] = useState([]);
  const [townships, setTownships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCultures = async () => {
      try {
        console.log(`Fetching page ${currentPage} with ${perPage} items per page`);
        const culturesResponse = await fetch(`/api/v1/cultures?page=${currentPage}&per_page=${perPage}`);
        const villagesResponse = await fetch('/api/v1/villages');
        const townshipsResponse = await fetch('/api/v1/townships');

        if (!culturesResponse.ok || !villagesResponse.ok || !townshipsResponse.ok) {
          throw new Error(`Failed to fetch data: 
            Cultures: ${culturesResponse.status} ${culturesResponse.statusText},
            Villages: ${villagesResponse.status} ${villagesResponse.statusText},
            Townships: ${townshipsResponse.status} ${townshipsResponse.statusText}
          `);
        }

        const culturesData = await culturesResponse.json();
        const villagesData = await villagesResponse.json();
        const townshipsData = await townshipsResponse.json();

        setCultures(culturesData.data); 
        setTotalItems(culturesData.total); 
        setTotalPages(culturesData.last_page); 
        setVillages(villagesData);
        setTownships(townshipsData);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load cultural data');
        setLoading(false);
      }
    };

    fetchCultures();
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
      <div className={styles.pageContainer}>
        <Loading message="Loading cultural information..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Explore Myanmar Cultures</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!cultures || cultures.length === 0) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Myanmar Cultures</h1>
        <p className={styles.noItemsText}>No cultures found at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Explore Myanmar Cultures</h1>
      <p className={styles.pageSubtitle}>Discover the diverse traditions and heritage of Myanmar.</p>
      <div className={styles.culturesGrid}>
        {cultures.map(culture => {
          const village = villages && culture.village_id ? villages.find(v => v.id === culture.village_id) : null;
          const township = townships && culture.township_id ? townships.find(t => t.id === culture.township_id) : null;

          return (
            <Link key={culture.id} href={`/cultures/${culture.slug}`} className={styles.cultureCardLink}>
              <div className={styles.cultureCard}>
                {culture.image_url && (
                  <div className={styles.cultureImageWrapper}>
                    <Image
                      src={culture.image_url}
                      alt={`Image for ${culture.name}`}
                      layout="fill"
                      objectFit="cover"
                      className={styles.cultureImage}
                    />
                  </div>
                )}
                <div className={styles.cultureInfo}>
                  <h2 className={styles.cultureName}>{culture.name}</h2>
                  {village && (
                    <p className={styles.cultureVillage}>Village: {village.name}</p>
                  )}
                  {township && (
                    <p className={styles.cultureTownship}>Township: {township.name}</p>
                  )}
                  <p className={styles.cultureDescription}>
                    {culture.description.substring(0, 100)}
                    {culture.description.length > 100 ? '...' : ''}
                  </p>
                  <span className={styles.viewCultureButton}>Learn More &rarr;</span>
                </div>
              </div>
            </Link>
          );
        })}
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

export default CultureList;