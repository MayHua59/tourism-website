import React from 'react';
import ArticleCategoryDetailPage from '../../../main-components/ArticleCategoryDetail/ArticleCategoryDetail';

const Page = ({params}) => {
    const {categorySlug} = params
  return (
    <ArticleCategoryDetailPage slug={categorySlug}/>
  )
}

export default Page