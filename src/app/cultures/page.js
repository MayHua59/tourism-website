// ***** start with API ********//

// import React from 'react';
// import CultureListPage from '../../main-components/CultureList/CultureList';
// import Link from 'next/link';


// async function getAllCulturalItems() {
//   const baseApiUrl = process.env.EXTERNAL_CULTURAL_ITEMS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
//   const apiUrl = `${baseApiUrl}/cultural-items`; 

//   try {
//     const res = await fetch(apiUrl, {
//       cache: 'no-store', 
//     });

//     if (!res.ok) {
//       console.error(`API Error: ${res.status} ${res.statusText} for cultural items at ${apiUrl}`);
//       throw new Error(`Failed to fetch cultural items. Status: ${res.status}`);
//     }
//     const data = await res.json();
    
//     return data.data || data;
//   } catch (error) {
//     console.error('Error fetching all cultural items:', error);
//     throw error; 
//   }
// }

// export async function generateMetadata() {
//   return {
//     title: 'Explore Myanmar\'s Culture | Traditions & Experiences',
//     description: 'Discover the heart of Myanmar through its vibrant culture. Explore festivals, historical sites, traditional arts, and unique cultural experiences.',
//     // openGraph: {
//     //   title: 'Myanmar Culture: Traditions & Experiences',
//     //   description: 'Explore Myanmar\'s rich culture.',
//     // },
//   };
// }

// const Page = async () => {
//   let culturalItems = [];
//   let fetchError = null;

//   try {
//     culturalItems = await getAllCulturalItems();
//   } catch (error) {
//     console.error("Error in CulturePage:", error);
//     fetchError = error.message || "An unexpected error occurred while fetching cultural items.";
//   }

//   if (fetchError) {
//     return (
//       <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
//         <h1>Error Loading Cultural Experiences</h1>
//         <p>We encountered an issue trying to load the cultural experiences. Please try again later.</p>
//         {process.env.NODE_ENV === 'development' && (
//           <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error: {fetchError}</i></p>
//         )}
//         <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}>
//           &larr; Go to Homepage
//         </Link>
//       </div>
//     );
//   }

 
//   return <CultureListPage culturalItems={culturalItems} />;
// };

// export default Page;
// ***** end with API ********//

// ***** start with Static data ********//
// src/app/cultures/page.js
import React from 'react';
import CultureList from '../../main-components/CultureList/CultureList';
import { myanmarCulturesData } from '../../data/cultures';
import { villagesData } from '../../data/villages';
import { townshipsData } from '../../data/townships'; 

export async function generateMetadata() {
  return {
    title: 'Myanmar Cultures | Explore Myanmar\'s Heritage',
    description: 'Discover the rich and diverse cultures of Myanmar. Learn about traditions, festivals, and more.',
  };
}

const Page = () => {
  return (
    <CultureList
      cultures={myanmarCulturesData}
      villages={villagesData}
      townships={townshipsData} 
    />
  );
};

export default Page;
// ***** end with Static data ********//