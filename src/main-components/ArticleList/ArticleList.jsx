'use client'; 

import React, { useState, useEffect, useMemo } from 'react';
import { articlesData, getUniqueCitiesFromArticles } from '@/data/articles'; 
import ArticleCard from '@/components/ui/ArticleCard/ArticleCard'; 
import styles from './ArticleList.module.css'; 

const ArticalListPage = () => {
  const [selectedCity, setSelectedCity] = useState(''); 
  const [filteredArticles, setFilteredArticles] = useState(articlesData);

  const uniqueCities = useMemo(() => getUniqueCitiesFromArticles(), []);

  useEffect(() => {
    if (!selectedCity) {
      setFilteredArticles(articlesData);
    } else {
      setFilteredArticles(
        articlesData.filter(article =>
          article.relatedCities && article.relatedCities.includes(selectedCity)
        )
      );
    }
  }, [selectedCity]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Travel Articles & Guides</h1>
        <p className={styles.pageSubtitle}>
          Discover insights, tips, and stories about traveling in Myanmar.
        </p>
      </header>

      <div className={styles.filterContainer}>
        <label htmlFor="city-filter" className={styles.filterLabel}>Filter by City/Region:</label>
        <select
          id="city-filter"
          value={selectedCity}
          onChange={handleCityChange}
          className={styles.filterSelect}
        >
          <option value="">All Locations</option>
          {uniqueCities.map(city => (
            <option key={city} value={city} className={styles.filterOption}>
              {city.charAt(0).toUpperCase() + city.slice(1)} {/* Capitalize first letter */}
            </option>
          ))}
        </select>
      </div>

      {filteredArticles.length > 0 ? (
        <div className={styles.articlesGrid}>
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className={styles.noArticlesMessage}>
          No articles found for the selected filter. Try a different location!
        </p>
      )}
    </div>
  );
};

export default ArticalListPage;