import React from 'react';
import DestinationDetailDisplay from '../../../main-components/DestinationDetail/DestinationDetail';
import Link from 'next/link';

import  destinationsData  from '../../../data/destinations';

// async function getDestinationData(slug) {
//   const baseApiUrl = process.env.EXTERNAL_DESTINATIONS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
//   const apiUrl = `${baseApiUrl}/destinations/${slug}`;

//   try {
//     const res = await fetch(apiUrl, {
//       cache: 'no-store', 
//     });

//     if (!res.ok) {
//       if (res.status === 404) {
//         return null; // Item not found
//       }
//       console.error(`API Error: ${res.status} ${res.statusText} for destination slug ${slug} at ${apiUrl}`);
//       throw new Error(`Failed to fetch destination data. Status: ${res.status}`);
//     }
//     return res.json();
//   } catch (error) {
//     console.error(`Error fetching destination ${slug}:`, error);
//     throw new Error(`Could not fetch destination: ${error.message}`);
//   }
// }

// Optional: generateMetadata for SEO
// export async function generateMetadata({ params }) {
//   const { destinationSlug } = params; // Ensure this matches your folder name [destinationSlug]
//   try {
//     const item = await getDestinationData(destinationSlug);

//     if (!item) {
//       return {
//         title: 'Destination Not Found',
//         description: 'The destination you are looking for does not exist.',
//       };
//     }

//     const title = item.name ? `${item.name} | Myanmar Destinations` : 'Myanmar Destination';
//     const description = item.description // Use short description for meta
//       ? item.description.substring(0, 160)
//       : `Explore ${item.name || 'this destination'} in Myanmar.`;

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
//     console.error("Error generating metadata for destination:", destinationSlug, error);
//     return {
//       title: 'Error',
//       description: 'Could not load destination details.',
//     };
//   }
// }

const Page = async ({ params }) => {
  const { slug } = params; 

  try {
    // const destinationData = await getDestinationData(destinationSlug);

    // const destinationData = destinationsData.filter(d => d.slug === slug)

    // if (!destinationData) {
    //   return (
    //     <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
    //       <h1>Destination Not Found</h1>
    //       <p>{`Sorry, we couldn't find the destination: "${destinationSlug}".`}</p>
    //       <Link href="/destination-categories" style={{ color: '#0070f3', textDecoration: 'underline' }}>
    //         &larr; Back to Destination Categories
    //       </Link>
    //     </div>
    //   );
    // }

    // Pass the fetched data to the presentation component
    // return <h2>{JSON.stringify(destinationData)}</h2>; 
    return <DestinationDetailDisplay slug={slug} />;

  } catch (error) {
    console.error(`Page rendering error for destination ${destinationSlug}:`, error);
    return (
      <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
        <h1>Error Loading Destination</h1>
        <p>There was an issue loading the details for this destination. Please try again later.</p>
        {process.env.NODE_ENV === 'development' && (
          <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error details (dev only): {error.message}</i></p>
        )}
        <Link href="/destination-categories" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          &larr; Back to Destination Categories
        </Link>
      </div>
    );
  }
};

export default Page;
// import React from 'react';
// import DestinationDetailPage from '../../../main-components/DestinationDetail/DestinationDetail';

// const Page = ({params}) => {
//   const { slug } = params;
//   return (
//     <DestinationDetailPage slug={slug}/>
//   )
// }

// export default Page