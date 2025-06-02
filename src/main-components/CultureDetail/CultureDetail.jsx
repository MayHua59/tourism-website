import { getCultureById } from '../../utils/getById'; 
import { myanmarCulturesData } from '../../data/cultures'; 
import Image from 'next/image';
import Link from 'next/link';
import styles from './CultureDetail.module.css';


// export async function generateStaticParams() {
//   if (!myanmarCulturesData || !Array.isArray(myanmarCulturesData)) return [];
//   return myanmarCulturesData.map((item) => {
//     if (item.url) {
//       const slug = item.url.substring(item.url.lastIndexOf('/') + 1);
//       return { cultureSlug: slug };
//     }
//     return null; 
//   }).filter(Boolean); 
// }

const CultureDetailPage = ({cultureId}) => {
  
  const cultureItem = getCultureById(cultureId, myanmarCulturesData); 

  if (!cultureItem) {
    return (
      <div className={`${styles.pageContainer} ${styles.notFoundContainer}`}>
        <h1 className={styles.notFoundTitle}>Culture Item Not Found</h1>
        <p>Sorry, we couldn't find the cultural information you were looking for.</p>
        <Link href="/cultures" className={styles.notFoundLink}>
          &larr; Back to Cultures
        </Link>
      </div>
    );
  }

  
  const displayDescription = cultureItem.description || "No description available.";

  return (
    <div className={styles.pageContainer}>
      <article>
        <header className={styles.cultureHeader}>
          <h1 className={styles.cultureName}>{cultureItem.name}</h1>
          {/* Add more data */}
        </header>

        {cultureItem.image_url && (
          <div className={styles.cultureImageContainer}>
            <Image
              src={cultureItem.image_url}
              alt={cultureItem.name}
              layout="fill"
              className={styles.cultureImage}
              priority
            />
          </div>
        )}

        <div className={styles.cultureDescription}>
          {/* If description is simple text */}
          <p>{displayDescription.split('\n').map((line, index) => <span key={index}>{line}<br/></span>)}</p>

          {/* If description might be HTML (use with caution) */}
          {/* <div dangerouslySetInnerHTML={{ __html: displayDescription }} /> */}
        </div>
      </article>

      <div className={styles.backLinkContainer}>
        <Link href="/cultures" className={styles.backLink}>
          &larr; Back to All Cultures
        </Link>
      </div>
    </div>
  );
};

export default CultureDetailPage;