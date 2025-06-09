import React from 'react';
import RestaurantDetailPage from '../../../main-components/RestaurantDetail/RestaurantDetail';

const Page = ({params}) => {
    const {restaurantSlug} = params
  return (
    <RestaurantDetailPage slug={restaurantSlug}/>
  )
}

export default Page