'use client'
import React, { useState } from 'react';
import styles from './RestaurantList.module.css';
import Link from 'next/link';
import restaurantsData from '../../data/restaurants'; 

const RestaurantListPage = () => {
  // State for filters and sorting
  const [locationFilter, setLocationFilter] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  // Filtered and sorted restaurantsData
  const filteredRestaurants = restaurantsData
    .filter((restaurant) => {
      if (locationFilter && restaurant.location !== locationFilter) {
        return false;
      }
      if (cuisineFilter && restaurant.cuisine !== cuisineFilter) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'alphabetical') {
        return a.name.localeCompare(b.name);
      }
      // Add more sorting logic here (e.g., by price, rating)
      return 0;
    });

  // Unique locations and cuisines for filter options
  const locations = [...new Set(restaurantsData.map((restaurant) => restaurant.location))];
  const cuisines = [...new Set(restaurantsData.map((restaurant) => restaurant.cuisine))];

  return (
    <div className={styles.restaurantListPage}>
      <h1 className={styles.pageTitle}>All Restaurants in Myanmar</h1>

      {/* Filtering and Sorting Options */}
      <div className={styles.filterSection}>
        <div className={styles.filterGroup}>
          <label htmlFor="locationFilter">Location:</label>
          <select id="locationFilter" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="cuisineFilter">Cuisine:</label>
          <select id="cuisineFilter" value={cuisineFilter} onChange={(e) => setCuisineFilter(e.target.value)}>
            <option value="">All Cuisines</option>
            {cuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="sortBy">Sort By:</label>
          <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popularity">Popularity</option>
            <option value="alphabetical">Alphabetical</option>
            {/* Add more sorting options here */}
          </select>
        </div>
      </div>

      {/* Restaurant Listing */}
      <div className={styles.restaurantGrid}>
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className={styles.restaurantCard}>
            <img src={restaurant.imageUrl} alt={restaurant.name} className={styles.restaurantImage} />
            <div className={styles.restaurantInfo}>
              <h3 className={styles.restaurantName}>{restaurant.name}</h3>
              <p className={styles.restaurantCuisine}>{restaurant.cuisine}</p>
              <p className={styles.restaurantLocation}>{restaurant.location}</p>
              <p className={styles.restaurantDescription}>{restaurant.description}</p>
              <Link href={`/restaurants/${restaurant.slug}`} className={styles.viewDetailsButton}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantListPage;