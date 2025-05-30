import React from 'react';
import RegionDetailPage from '@/main-components/RegionDetail/RegionDetailPage';

const Page = ({params}) => {
    const {regionId} = params;
  return (
    <RegionDetailPage regionId={regionId}/>
  )
}

export default Page