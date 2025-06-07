// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './CultureCard.module.css';

// const CultureCard = ({ cultureItem }) => {
//   if (!cultureItem) return null;

//   return (
//     <Link href={cultureItem.url} passHref>
//       <div className={styles.card}>
//         <Image
//           src={cultureItem.image_url}
//           alt={cultureItem.name || 'Myanmar Culture'}
//           layout="fill"
//           objectFit="cover"
//           className={styles.backgroundImage}
//         />
//         <div className={styles.overlay}></div>
//         <div className={styles.cardContent}>
//           {cultureItem.name && <h3 className={styles.cultureName}>{cultureItem.name}</h3>}
//           <p className={styles.cultureDescription}>{cultureItem.description}</p>
//           <span className={styles.exploreLink}>Explore More &rarr;</span>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default CultureCard;