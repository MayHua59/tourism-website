import  articlesData  from '../../data/homepage-data/articles'; 
import ArticleCard from '../Cards/ArticleCard/ArticleCard';
import styles from './ArticleSection.module.css';
import Link from 'next/link';

import React from 'react'

const ArticleSection = () => {
    if(!articlesData || articlesData.length === 0){
        return null; 
    }
  return (
     <section className={`${styles.articlesSectionContainer} container`}>
      <h2 className={styles.sectionTitle}>Travel Inspiration & Articles</h2>
      <div className={styles.articlesGrid}>
        {articlesData.map((article) => (
          <ArticleCard key={article.id || article.title} article={article} />
        ))}
      </div>
      
       <div className={styles.viewAllContainer}>
        <Link href="/articles" className={styles.viewAllButton}>
          View All Articles
        </Link>
      </div>
    </section>
  )
}

export default ArticleSection