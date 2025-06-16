// import { NextResponse } from 'next/server';

// const EXTERNAL_API_BASE_URL = process.env.EXTERNAL_RESTAURANTS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1/restaurants';

// export async function GET() {
//   try {
//     const response = await fetch(EXTERNAL_API_BASE_URL, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         // Add any other necessary headers, like Authorization, if required by the external API
//         // 'Authorization': `Bearer YOUR_API_TOKEN`,
//       },
//       // Configure caching behavior if needed
//       // cache: 'no-store', // To always fetch fresh data
//       // next: { revalidate: 3600 } // Revalidate every hour (ISR)
//     });

//     if (!response.ok) {
//       console.error(`Error fetching from external API: ${response.status} ${response.statusText}`);
//       return NextResponse.json(
//         { message: `Failed to fetch restaurants. Status: ${response.status}` },
//         { status: response.status }
//       );
//     }

//     const restaurants = await response.json();
//     return NextResponse.json(restaurants);

//   } catch (error) {
//     console.error('Error in API route:', error);
//     let errorMessage = 'An unexpected error occurred on the server.';
//     // if (error instanceof Error && process.env.NODE_ENV === 'development') {
//     //   errorMessage = error.message;
//     // }
//     return NextResponse.json({ message: errorMessage }, { status: 500 });
//   }
// }

//***with Pagination ***/
import { NextResponse } from 'next/server';

const EXTERNAL_API_BASE_URL = process.env.EXTERNAL_RESTAURANTS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1/restaurants';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('per_page') || '10');
    const location = searchParams.get('location') || '';
    const cuisine = searchParams.get('cuisine') || '';

    let url = `${EXTERNAL_API_BASE_URL}?page=${page}&per_page=${perPage}`;

    if (location) {
      url += `&location=${location}`;
    }
    if (cuisine) {
      url += `&cuisine=${cuisine}`;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`Error fetching from external API: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { message: `Failed to fetch restaurants. Status: ${response.status}` },
        { status: response.status }
      );
    }

    const restaurantsData = await response.json();
    return NextResponse.json(restaurantsData);

  } catch (error) {
    console.error('Error in API route:', error);
    let errorMessage = 'An unexpected error occurred on the server.';

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}