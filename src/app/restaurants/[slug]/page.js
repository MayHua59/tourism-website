import React from 'react';
import RestaurantDetailPage from '../../../main-components/RestaurantDetail/RestaurantDetail';

const Page = ({params}) => {
    const {slug} = params
  return (
    <RestaurantDetailPage slug={slug}/>
  )
}

export default Page