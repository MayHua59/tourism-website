import React from 'react';
import ArticleCategoryList from '../../main-components/ArticleCategoryList/ArticleCategoryList';
import { articleCategoriesData } from '../../data/article-categories'; 




export async function generateMetadata() {
  return {
    title: 'Article Categories | Myanmar Travel Blog',
    description: 'Browse articles by category to find travel inspiration, guides, and stories about Myanmar.',
    // openGraph: {
    //   title: 'Article Categories | Myanmar Travel Blog',
    //   description: 'Browse articles by category.',
    //   // images: [ ... ],
    // },
  };
}

const Page = async () => {



  return <ArticleCategoryList categories={articleCategoriesData} />;
};

export default Page;