import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './CityCard.module.css';


const CityCard = ({city}) => {
  const shortDescription = city.description.split(' ').slice(0, 10).join(' ') + (city.description.split(' ').length > 10 ? '...' : '');
  return (
    <div className={styles.cityCard}>
      <Link href={`/destinations/${city.slug}`} className={styles.cityLink}>
        <div className={styles.imageWrapper}>
          <Image
            src={city.image_url}
            alt={city.name}
            layout="fill"
            objectFit="cover"
            className={styles.cityImage}
          />
        </div>
        <div className={styles.cityInfo}>
          <h3 className={styles.cityName}>{city.name}</h3>
          {/* <p className={styles.cityDescription}>{shortDescription}</p> */}
        </div>
      </Link>
    </div>
  )
}

export default CityCard