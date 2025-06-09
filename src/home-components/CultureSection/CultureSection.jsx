import  myanmarCulturesData  from '../../data/homepage-data/cultures'; 
import CultureCard from '../Cards/CultureCard/CultureCard';
import styles from './CultureSection.module.css';
import Link from 'next/link';

const CultureSection = () => {
  if (!myanmarCulturesData || myanmarCulturesData.length === 0) {
    return null;
  }

  return (
    <section className={`${styles.cultureSectionContainer} container`}>
      <h2 className={styles.sectionTitle}>Immerse in Myanmar's Culture</h2>
      <div className={styles.cultureGrid}>
        {myanmarCulturesData.map((item) => (
          <CultureCard key={item.id || item.name} cultureItem={item} />
        ))}
      </div>
      <div className={styles.viewAllContainer}>
        <Link href="/articles" className={styles.viewAllButton}>
          View All Myanmar Cultures
        </Link>
      </div>
    </section>
  );
};

export default CultureSection;