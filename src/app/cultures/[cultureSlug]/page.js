// import React from 'react';
// import CultureDetailPage from '../../../main-components/CultureDetail/CultureDetail'; // Updated component name
// import Link from 'next/link';

// // Function to fetch data for a specific culture item
// async function getCultureItemData(slug) {
//   // Use an environment variable for the base API URL
//   const baseApiUrl = process.env.EXTERNAL_CULTURE_ITEMS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
//   // Adjust the endpoint if necessary, e.g., /culture_items/ or /culture-items/
//   const apiUrl = `${baseApiUrl}/cultures/${slug}`;

//   try {
//     const res = await fetch(apiUrl, {
//       cache: 'no-store', // Or your preferred caching strategy
//     });

//     if (!res.ok) {
//       if (res.status === 404) {
//         return null; // Item not found
//       }
//       console.error(`API Error: ${res.status} ${res.statusText} for culture item slug ${slug} at ${apiUrl}`);
//       throw new Error(`Failed to fetch culture item data. Status: ${res.status}`);
//     }
//     return res.json();
//   } catch (error) {
//     console.error(`Error fetching culture item ${slug}:`, error);
//     throw new Error(`Could not fetch culture item: ${error.message}`);
//   }
// }

// // Optional: generateMetadata for SEO
// export async function generateMetadata({ params }) {
//   const { itemSlug } = params; // Ensure this matches your folder name [itemSlug]
//   try {
//     const item = await getCultureItemData(itemSlug);

//     if (!item) {
//       return {
//         title: 'Culture Item Not Found',
//         description: 'The culture item you are looking for does not exist.',
//       };
//     }

//     const title = item.name ? `${item.name} | Myanmar Culture` : 'Myanmar Culture Item';
//     const description = item.description // Use short description for meta
//       ? item.description.substring(0, 160)
//       : `Learn about ${item.name || 'this cultural item'} in Myanmar.`;

//     return {
//       title: title,
//       description: description,
//       // openGraph: {
//       //   title: title,
//       //   description: description,
//       //   images: item.image_url ? [{ url: item.image_url }] : [],
//       // },
//     };
//   } catch (error) {
//     console.error("Error generating metadata for culture item:", itemSlug, error);
//     return {
//       title: 'Error',
//       description: 'Could not load culture item details.',
//     };
//   }
// }

// const Page = async ({ params }) => {
//   const { itemSlug } = params; // Ensure your folder is named [itemSlug]

//   try {
//     const cultureItemData = await getCultureItemData(itemSlug);

//     if (!cultureItemData) {
//       return (
//         <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
//           <h1>Culture Item Not Found</h1>
//           <p>{`Sorry, we couldn't find the culture item: "${itemSlug}".`}</p>
//           <Link href="/culture-categories" style={{ color: '#0070f3', textDecoration: 'underline' }}>
//             &larr; Back to Culture Categories
//           </Link>
//         </div>
//       );
//     }

//     // Pass the fetched data to the presentation component
//     return <CultureDetailPage cultureItemData={cultureItemData} />;

//   } catch (error) {
//     console.error(`Page rendering error for culture item ${itemSlug}:`, error);
//     return (
//       <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
//         <h1>Error Loading Culture Item</h1>
//         <p>There was an issue loading the details for this culture item. Please try again later.</p>
//         {process.env.NODE_ENV === 'development' && (
//           <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error details (dev only): {error.message}</i></p>
//         )}
//         <Link href="/culture-categories" style={{ color: '#0070f3', textDecoration: 'underline' }}>
//           &larr; Back to Culture Categories
//         </Link>
//       </div>
//     );
//   }
// };

// export default Page;
// ******* end Section with API ******//
// *** start Section with Static Data *****//
import React from 'react';
import  myanmarCulturesData  from '../../../data/cultures';
import CultureDetail from '../../../main-components/CultureDetail/CultureDetail'; 
import  citiesData  from '../../../data/cities';
import  townshipsData  from '../../../data/townships';
import  villagesData  from '../../../data/villages';
const Page = ({ params }) => {
  const { cultureSlug } = params;
  const culture = myanmarCulturesData.find((culture) => culture.slug === cultureSlug);

  if (!culture) {
    return <div>Culture not found</div>; 
  }

  return (
     <CultureDetail
      culture={culture}
      cities={citiesData}
      townships={townshipsData}
      villages={villagesData}
    />
  );
};

export default Page;
// *** end Section with Static Data *****//
