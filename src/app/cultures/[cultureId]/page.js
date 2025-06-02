import React from 'react';
import CultureDetailPage from '../../../main-components/CultureDetail/CultureDetail';

const Page = ({params}) => {
    const {cultureId} = params
  return (
    <CultureDetailPage cultureId={cultureId}/>
  )
}

export default Page