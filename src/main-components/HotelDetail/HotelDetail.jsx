import React from 'react';
import { hotelsData } from '../../data/hotels';
import styles from './HotelDetail.module.css';
import Image from 'next/image';
import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs';

const HotelDetailPage = ({ slug }) => {
 
  const hotel = hotelsData.find((hotel) => hotel.slug === slug);

   const segments = [
    
    { label: 'Hotels List', url: '/hotels' },
    { label: hotel.name },
  ];

  
  if (!hotel) {
    return <div className={styles.notFound}>Hotel not found</div>;
  }

  return (
    
    <div className={styles.hotelDetailContainer}>
    <Breadcrumbs segments={segments} className={styles.breadcrumbs}/>
        
      <h1 className={styles.hotelName}>{hotel.name}</h1>
      <div className={styles.hotelImageContainer}>
        <Image
          src={hotel.imageUrl}
          alt={hotel.name}
          layout="responsive"
          width={800}
          height={500}
          className={styles.hotelImage}
        />
      </div>
      <div className={styles.hotelInfo}>
        <p className={styles.hotelLocation}>Location: {hotel.location}</p>
        <p className={styles.hotelPrice}>Price: ${hotel.price}</p>
        <p className={styles.hotelDescription}>{hotel.description}</p>
        
      </div>
    </div>
    
  );
};

export default HotelDetailPage;