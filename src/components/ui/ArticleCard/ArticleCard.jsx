// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './ArticleCard.module.css'; 

// const ArticleCard = ({ article }) => {
//   if (!article) return null;

//   return (
//     <Link href={`/articles/${article.id}`} passHref>
//       <div className={styles.card}>
//         <div className={styles.imageContainer}>
//           <Image
//             src={article.image_url || '/bagan.jpg'}
//             alt={article.title}
//             layout="fill"
//             objectFit="cover"
//             className={styles.image}
//           />
//         </div>
//         <div className={styles.content}>
//           <h3 className={styles.title}>{article.title}</h3>
//           <p className={styles.summary}>{article.summary}</p>
//           {/*  related cities */}
//           {/* {article.relatedCities && article.relatedCities.length > 0 && (
//             <div className={styles.tags}>
//               {article.relatedCities.map(city => (
//                 <span key={city} className={styles.tag}>{city}</span>
//               ))}
//             </div>
//           )} */}
//           <span className={styles.readMore}>Read More &rarr;</span>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ArticleCard;

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ArticleCard.module.css'; 

const ArticleCard = ({ article }) => {
  return (
    <Link href={`/articles/${article.slug}`} className={styles.articleCardLink}>
      <div className={styles.articleCard}>
        {article.image_url && (
          <div className={styles.articleImageWrapper}>
            <Image
              src={article.image_url}
              alt={article.name}
              layout="fill"
              objectFit="cover"
              className={styles.articleImage}
            />
          </div>
        )}
        <div className={styles.articleContent}>
          <h2 className={styles.articleTitle}>{article.name}</h2>
          <p className={styles.articleDescription}>
            {article.description.substring(0, 100)}...
          </p>
          <p className={styles.readMore}>Read More</p>
        </div>
        
      </div>
    </Link>
  );
};

export default ArticleCard;