import React from 'react';
import CultureCategoryList from '../../main-components/CultureCategoryList/CultureCategoryList';
import Link from 'next/link';


async function getAllCultureCategories() {
  const baseApiUrl = process.env.EXTERNAL_CULTURE_CATEGORIES_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
  const apiUrl = `${baseApiUrl}/culture-categories`; 

  try {
    const res = await fetch(apiUrl, {
      cache: 'no-store', 
    });

    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText} for culture categories at ${apiUrl}`);
      throw new Error(`Failed to fetch culture categories. Status: ${res.status}`);
    }
    const data = await res.json();
    // Adjust based on your API response structure (e.g., if data is nested)
    return data.data || data;
  } catch (error) {
    console.error('Error fetching all culture categories:', error);
    throw error; 
  }
}

export async function generateMetadata() {
  return {
    title: 'Culture Categories | Explore Myanmar\'s Traditions',
    description: 'Browse Myanmar\'s cultural experiences by category. Discover festivals, historical sites, arts, and more.',
    // openGraph: {
    //   title: 'Culture Categories in Myanmar',
    //   description: 'Explore Myanmar\'s culture by category.',
    // },
  };
}

const Page = async () => {
  let categories = [];
  let fetchError = null;

  try {
    categories = await getAllCultureCategories();
  } catch (error) {
    console.error("Error in CultureCategoriesPage:", error);
    fetchError = error.message || "An unexpected error occurred while fetching culture categories.";
  }

  if (fetchError) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
        <h1>Error Loading Culture Categories</h1>
        <p>We encountered an issue trying to load the culture categories. Please try again later.</p>
        {process.env.NODE_ENV === 'development' && (
          <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error: {fetchError}</i></p>
        )}
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}>
          &larr; Go to Homepage
        </Link>
      </div>
    );
  }

  
  return <CultureCategoryList categories={categories} />;
};

export default Page;