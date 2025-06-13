// import { NextResponse } from 'next/server';

// const EXTERNAL_API_BASE_URL = process.env.EXTERNAL_DESTINATIONS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1/destinations';

// export async function GET() {
//   try {
//     const response = await fetch(EXTERNAL_API_BASE_URL, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
        
//       },
     
//     });

//     if (!response.ok) {
//       console.error(`Error fetching from external API: ${response.status} ${response.statusText}`);
//       return NextResponse.json(
//         { message: `Failed to fetch destinations. Status: ${response.status}` },
//         { status: response.status }
//       );
//     }

//     const destinations = await response.json();
//     return NextResponse.json(destinations);

//   } catch (error) {
//     console.error('Error in API route:', error);
//     let errorMessage = 'An unexpected error occurred on the server.';
    
//     return NextResponse.json({ message: errorMessage }, { status: 500 });
//   }
// }

//*** with Pagination ***/
import { NextResponse } from 'next/server';

const EXTERNAL_API_BASE_URL = process.env.EXTERNAL_DESTINATIONS_API_BASE_URL || 'https://hotel.software100.com.mm/api/v1/destinations';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('per_page') || '10');

    const url = `${EXTERNAL_API_BASE_URL}?page=${page}&per_page=${perPage}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`Error fetching from external API: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { message: `Failed to fetch destinations. Status: ${response.status}` },
        { status: response.status }
      );
    }

    const destinationsData = await response.json();
    return NextResponse.json(destinationsData);

  } catch (error) {
    console.error('Error in API route:', error);
    let errorMessage = 'An unexpected error occurred on the server.';

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}