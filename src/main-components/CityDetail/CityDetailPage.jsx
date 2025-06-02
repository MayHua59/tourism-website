import React from 'react';
import { citiesData } from '@/data/cities';
import { getCityById } from '@/utils/getItem';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CityDetailPage.module.css';


const CityDetailPage = ({cityId}) => {
    
    
    
    const city =  getCityById(cityId, citiesData)
   if(!city){
     return (
      <div className={styles.notFoundContainer}>
        <h1 className={styles.notFoundTitle}>City Not Found</h1>
        <p>Sorry, we couldn't find details for this city.</p>
        <Link href="/" className={styles.notFoundLink}>
          &larr; Back to Home
        </Link>
      </div>
    );
   }
    
  return (
     <div className={styles.pageContainer}>
      <div className={styles.cityCard}>
        {city.imageUrl && (
          <div className={styles.imageContainer}>
            <Image
              src={city.imageUrl}
              alt={city.name}
              layout="fill"
              className={styles.cityImage} 
              priority
            />
          </div>
        )}
        <div className={styles.contentPadding}>
          <h1 className={styles.cityName}>{city.name}</h1>
          <p className={styles.cityDescription}>{city.description}</p>
          {/* Add more details as needed */}
          {/* For example, attractions, gallery, etc. */}
        </div>
      </div>

      <div className={styles.backLinkContainer}>
        <Link href="/" className={styles.backLink}>
          &larr; Back to Home
        </Link>
      </div>
    </div>
  )
}

export default CityDetailPage