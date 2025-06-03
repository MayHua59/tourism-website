import Link from 'next/link';
import Image from 'next/image';
import styles from './CultureCard.module.css';

const CultureCard = ({ cultureItem }) => {
  if (!cultureItem) return null;

  return (
    <Link href={cultureItem.url || `/cultures/${cultureItem.id}`} passHref>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={cultureItem.image_url} //{cultureItem.image_url || '/bagan.jpg'} 
            alt={cultureItem.name}
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.name}>{cultureItem.name}</h3>
          <p className={styles.summary}>{cultureItem.summary}</p>
          <span className={styles.discoverMore}>Discover More &rarr;</span>
        </div>
      </div>
    </Link>
  );
};

export default CultureCard;