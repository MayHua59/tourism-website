import React from 'react';
import HotelDetailPage from '../../../main-components/HotelDetail/HotelDetail';

const Page = ({params}) => {
    const {slug} = params
  return (
    <HotelDetailPage slug={slug}/>
  )
}

export default Page