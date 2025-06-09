'use client'
import React, { useState } from 'react';
import styles from './HotelSection.module.css';
import { FaHotel, FaBed, FaBath, FaUtensils, FaWifi, FaSwimmingPool, FaParking, FaCoffee } from 'react-icons/fa'; 
import hotels from '../../data/homepage-data/hotels';
import Link from 'next/link';
const HotelSection = () => {
  

  const [currentHotelIndex, setCurrentHotelIndex] = useState(0);

  const handleNextHotel = () => {
    setCurrentHotelIndex((prevIndex) => (prevIndex + 1) % hotels.length);
  };

  const handlePrevHotel = () => {
    setCurrentHotelIndex((prevIndex) => (prevIndex - 1 + hotels.length) % hotels.length);
  };

  const currentHotel = hotels[currentHotelIndex];

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Discover Your Perfect Stay</h2>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          
          <FaHotel className={styles.hotelIcon} />
          <FaBed className={styles.hotelIcon} />
          <FaBath className={styles.hotelIcon} />
          <FaUtensils className={styles.hotelIcon} />
          <FaWifi className={styles.hotelIcon} />
          <FaSwimmingPool className={styles.hotelIcon} />
          <FaParking className={styles.hotelIcon} />
          <FaCoffee className={styles.hotelIcon} />

          <h3>{currentHotel.name}</h3>
          <p>Location: {currentHotel.location}</p>
          <p>Price: ${currentHotel.price}</p>
          <p>{currentHotel.description}</p>
        </div>
        <div className={styles.carouselContainer}>
          <img src={currentHotel.imageUrl} alt={currentHotel.name} className={styles.hotelImage} />
          <button className={styles.prevButton} onClick={handlePrevHotel}>
            &lt;
          </button>
          <button className={styles.nextButton} onClick={handleNextHotel}>
            &gt;
          </button>
        </div>
      </div>
       <div className={styles.viewAllContainer}>
        <Link href="/articles" className={styles.viewAllButton}>
          View All Hotels
        </Link>
      </div>
    </div>
  );
};

export default HotelSection;