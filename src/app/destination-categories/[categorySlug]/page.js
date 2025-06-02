import React from 'react'
import DestinationCategoryDetailPage from '../../../main-components/DestinationCategoryDetail/DestinationCategoryDetail'

const Page = ({params}) => {
    const {categorySlug} = params
  return (
    <DestinationCategoryDetailPage categorySlug={categorySlug}/>
  )
}

export default Page