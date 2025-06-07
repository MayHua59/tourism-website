import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './ArticleCard.module.css';


const ArticleCard = ({article}) => {
    if(!article){
        return null;
    }
    const shortDescription = article.description.split(' ').slice(0, 10).join(' ') + (article.description.split(' ').length > 10 ? '...' : '');
  return (
    <Link href={`/articles/${article.slug}`} passHref>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={article.image_url}
            alt={article.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.articleTitle}>{article.title}</h3>
          {article.description && <p className={styles.articleSummary}>{shortDescription}</p>}
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard