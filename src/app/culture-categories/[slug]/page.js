// import React from 'react';
// import CultureCategoryDetailPage from '../../../main-components/CultureCategoryDetail/CultureCategoryDetail';
// import Link from 'next/link';


// async function getCultureCategoryData(slug) {
  
//   const baseApiUrl = process.env.EXTERNAL_CULTURE_CATEGORIES_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
  
//   const apiUrl = `${baseApiUrl}/culture-categories/${slug}`;

//   try {
//     const res = await fetch(apiUrl, {
//       cache: 'no-store', //preferred catching
//     });

//     if (!res.ok) {
//       if (res.status === 404) {
//         return null; // Category not found
//       }
//       console.error(`API Error: ${res.status} ${res.statusText} for culture category slug ${slug} at ${apiUrl}`);
//       throw new Error(`Failed to fetch culture category data. Status: ${res.status}`);
//     }
    
//     return res.json();
//   } catch (error) {
//     console.error(`Error fetching culture category ${slug}:`, error);
//     throw new Error(`Could not fetch culture category: ${error.message}`);
//   }
// }

// // Optional: generateMetadata for SEO
// export async function generateMetadata({ params }) {
//   const { categorySlug } = params;
//   try {
//     const category = await getCultureCategoryData(categorySlug);

//     if (!category) {
//       return {
//         title: 'Culture Category Not Found',
//         description: 'The culture category you are looking for does not exist.',
//       };
//     }

//     const title = category.name ? `${category.name} | Myanmar Culture` : 'Myanmar Culture Category';
//     const description = category.description
//       ? category.description.substring(0, 160)
//       : `Explore ${category.name || 'this culture category'} in Myanmar.`;

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
//     console.error("Error generating metadata for culture category:", categorySlug, error);
//     return {
//       title: 'Error',
//       description: 'Could not load culture category details.',
//     };
//   }
// }

// const Page = async ({ params }) => {
//   const { categorySlug } = params; 

//   try {
//     const categoryData = await getCultureCategoryData(categorySlug);

//     if (!categoryData) {
//       return (
//         <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
//           <h1>Culture Category Not Found</h1>
//           <p>{`Sorry, we couldn't find the culture category: "${categorySlug}".`}</p>
//           <Link href="/culture-categories" style={{ color: '#0070f3', textDecoration: 'underline' }}>
//             &larr; Back to All Culture Categories
//           </Link>
//         </div>
//       );
//     }

   
//     return <CultureCategoryDetailPage categoryData={categoryData} />;

//   } catch (error) {
//     console.error(`Page rendering error for culture category ${categorySlug}:`, error);
//     return (
//       <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
//         <h1>Error Loading Culture Category</h1>
//         <p>There was an issue loading the details for this culture category. Please try again later.</p>
//         {process.env.NODE_ENV === 'development' && (
//           <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error details (dev only): {error.message}</i></p>
//         )}
//         <Link href="/culture-categories" style={{ color: '#0070f3', textDecoration: 'underline' }}>
//           &larr; Back to All Culture Categories
//         </Link>
//       </div>
//     );
//   }
// };

// export default Page;
import React from 'react';
import CultureCategoryDetailPage from '../../../main-components/CultureCategoryDetail/CultureCategoryDetail';

const Page = ({params}) => {
  const {slug} = params
  return (
    <CultureCategoryDetailPage slug={slug}/>
  )
}

export default Page