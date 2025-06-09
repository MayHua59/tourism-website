import React from 'react';
import styles from './RestaurantSection.module.css';
import Link from 'next/link';
import restaurants from '../../data/homepage-data/restaurants';

const RestaurantSection = () => {
  
 

  return (
    <div className={styles.restaurantSection}>
      <h2 className={styles.sectionTitle}>Savor Myanmar's Flavors</h2>
      <p className={styles.introText}>
        Embark on a culinary journey across Myanmar! From authentic local dishes to exquisite international cuisine, discover diverse dining options that promise to delight your palate.
      </p>

      <div className={styles.restaurantGrid}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className={styles.restaurantCard}>
            <img src={restaurant.imageUrl} alt={restaurant.name} className={styles.restaurantImage} />
            <div className={styles.restaurantInfo}>
              <h3 className={styles.restaurantName}>{restaurant.name}</h3>
              <p className={styles.restaurantCuisine}>{restaurant.cuisine}</p>
              <p className={styles.restaurantLocation}>{restaurant.location}</p>
              <p className={styles.restaurantDescription}>{restaurant.description}</p>
              <Link href={`/restaurants/${restaurant.slug}`} className={styles.viewRestaurantButton}>
                View Restaurant
              </Link>
            </div>
          </div>
        ))}
      </div>

       <div className={styles.viewAllContainer}>
        <Link href="/restaurants" className={styles.viewAllButton}>
          View All Restaurants
        </Link>
      </div>
    </div>
  );
};

export default RestaurantSection;