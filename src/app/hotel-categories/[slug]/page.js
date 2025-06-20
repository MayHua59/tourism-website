// import React from 'react';
// import DestinationCategoryDetailPage from '../../../main-components/DestinationCategoryDetail/DestinationCategoryDetail';
// import Link from 'next/link';


// async function getDestinationCategoryData(slug) {
//   const baseApiUrl = process.env.EXTERNAL_DESTINATION_CATEGORIES_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
  
//   const apiUrl = `${baseApiUrl}/destination-categories/${slug}`;

//   try {
//     const res = await fetch(apiUrl, {
//       cache: 'no-store', 
//     });

//     if (!res.ok) {
//       if (res.status === 404) {
//         return null; // Category not found
//       }
//       console.error(`API Error: ${res.status} ${res.statusText} for destination category slug ${slug} at ${apiUrl}`);
//       throw new Error(`Failed to fetch destination category data. Status: ${res.status}`);
//     }
    
//     return res.json();
//   } catch (error) {
//     console.error(`Error fetching destination category ${slug}:`, error);
//     throw new Error(`Could not fetch destination category: ${error.message}`);
//   }
// }

// // Optional: generateMetadata for SEO
// export async function generateMetadata({ params }) {
//   const { categorySlug } = params;
//   try {
//     const category = await getDestinationCategoryData(categorySlug);

//     if (!category) {
//       return {
//         title: 'Destination Category Not Found',
//         description: 'The destination category you are looking for does not exist.',
//       };
//     }

//     const title = category.name ? `${category.name} | Myanmar Destinations` : 'Myanmar Destination Category';
//     const description = category.description
//       ? category.description.substring(0, 160)
//       : `Explore ${category.name || 'this destination category'} in Myanmar.`;

//     return {
//       title: title,
//       description: description,
//       // openGraph: {
//       //   title: title,
//       //   description: description,
//       //   images: category.image_url ? [{ url: category.image_url }] : [],
//       // },
//     };
//   } catch (error) {
//     console.error("Error generating metadata for destination category:", categorySlug, error);
//     return {
//       title: 'Error',
//       description: 'Could not load destination category details.',
//     };
//   }
// }

// const Page = async ({ params }) => {
//   const { categorySlug } = params; 

//   try {
//     const categoryData = await getDestinationCategoryData(categorySlug);

//     if (!categoryData) {
//       return (
//         <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
//           <h1>Destination Category Not Found</h1>
//           <p>{`Sorry, we couldn't find the destination category: "${categorySlug}".`}</p>
//           <Link href="/destination-categories" style={{ color: '#0070f3', textDecoration: 'underline' }}>
//             &larr; Back to All Destination Categories
//           </Link>
//         </div>
//       );
//     }

    
//     return <DestinationCategoryDetailPage categoryData={categoryData} />;

//   } catch (error) {
//     console.error(`Page rendering error for destination category ${categorySlug}:`, error);
//     return (
//       <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
//         <h1>Error Loading Destination Category</h1>
//         <p>There was an issue loading the details for this destination category. Please try again later.</p>
//         {process.env.NODE_ENV === 'development' && (
//           <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error details (dev only): {error.message}</i></p>
//         )}
//         <Link href="/destination-categories" style={{ color: '#0070f3', textDecoration: 'underline' }}>
//           &larr; Back to All Destination Categories
//         </Link>
//       </div>
//     );
//   }
// };

// export default Page;


import React from 'react';
import DestinationCategoryDetailPage from '../../../main-components/DestinationCategoryDetail/DestinationCategoryDetail';


const Page = ({params}) => {
  const {slug} = params
  return (
    <DestinationCategoryDetailPage slug={slug}/>
  )
}

export default Page