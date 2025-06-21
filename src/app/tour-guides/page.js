// ***** start with Static data ********//
// src/app/cultures/page.js
import React from 'react';
import TourGuideList from '@/main-components/TourGuideList/TourGuideList';
import tourGuidesData from '@/data/tour-guides';

export async function generateMetadata() {
  return {
    title: 'Tour Guide | Explore Myanmar\'s Tour Guides',
    description: 'Discover the rich and diverse cultures of Myanmar. Learn about traditions, festivals, and more.',
  };
}

const Page = () => {
  return (
    <TourGuideList
      tourGuideList={tourGuidesData}
    />
  );
};

export default Page;
// ***** end with Static data ********//