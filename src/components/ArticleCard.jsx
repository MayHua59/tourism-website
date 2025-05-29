import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from './ArticleCard.module.css';


const ArticleCard = ({article}) => {
    if(!article){
        return null;
    }
  return (
    <Link href={article.url} passHref>
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
          {article.summary && <p className={styles.articleSummary}>{article.summary}</p>}
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard