import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './CityCard.module.css';


const CityCard = ({city}) => {
  return (
    <Link href={city.url} passHref>
        <div className={styles.card}>
<div className={styles.imageContainer}>
<Image src={city.image} alt={city.name} layout='fill' objectFit='cover'/>
</div>
<div className={styles.cardContent}>
    <h3 className={styles.cityName}>{city.name}</h3>
    {city.description && <p className={styles.cityDescription}>{city.description}</p>}
</div>
        </div>
    </Link>
  )
}

export default CityCard