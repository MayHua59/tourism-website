// app/api/articles/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    // const { searchParams } = new URL(req.url);
    // const page = searchParams.get('page') || '1';

    try {
        // const res = await fetch(`https://drtoken.live/api/v1/articles?page=${page}`, {
        //   headers: {
        //     // Add auth headers if needed
        //     Accept: 'application/json',
        //   },
        // });

        // if (!res.ok) {
        //   return NextResponse.json({ error: 'Failed to fetch articles' }, { status: res.status });
        // }

        // const data = await res.json();
        const data = [
            {
                id: "slide1",
                image_url: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60",
                caption: "Discover breathtaking landscapes around the world.",
                url: "/destinations/landscapes",
            },
            {
                id: "slide2",
                image_url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60",
                caption: "Embark on unforgettable adventures.",
                url: "/destinations/adventure",
            },
            {
                id: "slide3",
                image_url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=1200&q=60",
                caption: "Immerse yourself in vibrant cultures.",
                url: "/destinations/culture",
            },
            {
                id: "slide4",
                image_url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA&auto=format&fit=crop&w=1200&q=60",
                caption: "Plan your dream vacation today.",
                url: "/plan-your-trip",
            },
        ];
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Server error' + error }, { status: 500 });
    }
}
