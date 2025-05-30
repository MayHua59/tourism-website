import ArticalDetailPage from '@/pages/ArticleDetail/ArticleDetail'
import React from 'react'

const Page = ({params}) => {
  const {articleId} = params
  return (
    <ArticalDetailPage articleId={articleId}/>
  )
}

export default Page