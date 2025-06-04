import { NextRequest, NextResponse } from 'next/server';


const EXTERNAL_API_BASE_URL = process.env.EXTERNAL_DESTINATIONS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1/destinations';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } } 
) {
  const { slug } = params; 

  if (!slug) {
    return NextResponse.json({ message: 'Destination slug is required.' }, { status: 400 });
  }

  try {
    const externalApiUrl = `${EXTERNAL_API_BASE_URL}/${slug}`;

    // Fetch data from the external API
    const response = await fetch(externalApiUrl, {
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

    // Check if the request to the external API was successful
    if (!response.ok) {
      console.error(`Error fetching from external API ${externalApiUrl}: ${response.status} ${response.statusText}`);
      // If the external API returns a 404, it means the destination wasn't found
      if (response.status === 404) {
        return NextResponse.json({ message: `Destination with slug '${slug}' not found.` }, { status: 404 });
      }
      return NextResponse.json(
        { message: `Failed to fetch data for destination '${slug}'. Status: ${response.status}` },
        { status: response.status }
      );
    }

    // Parse the JSON data from the external API response
    const destinationDetail = await response.json();

    // Return the fetched destination detail
    return NextResponse.json(destinationDetail);

  } catch (error) {
    console.error(`Error in API route for destination slug '${slug}':`, error);
    let errorMessage = 'An unexpected error occurred on the server.';
    // if (error instanceof Error && process.env.NODE_ENV === 'development') {
    //   errorMessage = error.message;
    // }
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}