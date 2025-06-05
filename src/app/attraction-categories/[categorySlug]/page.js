import React from 'react';
import AttractionCategoryDetailPage from '../../../main-components/AttractionCategoryDetail/AttractionCategoryDetail';
import Link from 'next/link';


async function getAttractionCategoryData(slug) {
  const baseApiUrl = process.env.EXTERNAL_ATTRACTION_CATEGORIES_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
 
  const apiUrl = `${baseApiUrl}/attraction-categories/${slug}`;

  try {
    const res = await fetch(apiUrl, {
      cache: 'no-store', 
    });

    if (!res.ok) {
      if (res.status === 404) {
        return null; // Category not found
      }
      console.error(`API Error: ${res.status} ${res.statusText} for attraction category slug ${slug} at ${apiUrl}`);
      throw new Error(`Failed to fetch attraction category data. Status: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error(`Error fetching attraction category ${slug}:`, error);
    throw new Error(`Could not fetch attraction category: ${error.message}`);
  }
}

// Optional: generateMetadata for SEO
export async function generateMetadata({ params }) {
  const { categorySlug } = params;
  try {
    const category = await getAttractionCategoryData(categorySlug);

    if (!category) {
      return {
        title: 'Attraction Category Not Found',
        description: 'The attraction category you are looking for does not exist.',
      };
    }

    const title = category.name ? `${category.name} | Myanmar Attractions` : 'Myanmar Attraction Category';
    const description = category.description
      ? category.description.substring(0, 160)
      : `Discover ${category.name || 'this attraction category'} in Myanmar.`;

    return {
      title: title,
      description: description,
      // openGraph: {
      //   title: title,
      //   description: description,
      //   images: category.image_url ? [{ url: category.image_url }] : [],
      // },
    };
  } catch (error) {
    console.error("Error generating metadata for attraction category:", categorySlug, error);
    return {
      title: 'Error',
      description: 'Could not load attraction category details.',
    };
  }
}

const Page = async ({ params }) => {
  const { categorySlug } = params; 

  try {
    const categoryData = await getAttractionCategoryData(categorySlug);

    if (!categoryData) {
      return (
        <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
          <h1>Attraction Category Not Found</h1>
          <p>{`Sorry, we couldn't find the attraction category: "${categorySlug}".`}</p>
          <Link href="/attraction-categories" style={{ color: '#0070f3', textDecoration: 'underline' }}>
            &larr; Back to All Attraction Categories
          </Link>
        </div>
      );
    }

   
    return <AttractionCategoryDetailPage categoryData={categoryData} />;

  } catch (error) {
    console.error(`Page rendering error for attraction category ${categorySlug}:`, error);
    return (
      <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
        <h1>Error Loading Attraction Category</h1>
        <p>There was an issue loading the details for this attraction category. Please try again later.</p>
        {process.env.NODE_ENV === 'development' && (
          <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error details (dev only): {error.message}</i></p>
        )}
        <Link href="/attraction-categories" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          &larr; Back to All Attraction Categories
        </Link>
      </div>
    );
  }
};

export default Page;