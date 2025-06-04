import React from 'react';
import AttractionDetailPage from '../../../main-components/AttractionDetail/AttractionDetail';
import Link from 'next/link';


async function getAttractionData(slug) {
  
  const baseApiUrl = process.env.EXTERNAL_ATTRACTIONS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
  
  const apiUrl = `${baseApiUrl}/attractions/${slug}`;

  try {
    const res = await fetch(apiUrl, {
      cache: 'no-store', 
    });

    if (!res.ok) {
      if (res.status === 404) {
        return null; // Item not found
      }
      console.error(`API Error: ${res.status} ${res.statusText} for attraction slug ${slug} at ${apiUrl}`);
      throw new Error(`Failed to fetch attraction data. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error(`Error fetching attraction ${slug}:`, error);
    throw new Error(`Could not fetch attraction: ${error.message}`);
  }
}

// Optional: generateMetadata for SEO
export async function generateMetadata({ params }) {
  const { attractionSlug } = params; 
  try {
    const item = await getAttractionData(attractionSlug);

    if (!item) {
      return {
        title: 'Attraction Not Found',
        description: 'The attraction you are looking for does not exist.',
      };
    }

    const title = item.name ? `${item.name} | Myanmar Attractions` : 'Myanmar Attraction';
    const description = item.description // Use short description for meta
      ? item.description.substring(0, 160)
      : `Discover ${item.name || 'this attraction'} in Myanmar.`;

    return {
      title: title,
      description: description,
      // openGraph: {
      //   title: title,
      //   description: description,
      //   images: item.image_url ? [{ url: item.image_url }] : [],
      // },
    };
  } catch (error) {
    console.error("Error generating metadata for attraction:", attractionSlug, error);
    return {
      title: 'Error',
      description: 'Could not load attraction details.',
    };
  }
}

const Page = async ({ params }) => {
  const { attractionSlug } = params; 

  try {
    const attractionData = await getAttractionData(attractionSlug);

    if (!attractionData) {
      return (
        <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
          <h1>Attraction Not Found</h1>
          <p>{`Sorry, we couldn't find the attraction: "${attractionSlug}".`}</p>
          <Link href="/attraction-categories" style={{ color: '#0070f3', textDecoration: 'underline' }}>
            &larr; Back to Attraction Categories
          </Link>
        </div>
      );
    }

    
    return <AttractionDetailPage attractionData={attractionData} />;

  } catch (error) {
    console.error(`Page rendering error for attraction ${attractionSlug}:`, error);
    return (
      <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
        <h1>Error Loading Attraction</h1>
        <p>There was an issue loading the details for this attraction. Please try again later.</p>
        {process.env.NODE_ENV === 'development' && (
          <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error details (dev only): {error.message}</i></p>
        )}
        <Link href="/attraction-categories" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          &larr; Back to Attraction Categories
        </Link>
      </div>
    );
  }
};

export default Page;