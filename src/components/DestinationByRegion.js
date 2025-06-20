'use client';
import { useState } from 'react'; 
import regionsData from '../data/regions'; // 
import CityCard from './CityCard';
import styles from './DestinationByRegion.module.css';


const DestinationByRegion = () => {
  const [selectedRegionId, setSelectedRegionId] = useState(regionsData[0]?.id || null);

  const handleRegionSelect = (regionId) => {
    setSelectedRegionId(regionId);
    
  };

  // Find the currently selected region's data
  const selectedRegion = regionsData.find(region => region.id === selectedRegionId);

  return (
    <div className={`${styles.regionDestinationsContainer} container`}>
      
      <div className={styles.regionSelector}>
        <h2>Explore Myanmar by Region</h2>
        <div className={styles.regionButtons}>
          {regionsData.map((region) => (
            <button
              key={region.id}
              onClick={() => handleRegionSelect(region.id)}
              className={`${styles.regionButton} ${selectedRegionId === region.id ? styles.active : ''}`}
            >
              {region.name}
            </button>
          ))}
        </div>
      </div>

      
      {selectedRegion && selectedRegion.cities && selectedRegion.cities.length > 0 && (
        <div className={styles.citiesDisplayArea}>
          
          <div className={styles.citiesGrid}>
            {selectedRegion.cities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        </div>
      )}
      
      {selectedRegion && (!selectedRegion.cities || selectedRegion.cities.length === 0) && (
        <div className={styles.noCitiesMessage}>
          <p>No cities currently listed for {selectedRegion.name}.</p>
        </div>
      )}
    </div>
  );
};

export default DestinationByRegion;