// import React from 'react';
// import Link from 'next/link';
// import CultureCategoryListPage from '@/main-components/CultureCategoryList/CultureCategoryList';

// // async function getAllEventCategories() {
// //   const baseApiUrl = process.env.EXTERNAL_EVENT_CATEGORIES_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
// //   const apiUrl = `${baseApiUrl}/event-categories`; 

// //   try {
// //     const res = await fetch(apiUrl, {
// //       cache: 'no-store', 
// //     });

// //     if (!res.ok) {
// //       console.error(`API Error: ${res.status} ${res.statusText} for event categories at ${apiUrl}`);
// //       throw new Error(`Failed to fetch event categories. Status: ${res.status}`);
// //     }
// //     const data = await res.json();
    
// //     return data.data || data;
// //   } catch (error) {
// //     console.error('Error fetching all event categories:', error);
// //     throw error; 
// //   }
// // }

// // export async function generateMetadata() {
// //   return {
// //     title: 'Event Categories | Explore Myanmar Events',
// //     description: 'Browse events in Myanmar by category. Find festivals, concerts, sports events, and more.',
//     // openGraph: {
//     //   title: 'Event Categories in Myanmar',
//     //   description: 'Explore events by category.',
//     // },
//   // };
// // }

// // const Page = async () => {
// //   let categories = [];
// //   let fetchError = null;

// //   try {
// //     categories = await getAllEventCategories();
// //   } catch (error) {
// //     console.error("Error in EventCategoriesPage:", error);
// //     fetchError = error.message || "An unexpected error occurred while fetching event categories.";
// //   }

// //   if (fetchError) {
// //     return (
// //       <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
// //         <h1>Error Loading Event Categories</h1>
// //         <p>We encountered an issue trying to load the event categories. Please try again later.</p>
// //         {process.env.NODE_ENV === 'development' && (
// //           <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error: {fetchError}</i></p>
// //         )}
// //         <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}>
// //           &larr; Go to Homepage
// //         </Link>
// //       </div>
// //     );
// //   }

//   return <CultureCategoryListPage categories={categories} />;
// };

import React from 'react';
import CultureCategoryListPage from '../../main-components/CultureCategoryList/CultureCategoryList';

const Page = () => {
  return (
    <CultureCategoryListPage/>
  )
}

export default Page