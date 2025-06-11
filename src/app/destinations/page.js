// import React from 'react';
// import DestinationListPage from '../../main-components/DestinationList/DestinationList';
// import Link from 'next/link'; // For fallback messages

// // Function to fetch all destinations from the API
// async function getAllDestinations() {
//   const baseApiUrl = process.env.EXTERNAL_DESTINATIONS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
//   const apiUrl = `${baseApiUrl}/destinations`; 

//   try {
//     const res = await fetch(apiUrl, {
//       cache: 'no-store',
//     });

//     if (!res.ok) {
//       console.error(`API Error: ${res.status} ${res.statusText} for all destinations at ${apiUrl}`);
//       // You could throw an error here to be caught by the Page component's try-catch
//       // or return a specific error indicator. For simplicity, returning empty array.
//       return []; // Or throw new Error(`Failed to fetch destinations. Status: ${res.status}`);
//     }
//     const data = await res.json();
//     return data.data || data; // Adjust based on your API response structure (e.g., if data is nested under a 'data' key)
//   } catch (error) {
//     console.error('Error fetching all destinations:', error);
//     // throw new Error(`Could not fetch destinations: ${error.message}`);
//     return []; // Return empty array on error to prevent breaking the page
//   }
// }

// export async function generateMetadata() {
//   return {
//     title: 'Explore Destinations in Myanmar | Your Travel Guide',
//     description: 'Discover breathtaking destinations across Myanmar. Plan your adventure with our curated list of places to visit, from ancient cities to natural wonders.',
//     // openGraph: {
//     //   title: 'Explore Destinations in Myanmar',
//     //   description: 'Discover breathtaking destinations across Myanmar.',
//     //   // images: [ ... ], // Add a default image for sharing
//     // },
//   };
// }

// const Page = async () => {
//   let destinations = [];
//   let fetchError = null;

//   try {
//     destinations = await getAllDestinations();
//   } catch (error) {
//     console.error("Error in DestinationsPage:", error);
//     fetchError = error.message || "An unexpected error occurred while fetching destinations.";
//   }

//   if (fetchError) {
//     return (
//       <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
//         <h1>Error Loading Destinations</h1>
//         <p>We encountered an issue trying to load the destinations. Please try again later.</p>
//         {process.env.NODE_ENV === 'development' && (
//           <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error: {fetchError}</i></p>
//         )}
//         <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}>
//           &larr; Go to Homepage
//         </Link>
//       </div>
//     );
//   }

//   // The DestinationList component itself handles the "no destinations found" case if the array is empty.
//   return <DestinationListPage destinations={destinations} />;
// };

// export default Page;



// import React from 'react';
// // import  destinationsData  from '../../data/destinations';
// import DestinationListPage from '../../main-components/DestinationList/DestinationList';

// const Page = () => {
//   return (
//     <DestinationListPage/>
//   )
// }

// export default Page

import React from 'react';
import DestinationListClient from './DestinationListClient'; 
const DestinationsPage = () => {
  return (
    <div>
      <DestinationListClient />
    </div>
  );
};

export default DestinationsPage;

