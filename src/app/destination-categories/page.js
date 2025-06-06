// import React from 'react';
// import DestinationCategoryListPage from '../../main-components/DestinationCategoryList/DestinationCategoryList';
// import Link from 'next/link';

// async function getAllDestinationCategories() {
//   const baseApiUrl = process.env.EXTERNAL_DESTINATION_CATEGORIES_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
//   const apiUrl = `${baseApiUrl}/destination-categories`;

//   try {
//     const res = await fetch(apiUrl, {
//       cache: 'no-store', 
//     });

//     if (!res.ok) {
//       console.error(`API Error: ${res.status} ${res.statusText} for destination categories at ${apiUrl}`);
//       return []; 
//     }
//     const data = await res.json();
    
//     return data.data || data;
//   } catch (error) {
//     console.error('Error fetching all destination categories:', error);
//     return []; 
//   }
// }

// export async function generateMetadata() {
//   return {
//     title: 'Destination Categories | Explore Myanmar by Type',
//     description: 'Browse Myanmar destinations by category, such as beaches, mountains, historical sites, and cultural experiences. Find your perfect trip!',
//     // openGraph: {
//     //   title: 'Destination Categories in Myanmar',
//     //   description: 'Explore Myanmar destinations by category.',
//     // },
//   };
// }

// const Page = async () => {
//   let categories = [];
//   let fetchError = null;

//   try {
//     categories = await getAllDestinationCategories();
//   } catch (error) {
//     console.error("Error in DestinationCategoriesPage:", error);
//     fetchError = error.message || "An unexpected error occurred while fetching destination categories.";
//   }

//   if (fetchError) {
//     return (
//       <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
//         <h1>Error Loading Categories</h1>
//         <p>We encountered an issue trying to load the destination categories. Please try again later.</p>
//         {process.env.NODE_ENV === 'development' && (
//           <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error: {fetchError}</i></p>
//         )}
//         <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}>
//           &larr; Go to Homepage
//         </Link>
//       </div>
//     );
//   }

 
//   return <DestinationCategoryListPage categories={categories} />;
// };

// export default Page;
import React from 'react';
import DestinationCategoryListPage from '../../main-components/DestinationCategoryList/DestinationCategoryList';
import { destination_categories } from '../../data/destination-categories';

const Page = () => {
  return (
    <DestinationCategoryListPage categories={destination_categories}/>
  )
}

export default Page