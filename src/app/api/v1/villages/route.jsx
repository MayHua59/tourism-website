import { NextResponse } from 'next/server';

const EXTERNAL_API_BASE_URL = process.env.EXTERNAL_TOWNSHIPS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1/villages';

export async function GET() {
  try {
    const response = await fetch(EXTERNAL_API_BASE_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        // Add any other necessary headers, like Authorization, if required by the external API
        // 'Authorization': `Bearer YOUR_API_TOKEN`,
      },
      // Configure caching behavior if needed
      // cache: 'no-store', // To always fetch fresh data
      // next: { revalidate: 3600 } // Revalidate every hour (ISR)
    });

    if (!response.ok) {
      console.error(`Error fetching from external API: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { message: `Failed to fetch townships. Status: ${response.status}` },
        { status: response.status }
      );
    }

    const villages = await response.json();
    return NextResponse.json(villages);

  } catch (error) {
    console.error('Error in API route:', error);
    let errorMessage = 'An unexpected error occurred on the server.';
    // if (error instanceof Error && process.env.NODE_ENV === 'development') {
    //   errorMessage = error.message;
    // }
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}