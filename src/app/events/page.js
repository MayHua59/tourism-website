import React from 'react';
import EventList from '../../main-components/EventList/EventList';
import Link from 'next/link';

async function getAllEvents() {
  const baseApiUrl = process.env.EXTERNAL_EVENTS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1';
  const apiUrl = `${baseApiUrl}/events`; 

  try {
    const res = await fetch(apiUrl, {
      cache: 'no-store', 
    });

    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText} for events at ${apiUrl}`);
      throw new Error(`Failed to fetch events. Status: ${res.status}`);
    }
    const data = await res.json();
    
    return data.data || data;
  } catch (error) {
    console.error('Error fetching all events:', error);
    throw error; 
  }
}

export async function generateMetadata() {
  return {
    title: 'Upcoming Events in Myanmar | Plan Your Trip',
    description: 'Discover exciting events and festivals happening in Myanmar. Find dates, locations, and details to plan your trip around these cultural experiences.',
    // openGraph: {
    //   title: 'Events in Myanmar',
    //   description: 'Discover upcoming events and festivals.',
    // },
  };
}

const Page = async () => {
  let events = [];
  let fetchError = null;

  try {
    events = await getAllEvents();
  } catch (error) {
    console.error("Error in EventsPage:", error);
    fetchError = error.message || "An unexpected error occurred while fetching events.";
  }

  if (fetchError) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
        <h1>Error Loading Events</h1>
        <p>We encountered an issue trying to load the events. Please try again later.</p>
        {process.env.NODE_ENV === 'development' && (
          <p style={{ color: 'red', fontSize: '0.9em' }}><i>Error: {fetchError}</i></p>
        )}
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}>
          &larr; Go to Homepage
        </Link>
      </div>
    );
  }

  
  return <EventList events={events} />;
};

export default Page;