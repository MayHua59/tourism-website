// import React from 'react';
// import HotelCard from '../../components/ui/HotelCard/HotelCard'; 
// import  hotelsData  from '../../data/hotels'; 
// import styles from './HotelList.module.css'; 
// const HotelListPage = () => {
  
//   return (
//     <div className={styles.hotelListContainer}>
//       <h2 className={styles.hotelListTitle}>Explore Our Hotels</h2>
//       <div className={styles.hotelGrid}>
//         {hotelsData.map((hotel) => (
//           <HotelCard key={hotel.id} hotel={hotel} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HotelListPage;

//*** with API ***/
"use client";

import React, { useState, useEffect } from 'react';
import HotelCard from '../../components/ui/HotelCard/HotelCard';
import styles from './HotelList.module.css';
import Loading from '../../components/ui/Loading/Loading'; // Import the Loading component

const HotelListPage = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('/api/v1/hotels'); // Your API endpoint
        if (!response.ok) {
          throw new Error(`Failed to fetch hotels: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setHotels(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setError('Failed to load hotels');
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return (
      <div className={styles.hotelListContainer}>
        <Loading message="Loading hotels..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.hotelListContainer}>
        <h2 className={styles.hotelListTitle}>Explore Our Hotels</h2>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!hotels || hotels.length === 0) {
    return (
      <div className={styles.hotelListContainer}>
        <h2 className={styles.hotelListTitle}>Explore Our Hotels</h2>
        <p>No hotels found at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <div className={styles.hotelListContainer}>
      <h2 className={styles.hotelListTitle}>Explore Our Hotels</h2>
      <div className={styles.hotelGrid}>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelListPage;