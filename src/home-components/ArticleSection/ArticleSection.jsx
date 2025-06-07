import { articlesData } from '../../data/articles'; 
import ArticleCard from '../Cards/ArticleCard/ArticleCard';
import styles from './ArticleSection.module.css';

import React from 'react'

const ArticleSection = () => {
    if(!articlesData || articlesData.length === 0){
        return null; //to give message for having no articles
    }
  return (
     <section className={`${styles.articlesSectionContainer} container`}>
      <h2 className={styles.sectionTitle}>Travel Inspiration & Articles</h2>
      <div className={styles.articlesGrid}>
        {/* {articlesData.map((article) => (
          <ArticleCard key={article.id || article.title} article={article} />
        ))} */}
      </div>
      
       {/* <div className={styles.viewAllContainer}>
        <Link href="/articles" className={styles.viewAllButton}>
          View All Articles
        </Link>
      </div> */}
    </section>
  )
}

export default ArticleSection