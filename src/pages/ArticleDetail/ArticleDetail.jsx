// import { getArticleById } from '@/utils/getItem'; 
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from './ArticleDetail.module.css'; 
// import  {articlesData as articles}  from '@/data/articles';



// const ArticleDetailPage = ({articleId}) => {
//     const article = getArticleById(articleId, articles);
//      if (!article) {
//     return (
//       <div className={`${styles.pageContainer} ${styles.notFoundContainer}`}>
//         <h1 className={styles.notFoundTitle}>Article Not Found</h1>
//         <p>Sorry, we couldn't find the article you were looking for.</p>
//         <Link href="/articles" className={styles.notFoundLink}>
//           &larr; Back to Articles
//         </Link>
//       </div>
//     );
//   }
//   const displayContent = article.content || article.summary || "No content available for this article.";
//   return (
//     <div className={styles.pageContainer}>
//       <article>
//         <header className={styles.articleHeader}>
//           <h1 className={styles.articleTitle}>{article.title}</h1>
//           {/* For more data*/}
//           {/* <div className={styles.articleMeta}>
//             <span>Published on: {new Date(article.date).toLocaleDateString()}</span>
//             {article.author && <span>By: {article.author}</span>}
//           </div> */}
//         </header>

//         {article.image_url && (
//           <div className={styles.articleImageContainer}>
//             <Image
//               src={article.image_url}
//               alt={article.title}
//               layout="fill"
//               className={styles.articleImage}
//               priority 
//             />
//           </div>
//         )}

       
//         {typeof displayContent === 'string' && article.content ? (
//            <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: displayContent }} />
//         ) : (
          
//           <div className={styles.articleContent}>
//             <p>{displayContent}</p>
//           </div>
//         )}

//       </article>

//       <div className={styles.backLinkContainer}>
//         <Link href="/articles" className={styles.backLink}>
//           &larr; Back to All Articles
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default ArticleDetailPage