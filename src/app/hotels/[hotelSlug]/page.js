import React from 'react';
import HotelDetailPage from '../../../main-components/HotelDetail/HotelDetail';

const Page = ({params}) => {
    const {hotelSlug} = params
  return (
    <HotelDetailPage slug={hotelSlug}/>
  )
}

export default Page