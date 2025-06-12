import React from 'react';
import ArticleDetailPage from '../../../main-components/ArticleDetail/ArticleDetail';
import  articlesData  from '../../../data/articles';

// export async function generateMetadata({ params, searchParams }, parent) {
//   // read route params
//   const slug = params.slug
 
//   // fetch data
//   const article = articlesData.find((article) => article.slug === slug);
 
//   // optionally access and extend (rather than replace) previously set metadata
//   const previousImages = (await parent).openGraph?.images || []
 
//   return {
//     title: article.name,
//     openGraph: {
//       images: ['/some-specific-shared-image.jpg', ...previousImages],
//     },
//   }
// }

const Page = async ({ params }) => {
  const  { slug }  =  params;
 

  return (
    <ArticleDetailPage slug={slug} />
  );
};

export default Page;