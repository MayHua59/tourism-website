// 'use client';

// import React, { useState, useEffect, useMemo } from 'react';
// import { myanmarCulturesData } from '../../data/cultures.js';
// import { getUniqueRegionsFromCultures } from '../../utils/filterCulture';
// import CultureCard from '../../components/ui/CultureCard/CultureCard';
// import styles from './CultureList.module.css';

// const CultureListPage = () => {
//   const [selectedRegion, setSelectedRegion] = useState('');
//   const [filteredCultures, setFilteredCultures] = useState(myanmarCulturesData);

//   const uniqueRegions = useMemo(() => getUniqueRegionsFromCultures(), []);

//   useEffect(() => {
//     if (!selectedRegion) {
//       setFilteredCultures(myanmarCulturesData);
//     } else {
//       setFilteredCultures(
//         myanmarCulturesData.filter(item =>
//           item.region && item.region.toLowerCase().replace(/_/g, ' ') === selectedRegion
//         )
//       );
//     }
//   }, [selectedRegion]);

//   const handleRegionChange = (event) => {
//     setSelectedRegion(event.target.value);
//   };

//   return (
//     <div className={styles.pageContainer}>
//       <header className={styles.header}>
//         <h1 className={styles.pageTitle}>Discover Myanmar's Rich Culture</h1>
//         <p className={styles.pageSubtitle}>
//           Explore the diverse traditions, arts, and heritage of Myanmar.
//         </p>
//       </header>

//       <div className={styles.filterContainer}>
//         <label htmlFor="region-filter" className={styles.filterLabel}>Filter by Region:</label>
//         <select
//           id="region-filter"
//           value={selectedRegion}
//           onChange={handleRegionChange}
//           className={styles.filterSelect}
//         >
//           <option value="">All Regions</option>
//           {uniqueRegions.map(region => (
//             <option key={region} value={region} className={styles.filterOption}>
//               {region.charAt(0).toUpperCase() + region.slice(1)}
//             </option>
//           ))}
//         </select>
//       </div>

//       {filteredCultures.length > 0 ? (
//         <div className={styles.culturesGrid}>
//           {filteredCultures.map(cultureItem => (
//             <CultureCard key={cultureItem.id} cultureItem={cultureItem} />
//           ))}
//         </div>
//       ) : (
//         <p className={styles.noItemsMessage}>
//           No cultural items found for the selected region.
//         </p>
//       )}
//     </div>
//   );
// };

// export default CultureListPage;

// **** with API *********//
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CultureList.module.css'; 

const CultureListPage = ({ culturalItems }) => {
  if (!culturalItems || culturalItems.length === 0) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Explore Myanmar's Culture</h1>
        <p className={styles.noItemsText}>No cultural experiences found at the moment. Please check back soon!</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Immerse Yourself in Myanmar's Culture</h1>
      <p className={styles.pageSubtitle}>Discover the traditions, festivals, and historical sites that define Myanmar's rich heritage.</p>
      <div className={styles.cultureGrid}>
        {culturalItems.map(item => (
          <Link key={item.id} href={`/culture/${item.slug}`} className={styles.cultureCardLink}>
            <div className={styles.cultureCard}>
              {item.image_url && (
                <div className={styles.cultureImageWrapper}>
                  <Image
                    src={item.image_url}
                    alt={`Image for ${item.name}`}
                    layout="fill"
                    objectFit="cover"
                    className={styles.cultureImage}
                  />
                </div>
              )}
              <div className={styles.cultureInfo}>
                <h2 className={styles.cultureName}>{item.name}</h2>
                {item.type && (
                  <p className={styles.cultureType}>Type: {item.type}</p>
                )}
                {item.short_description && (
                  <p className={styles.cultureDescription}>
                    {item.short_description.substring(0, 100)}
                    {item.short_description.length > 100 ? '...' : ''}
                  </p>
                )}
                <span className={styles.viewDetailsButton}>Experience Culture &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CultureListPage;