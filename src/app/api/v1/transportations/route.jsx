import { NextResponse } from 'next/server';

const EXTERNAL_API_BASE_URL = process.env.EXTERNAL_TRANSPORTATION_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1/transportations';

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
        { message: `Failed to fetch transportation data. Status: ${response.status}` },
        { status: response.status }
      );
    }

    const transportationData = await response.json();
    return NextResponse.json(transportationData);

  } catch (error) {
    console.error('Error in API route:', error);
    let errorMessage = 'An unexpected error occurred on the server.';
    
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}