 const regionsData = [
  {
    id: "north",
    name: "Northern Myanmar",
    tagline: "Mystical Mountains & Ancient Kingdoms",
    spotlightImage: "https://images.unsplash.com/photo-1583435292794-4803a56c5043",
    cities: [
      { id: "mandalay", name: "Mandalay", description: "The last royal capital, rich in culture.", image: "https://images.unsplash.com/photo-1583435292794-4803a56c5043", url: "/destinations/mandalay" },
      { id: "pyinoolwin", name: "Pyin Oo Lwin", description: "Colonial hill station with cool climates.", image: "https://images.unsplash.com/photo-1583435292794-4803a56c5043", url: "/destinations/pyinoolwin" },
      { id: "myitkyina", name: "Myitkyina", description: "Capital of Kachin State, gateway to northern adventures.", image: "https://images.unsplash.com/photo-1583435292794-4803a56c5043", url: "/destinations/myitkyina" },
    ],
  },
  {
    id: "central",
    name: "Central Plains",
    tagline: "Ancient Temples & Riverside Life",
    spotlightImage: "https://images.unsplash.com/photo-1500051922829-2175900c4e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFnYW4lMjBtemplesfGVufDB8fDB8fHww&auto=format&fit=crop&w=1920&q=80",
    cities: [
      { id: "bagan", name: "Bagan", description: "Thousands of ancient temples dotting the plains.", image: "https://images.unsplash.com/photo-1584897356466-858d9b6c53d1", url: "/destinations/bagan" },
      { id: "naypyidaw", name: "NaypyiDaw", description: "The modern capital of Myanmar.", image: "https://images.unsplash.com/photo-1584897356466-858d9b6c53d1", url: "/destinations/naypyidaw" },
      { id: "sagaing", name: "Sagaing", description: "Hill dotted with pagodas and monasteries, spiritual center.", image: "https://images.unsplash.com/photo-1584897356466-858d9b6c53d1", url: "/destinations/sagaing" },
    ],
  },
  {
    id: "south",
    name: "Southern Coast",
    tagline: "Pristine Beaches & Tropical Islands",
    spotlightImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXlhbm1hciUyMGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=1920&q=80",
    cities: [
      { id: "ngapali", name: "Ngapali Beach", description: "Idyllic white sand beaches.", image: "https://images.unsplash.com/photo-1580744900509-5170c1370503?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmdhcGFsaSUyMGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", url: "/destinations/ngapali" },
      { id: "ngwe-saung", name: "Ngwe Saung Beach", description: "Another beautiful beach destination, popular for weekends.", image: "https://images.unsplash.com/photo-1627914972750-f8d9c2a3e7e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXJhdWstdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", url: "/destinations/ngwe-saung" },
      { id: "mergui-archipelago", name: "Mergui Archipelago", description: "Stunning islands and pristine waters for diving and snorkeling.", image: "https://images.unsplash.com/photo-1623910382343-9878207127e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVyZ3VpJTIwYXJjaGlwZWxhZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", url: "/destinations/mergui-archipelago" },
    ],
  },
  {
    id: "east",
    name: "Eastern Highlands",
    tagline: "Highlands, Hill Tribes & Inle Lake",
    spotlightImage: "https://images.unsplash.com/photo-1627914972750-f8d9c2a3e7e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5sZSUyMGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1920&q=80",
    cities: [
      { id: "inle-lake", name: "Inle Lake", description: "Iconic lake with floating gardens and leg-rowing fishermen.", image: "https://images.unsplash.com/photo-1616458315183-5d5d5d5d5d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5sZSUyMGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", url: "/destinations/inle-lake" },
      { id: "kalaw", name: "Kalaw", description: "Charming hill town, popular for trekking.", image: "https://images.unsplash.com/photo-1594770284050-2c3f87b8f9e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FsYXd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", url: "/destinations/kalaw" },
      { id: "taunggyi", name: "Taunggyi", description: "Capital of Shan State, known for its hot air balloon festival.", image: "https://images.unsplash.com/photo-1627914972750-f8d9c2a3e7e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXJhdWstdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", url: "/destinations/taunggyi" },
    ],
  },
  {
    id: "delta",
    name: "Ayeyarwady Delta & Southwest",
    tagline: "Fertile Plains & Spiritual Sites",
    spotlightImage: "https://images.unsplash.com/photo-1627914972750-f8d9c2a3e7e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXJhdWstdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", // Example image for Delta
    cities: [
      { id: "yangon", name: "Yangon", description: "Myanmar's largest city and commercial hub, home to Shwedagon Pagoda.", image: "https://images.unsplash.com/photo-1577749022666-4d4d4d4d4d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eWFuZ29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", url: "/destinations/yangon" },
      { id: "pathein", name: "Pathein", description: "Capital of Ayeyarwady Region, famous for its colorful parasols.", image: "https://images.unsplash.com/photo-1627914972750-f8d9c2a3e7e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXJhdWstdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", url: "/destinations/pathein" },
      { id: "hpa-an", name: "Hpa-an", description: "Dramatic limestone karsts and caves in Karen State.", image: "https://images.unsplash.com/photo-1629851490200-a540134b22c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHBhJTIwYWFuJTIwY2F2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", url: "/destinations/hpa-an" },
    ],
  },
  {
    id: "west",
    name: "Western Coast & Chin Hills",
    tagline: "Rugged Mountains & Unspoiled Beaches",
    spotlightImage: "https://images.unsplash.com/photo-1627914972750-f8d9c2a3e7e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXJhdWstdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", // Example image for Chin Hills
    cities: [
      { id: "sittwe", name: "Sittwe", description: "Capital of Rakhine State, gateway to Mrauk-U.", image: "https://images.unsplash.com/photo-1627914972750-f8d9c2a3e7e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXJhdWstdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", url: "/destinations/sittwe" },
      { id: "mrauk-u", name: "Mrauk-U", description: "Ancient Arakanese kingdom with impressive temples.", image: "https://images.unsplash.com/photo-1627914972750-f8d9c2a3e7e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXJhdWstdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", url: "/destinations/mrauk-u" },
      { id: "hakha", name: "Hakha", description: "Capital of Chin State, nestled in the mountains.", image: "https://images.unsplash.com/photo-1627914972750-f8d9c2a3e7e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXJhdWstdXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", url: "/destinations/hakha" },
    ],
  },
];

export default regionsData