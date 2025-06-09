import React from 'react';
import styles from './RestaurantDetail.module.css';
import restaurantsData from '../../data/restaurants';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaClock, FaUtensils } from 'react-icons/fa'; 
import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs';

const RestaurantDetailPage = ({ slug }) => {
  const restaurant = restaurantsData.find((restaurant) => restaurant.slug === slug);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

   const breadcrumbSegments = [
   
    { label: 'Restaurants', url: '/restaurants' },
    { label: restaurant.name},
  ];

  return (
    <div className={styles.restaurantDetailPage}>
        <Breadcrumbs segments={breadcrumbSegments}/>
      <h1 className={styles.restaurantName}>{restaurant.name}</h1>

      <div className={styles.imageGallery}>
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          width={800}
          height={500}
          className={styles.heroImage}
          style={{ objectFit: 'cover' }} 
        />
        {/* Add more images here if available */}
      </div>

      <div className={styles.restaurantOverview}>
        <p className={styles.cuisine}>
          <FaUtensils /> {restaurant.cuisine}
        </p>
        <p className={styles.location}>
          <FaMapMarkerAlt /> {restaurant.location}
        </p>
        {/* <p className={styles.priceRange}>Price Range: {restaurant.priceRange}</p> */}
      </div>

      <div className={styles.restaurantDescription}>
        <h2>About {restaurant.name}</h2>
        <p>{restaurant.description}</p>
      </div>

      <div className={styles.menuSection}>
        <h2>Menu</h2>
        {/* Display menu here (e.g., link to PDF, embed online menu) */}
        <p>Menu coming soon!</p>
      </div>

      <div className={styles.hoursSection}>
        <h2>
          <FaClock /> Operating Hours
        </h2>
        <p>Monday - Sunday: 11:00 AM - 10:00 PM</p>
      </div>

      <div className={styles.contactSection}>
        <h2>Location & Contact</h2>
        <p>
          <FaMapMarkerAlt /> Address: {restaurant.address || 'Coming Soon'}
        </p>
        <p>
          <FaPhone /> Phone: {restaurant.phone || 'Coming Soon'}
        </p>
        {/* Add Google Maps embed here */}
      </div>

      <div className={styles.reservationSection}>
        <h2>Reservations</h2>
        <p>Call us to reserve a table!</p>
        {/* Add reservation form or link to third-party booking site */}
      </div>

      {/* Add Reviews, Amenities, Social Media Links, Nearby Attractions sections here */}
    </div>
  );
};

export default RestaurantDetailPage;