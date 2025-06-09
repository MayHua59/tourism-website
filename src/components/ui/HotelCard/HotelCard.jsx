'use client'
import React from 'react';
import styles from './HotelCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

const HotelCard = ({ hotel }) => {
  return (
    <div className={styles.hotelCard}>
      <Link href={`/hotels/${hotel.slug}`} passHref>
        <div className={styles.imageContainer}>
          <Image
            src={hotel.imageUrl}
            alt={hotel.name}
            layout="fill"
            objectFit="cover"
            className={styles.hotelImage}
          />
        </div>
      </Link>
      <div className={styles.hotelInfo}>
        <h3 className={styles.hotelName}>
          <Link href={`/hotels/${hotel.slug}`}>
            {hotel.name}
          </Link>
        </h3>
        <p className={styles.hotelLocation}>{hotel.location}</p>
        <p className={styles.hotelPrice}>From ${hotel.price}</p>
        <p className={styles.hotelDescription}>{hotel.description}</p>
        <Link href={`/hotels/${hotel.slug}`} className={styles.viewMoreButton}>
          View More
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;