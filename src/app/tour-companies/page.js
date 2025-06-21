


// ***** start with Static data ********//
// src/app/cultures/page.js
import React from 'react';
import TourCompanyList from '@/main-components/TourCompanyList/TourCompanyList';
import tourCompaniesData from '@/data/tour-companies';

export async function generateMetadata() {
  return {
    title: 'Myanmar Cultures | Explore Myanmar\'s Heritage',
    description: 'Discover the rich and diverse cultures of Myanmar. Learn about traditions, festivals, and more.',
  };
}

const Page = () => {
  return (
    <TourCompanyList
      tourCompanies={tourCompaniesData}
    />
  );
};

export default Page;
// ***** end with Static data ********//