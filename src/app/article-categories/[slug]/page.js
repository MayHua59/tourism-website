import React from 'react';
import ArticleCategoryDetailPage from '../../../main-components/ArticleCategoryDetail/ArticleCategoryDetail';

const Page = ({params}) => {
    const {slug} = params
  return (
    <ArticleCategoryDetailPage slug={slug}/>
  )
}

export default Page