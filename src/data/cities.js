export const citiesData = [
  {
    id: 'yangon',
    name: 'Yangon',
    region: 'Yangon Region',
    description: 'Yangon, formerly Rangoon, was the capital of Myanmar until 2006. The city is an amalgamation of British colonial architecture, modern high-rises and gilded Buddhist pagodas.',
    imageUrl: 'https://images.unsplash.com/photo-1542044014-428a583a9191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXlhbm1hciUyMGN1bHR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    attractions: [
      { name: 'Shwedagon Pagoda', description: 'A 99-meter high gold plated pagoda.' },
      { name: 'Sule Pagoda', description: 'A Mon-style stupa located in the heart of downtown Yangon.' },
    ],
    gallery: [
        'https://images.unsplash.com/photo-1583160204010-03a14b6951ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWFuZ29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1591264980702-81a644a35c76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhbmFhYVxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
    ]
  },
  {
    id: 'mandalay',
    name: 'Mandalay',
    region: 'Mandalay Region',
    description: 'Mandalay is the second-largest city and the last royal capital of Myanmar. Located on the east bank of the Irrawaddy River, it is a major cultural and economic hub of Upper Myanmar.',
    imageUrl: 'https://images.unsplash.com/photo-1591264980702-81a644a35c76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhbmFrYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', 
    attractions: [
      { name: 'Mandalay Hill', description: 'A 240 metres high hill with pagodas.' },
      { name: 'U Bein Bridge', description: 'A 1.2-kilometre wooden footbridge.' },
    ],
    gallery: [
        'https://images.unsplash.com/photo-1604255572969-fd4146a00795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXlhbm1hciUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1586953208907-c991000a9f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhpbmd5YW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    ]
  },
  {
    id: 'bagan',
    name: 'Bagan',
    region: 'Mandalay Region',
    description: 'Bagan is an ancient city located in the Mandalay Region of Myanmar. From the 9th to 13th centuries, the city was the capital of the Pagan Kingdom, the first kingdom to unify the regions that would later constitute modern Myanmar. During the kingdom\'s golden era, over 10,000 Buddhist temples, pagodas and monasteries were constructed in the Bagan plains alone.',
    imageUrl: 'https://images.unsplash.com/photo-1579244036136-e822005470d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    attractions: [
      { name: 'Shwesandaw Pagoda', description: 'Famous for its panoramic sunset views over the Bagan plains.' },
      { name: 'Ananda Temple', description: 'One of the best-preserved and most beautiful temples in Bagan.' },
      { name: 'Thatbyinnyu Temple', description: 'Bagan\'s tallest temple, offering impressive scale.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1579244005886-c56a84c8a2b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1579244036136-e822005470d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 'inle-lake',
    name: 'Inle Lake',
    region: 'Shan State',
    description: 'Inle Lake is a freshwater lake located in the Nyaungshwe Township of Taunggyi District, Shan State, Myanmar. It is the second largest lake in Myanmar and one of the highest at an elevation of 889 meters (2,917 ft). The lake is famous for its leg-rowing fishermen and floating gardens.',
    imageUrl: 'https://images.unsplash.com/photo-1629853927641-a6e4d0d0f741?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    attractions: [
      { name: 'Phaung Daw Oo Pagoda', description: 'Houses five small gilded images of Buddha, which are so heavily gilded that their original forms cannot be seen.' },
      { name: 'Nga Phe Kyaung Monastery (Jumping Cat Monastery)', description: 'Known for its jumping cats and ancient Buddha images.' },
      { name: 'Floating Gardens', description: 'Unique agricultural practice where crops are grown on floating beds of hyacinth and earth.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1629853927641-a6e4d0d0f741?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1583160204010-03a14b6951ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWFuZ29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60' // Example, consider finding more specific Inle images
    ]
  },
  {
    id: 'naypyidaw',
    name: 'Naypyidaw',
    region: 'Naypyidaw Union Territory',
    description: 'Naypyidaw is the capital and third-largest city of Myanmar. It is unusual among world capitals in that it is a completely planned city, featuring wide avenues, large government buildings, and expansive, often sparsely populated, urban areas.',
    imageUrl: 'https://images.unsplash.com/photo-1624647304191-236b28531737?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    attractions: [
      { name: 'Uppatasanti Pagoda', description: 'A replica of the Shwedagon Pagoda, standing at 99 meters.' },
      { name: 'National Herbal Park', description: 'A park showcasing various medicinal plants native to Myanmar.' },
      { name: 'National Museum (Naypyidaw)', description: 'Houses a collection of ancient artifacts, cultural exhibits, and historical displays.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1624647304191-236b28531737?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1624647304191-236b28531737?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // 
    ]
  }
];