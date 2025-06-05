'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { myanmarCulturesData } from '../../data/cultures.js';
import { getUniqueRegionsFromCultures } from '../../utils/filterCulture';
import CultureCard from '../../components/ui/CultureCard/CultureCard';
import styles from './CultureList.module.css';

const CultureListPage = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [filteredCultures, setFilteredCultures] = useState(myanmarCulturesData);

  const uniqueRegions = useMemo(() => getUniqueRegionsFromCultures(), []);

  useEffect(() => {
    if (!selectedRegion) {
      setFilteredCultures(myanmarCulturesData);
    } else {
      setFilteredCultures(
        myanmarCulturesData.filter(item =>
          item.region && item.region.toLowerCase().replace(/_/g, ' ') === selectedRegion
        )
      );
    }
  }, [selectedRegion]);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Discover Myanmar's Rich Culture</h1>
        <p className={styles.pageSubtitle}>
          Explore the diverse traditions, arts, and heritage of Myanmar.
        </p>
      </header>

      <div className={styles.filterContainer}>
        <label htmlFor="region-filter" className={styles.filterLabel}>Filter by Region:</label>
        <select
          id="region-filter"
          value={selectedRegion}
          onChange={handleRegionChange}
          className={styles.filterSelect}
        >
          <option value="">All Regions</option>
          {uniqueRegions.map(region => (
            <option key={region} value={region} className={styles.filterOption}>
              {region.charAt(0).toUpperCase() + region.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {filteredCultures.length > 0 ? (
        <div className={styles.culturesGrid}>
          {filteredCultures.map(cultureItem => (
            <CultureCard key={cultureItem.id} cultureItem={cultureItem} />
          ))}
        </div>
      ) : (
        <p className={styles.noItemsMessage}>
          No cultural items found for the selected region.
        </p>
      )}
    </div>
  );
};

export default CultureListPage;