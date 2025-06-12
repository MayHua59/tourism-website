// import React from 'react';
// import EventCategoryDetailPage from '../../../main-components/EventCategoryDetail/EventCategoryDetail';
// import Link from 'next/link';
// // import { event_categories } from '@/data/event-categories';
// // import { getEventCategoryBySlug } from '@/utils/getItem';

// // export async function generateStaticParams() {
// //   if (!Array.isArray(event_categories)) {
// //     return [];
// //   }
// //   return event_categories.map(category => ({
// //     categorySlug: category.slug,
// //   }));
// // }

// // export async function generateMetadata({ params }) {
// //   const { categorySlug } = params;
// //   const category = getEventCategoryBySlug(categorySlug, event_categories);

// //   if (!category) {
// //     return {
// //       title: 'Event Category Not Found',
// //       description: 'The event category you are looking for does not exist.',
// //     };
// //   }

// //   return {
// //     title: `${category.name} | Myanmar Event Categories`,
// //     description: category.description || `Explore events in the ${category.name} category in Myanmar.`,
// //   };
// // }
// // Function to fetch data for a specific event category
// async function getEventCategoryData(slug) {
//   try {
    
//     const apiUrl = `https://hotel.software100.com.mm/api/v1/event_categories/${slug}`;
//     const res = await fetch(apiUrl, {
//       cache: 'no-store', 
//     });

//     if (!res.ok) {
//       if (res.status === 404) {
//         return null; 
//       }
//       // Log the error for server-side debugging
//       console.error(`API Error: ${res.status} ${res.statusText} for slug ${slug} at ${apiUrl}`);
//       // For other errors, you might want to throw or return a specific error object
//       throw new Error(`Failed to fetch event category data. Status: ${res.status}`);
//     }
//     return res.json();
//   } catch (error) {
//     console.error(`Error fetching event category ${slug}:`, error);
//     // In case of a network error or other issues during fetch
//     throw new Error(`Could not fetch event category: ${error.message}`);
//   }
// }

// const Page = async ({ params }) => {
//   const { slug } =  params; 

//   try {
//     const categoryData = await getEventCategoryData(slug);

//     if (!categoryData) {
//       // This is the case where the API returned a 404 or getEventCategoryData returned null
//       return (
//         <div style={{ textAlign: 'center', padding: '40px' }}>
//           <h1>Event Category Not Found</h1>
//           <p>{`Sorry, we couldn't find the event category: "${slug}".`}</p>
//           <Link href="/event-categories" style={{ color: 'blue', textDecoration: 'underline' }}>
//             &larr; Back to All Event Categories
//           </Link>
//         </div>
//       );
//     }

    
//     return <EventCategoryDetailPage categoryData={categoryData} />;

//   } catch (error) {
    
//     console.error(`Page rendering error for event category ${slug}:`, error);
//     return (
//       <div style={{ textAlign: 'center', padding: '40px' }}>
//         <h1>Error Loading Event Category</h1>
//         <p>There was an issue loading the details for this event category. Please try again later.</p>
//         <p><i>Details: {error.message}</i></p>
//         <Link href="/event-categories" style={{ color: 'blue', textDecoration: 'underline' }}>
//           &larr; Back to All Event Categories
//         </Link>
//       </div>
//     );
//   }
// };

// export default Page;
import React from 'react';
import EventCategoryDetailPage from '../../../main-components/EventCategoryDetail/EventCategoryDetail';

const Page = ({params}) => {
  const {slug} = params
  return (
    <EventCategoryDetailPage slug={slug}/>
  )
}

export default Page