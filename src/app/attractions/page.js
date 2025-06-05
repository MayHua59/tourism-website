import React from 'react';
import AttractionListPage from '../../main-components/AttractionList/AttractionList';
import Link from 'next/link';

async function getAllAttractions() {
  const baseApiUrl = process.env.EXTERNAL_ATTRACTIONS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
  const apiUrl = `${baseApiUrl}/attractions`; 

  try {
    const res = await fetch(apiUrl, {
      cache: 'no-store', 
    });

    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText} for all attractions at ${apiUrl}`);
      
      throw new Error(`Failed to fetch attractions. Status: ${res.status}`);
    }
    const data = await res.json();
    
    return data.data || data;
  } catch (error) {
    console.error('Error fetching all attractions:', error);
    
    throw error;
  }
}

export async function generateMetadata() {
  return {
    title: 'Attractions in Myanmar | Discover Amazing Sights',
    description: 'Explore a comprehensive list of Myanmar\'s top attractions, from ancient temples and pagodas to stunning natural landscapes and vibrant cultural sites.',
    // openGraph: {
    //   title: 'Attractions in Myanmar',
    //   description: 'Discover amazing sights and landmarks in Myanmar.',
    //   // images: [ ... ], // Add a default image for sharing
    // },
  };
}

const Page = async () => {
  let attractions = [];
  let fetchError = null;

  try {
    attractions = await getAllAttractions();
  } catch (error) {
    console.error("Error in AttractionsPage:", error);
    fetchError = error.message || "An unexpected error occurred while fetching attractions.";
  }

  if (fetchError) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
        <h1>Error Loading Attractions</h1>
        <p>We encountered an issue trying to load the attractions. Please try again later.</p>
        {process.env.NODE_ENV === 'development' && (
          <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error: {fetchError}</i></p>
        )}
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}>
          &larr; Go to Homepage
        </Link>
      </div>
    );
  }

 
  return <AttractionListPage attractions={attractions} />;
};

export default Page;