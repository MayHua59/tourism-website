import React from 'react';
import AttractionCategoryListPage from '../../main-components/AttractionCategoryList/AttractionCategoryList';
import Link from 'next/link';


async function getAllAttractionCategories() {
  const baseApiUrl = process.env.EXTERNAL_ATTRACTION_CATEGORIES_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
  const apiUrl = `${baseApiUrl}/attraction-categories`; 

  try {
    const res = await fetch(apiUrl, {
      cache: 'no-store', 
    });

    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText} for attraction categories at ${apiUrl}`);
      throw new Error(`Failed to fetch attraction categories. Status: ${res.status}`);
    }
    const data = await res.json();
    // Adjust based on your API response structure (e.g., if data is nested)
    return data.data || data;
  } catch (error) {
    console.error('Error fetching all attraction categories:', error);
    throw error; 
  }
}

export async function generateMetadata() {
  return {
    title: 'Attraction Categories | Myanmar Travel Insights',
    description: 'Discover Myanmar\'s diverse attractions by category. Find historical sites, natural wonders, cultural experiences, and more to plan your perfect itinerary.',
    // openGraph: {
    //   title: 'Attraction Categories in Myanmar',
    //   description: 'Explore Myanmar attractions by type.',
    // },
  };
}

const Page = async () => {
  let categories = [];
  let fetchError = null;

  try {
    categories = await getAllAttractionCategories();
  } catch (error) {
    console.error("Error in AttractionCategoriesPage:", error);
    fetchError = error.message || "An unexpected error occurred while fetching attraction categories.";
  }

  if (fetchError) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
        <h1>Error Loading Categories</h1>
        <p>We encountered an issue trying to load the attraction categories. Please try again later.</p>
        {process.env.NODE_ENV === 'development' && (
          <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error: {fetchError}</i></p>
        )}
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}>
          &larr; Go to Homepage
        </Link>
      </div>
    );
  }

  
  return <AttractionCategoryListPage categories={categories} />;
};

export default Page;