// import React from 'react';
// import EventDetailPage from '../../../main-components/EventDetail/EventDetail';
// import Link from 'next/link'; // For fallback UI

// // Function to fetch data for a specific event
// async function getEventData(slug) {
//   // Replace with your actual external API endpoint for a single event
//   // It's good practice to use an environment variable for the base API URL
//   const baseApiUrl = process.env.EXTERNAL_EVENTS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
//   const apiUrl = `${baseApiUrl}/events/${slug}`; 

//   try {
//     const res = await fetch(apiUrl, {
//       cache: 'no-store', 
//     });

//     if (!res.ok) {
//       if (res.status === 404) {
//         return null; 
//       }
//       console.error(`API Error: ${res.status} ${res.statusText} for event slug ${slug} at ${apiUrl}`);
//       throw new Error(`Failed to fetch event data. Status: ${res.status}`);
//     }
//     return res.json(); 
//   } catch (error) {
//     console.error(`Error fetching event ${slug}:`, error);
//     throw new Error(`Could not fetch event: ${error.message}`);
//   }
// }

// // Optional: generateMetadata for SEO
// export async function generateMetadata({ params }) {
//   const { eventSlug } = params;
//   try {
//     const event = await getEventData(eventSlug); 

//     if (!event) {
//       return {
//         title: 'Event Not Found',
//         description: 'The event you are looking for does not exist.',
//       };
//     }

//     // Ensure event.name and event.description exist before using them
//     const title = event.name ? `${event.name} | Myanmar Events` : 'Myanmar Event';
//     const description = event.description
//       ? event.description.substring(0, 160)
//       : `Details about the event: ${event.name || 'Myanmar Event'}.`;

//     return {
//       title: title,
//       description: description,
      
//       // openGraph: {
//       //   title: title,
//       //   description: description,
//       //   images: event.image_url ? [{ url: event.image_url }] : [],
//       // },
//     };
//   } catch (error) {
//     console.error("Error generating metadata for event:", eventSlug, error);
//     return {
//       title: 'Error',
//       description: 'Could not load event details.',
//     };
//   }
// }


// const Page = async ({ params }) => {
//   const { eventSlug } = params;

//   try {
//     const eventData = await getEventData(eventSlug);

//     if (!eventData) {
//       // Handle the "Not Found" case: API returned 404 or null
//       return (
//         <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
//           <h1>Event Not Found</h1>
//           <p>{`Sorry, we couldn't find the event: "${eventSlug}".`}</p>
//           <Link href="/events" style={{ color: '#0070f3', textDecoration: 'underline' }}>
//             &larr; Back to All Events
//           </Link>
//         </div>
//       );
//     }

    
//     return <EventDetailPage eventData={eventData} />;

//   } catch (error) {
    
//     console.error(`Page rendering error for event ${eventSlug}:`, error);
//     return (
//       <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
//         <h1>Error Loading Event</h1>
//         <p>There was an issue loading the details for this event. Please try again later.</p>
//         {process.env.NODE_ENV === 'development' && (
//           <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error details (dev only): {error.message}</i></p>
//         )}
//         <Link href="/events" style={{ color: '#0070f3', textDecoration: 'underline' }}>
//           &larr; Back to All Events
//         </Link>
//       </div>
//     );
//   }
// };

// export default Page;

// ** start with Static Data ***////
import React from 'react';
import EventDetailPage from '../../../main-components/EventDetail/EventDetail';
import  eventsData  from '../../../data/events'; 
import  regionsData  from '../../../data/regions';
import  citiesData  from '../../../data/cities';
import  townshipsData  from '../../../data/townships';
import  villagesData  from '../../../data/villages';

// export async function generateStaticParams() {
//   return eventsData.map((event) => ({
//     slug: event.slug,
//   }));
// }

// export async function generateMetadata({ params, searchParams }, parent) {
//   // read route params
//   const slug = params.slug


 const getRegionName = (regionId) => {
    const region = regionsData.find((r) => r.id === regionId);
    return region ? region.name : null;
  };
   const getCityName = (cityId) => {
    const city = citiesData.find((c) => c.id === cityId);
    return city ? city.name : null;
  };
   const getTownshipName = (townshipId) => {
    const township = townshipsData.find((t) => t.id === townshipId);
    return township ? township.name : null;
  };
   const getVillageName = (villageId) => {
    const village = villagesData.find((v) => v.id === villageId);
    return village ? village.name : null;
  };
 

 
  
 
 


const Page = ({ params }) => {
  const { eventSlug } = params;
  const eventData = eventsData.find((event) => event.slug === eventSlug);

  if (!eventData) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
        <h1>Event Not Found</h1>
        <p>The event you are looking for does not exist.</p>
        {/* Add a Link back to the events page */}
      </div>
    );
  }
  const regionName = getRegionName(eventData.region_id);
  const townshipName = getTownshipName(eventData.township_id);
  const cityName = getCityName(eventData.city_id);
  const villageName = getVillageName(eventData.village_id)

  return <EventDetailPage eventData={eventData} regionName={regionName} townshipName={townshipName} cityName={cityName} villageName={villageName}/>;
};

export default Page;