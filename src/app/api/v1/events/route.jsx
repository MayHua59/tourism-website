import { NextResponse } from 'next/server';

const EXTERNAL_API_BASE_URL = process.env.EXTERNAL_EVENTS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1/events';

export async function GET() {
  try {
    const response = await fetch(EXTERNAL_API_BASE_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
       
      },
      
    });

    if (!response.ok) {
      console.error(`Error fetching from external API: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { message: `Failed to fetch events. Status: ${response.status}` },
        { status: response.status }
      );
    }

    const events = await response.json();
    return NextResponse.json(events);

  } catch (error) {
    console.error('Error in API route:', error);
    let errorMessage = 'An unexpected error occurred on the server.';
   
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}