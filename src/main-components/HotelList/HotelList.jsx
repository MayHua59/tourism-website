import React from 'react';
import HotelCard from '../../components/ui/HotelCard/HotelCard'; 
import { hotelsData } from '../../data/hotels'; 
import styles from './HotelList.module.css'; 

const HotelListPage = () => {
  return (
    <div className={styles.hotelListContainer}>
      <h2 className={styles.hotelListTitle}>Explore Our Hotels</h2>
      <div className={styles.hotelGrid}>
        {hotelsData.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelListPage;