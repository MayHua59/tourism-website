import { myanmarCulturesData } from '../data/cultures'; 
import CultureCard from './CultureCard';
import styles from './CultureSection.module.css';

const CultureSection = () => {
  if (!myanmarCulturesData || myanmarCulturesData.length === 0) {
    return null;
  }

  return (
    <section className={`${styles.cultureSectionContainer} container`}>
      <h2 className={styles.sectionTitle}>Immerse in Myanmar's Culture</h2>
      <div className={styles.cultureGrid}>
        {/* {myanmarCulturesData.map((item) => (
          <CultureCard key={item.id || item.name} cultureItem={item} />
        ))} */}
      </div>
    </section>
  );
};

export default CultureSection;