import { NextResponse } from 'next/server';

const EXTERNAL_API_BASE_URL = process.env.EXTERNAL_DESTINATIONS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1/destinations';

export async function GET() {
  try {
    const response = await fetch(EXTERNAL_API_BASE_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        
      },
      // Configure caching behavior if needed
      
    });

    if (!response.ok) {
      console.error(`Error fetching from external API: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { message: `Failed to fetch destinations. Status: ${response.status}` },
        { status: response.status }
      );
    }

    const destinations = await response.json();
    if (!destinations || destinations.length === 0) {
      return NextResponse.json({ message: 'No destinations found' }, { status: 404 });
    }
    return NextResponse.json(destinations);

  } catch (error) {
    console.error('Error in API route:', error);
    let errorMessage = 'An unexpected error occurred on the server.';
    
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}