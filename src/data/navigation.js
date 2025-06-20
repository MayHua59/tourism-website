const navItems = [
     {
    id: "home",
    label: "Home",
    href: "/", 
    
  },
     {
    id: "places-to-go",
    label: "Places To Go",
    href: "/destinations", 
    dropdown: [
      { label: "Top Destinations", href: "/destination-categories/top-destinations" },
      { label: "Destination Categories", href: "/destination-categories" ,
        dropdown: [
          { label: "Culture", href: "/destination-categories/cultures" },
          { label: "Historical & Museum", href: "/destination-categories/historical-and-museum" },
          { label: "Nature & Beaches", href: "/destination-categories/nature-and-beaches" },
          { label: "Adventure", href: "/destination-categories/adventures" },
          { label: "UNESCO", href: "/destination-categories/unesco" },
          { label: "Ecotourism", href: "/destination-categories/eco-tourism" },
        ]
        
        
      },
      
    ],
  },
   {
    id: "plan-your-trip",
    label: "Plan Your Trip",
    href: "/plan-your-trip",
    dropdown: [
        
        { label: "Stays", href: "/stays" ,
          dropdown: [
            {label: "Hotels", 
            href: "/stays/hotels"},
            {label: "Guest House", 
            href: "/stays/guest-house"},
            {label: "Hostels", 
            href: "/stays/hostels"},
            
          ]
        },
        
        { label: "Tour Companies", href: "/tour-companies" },
        { label: "Tour Guides", href: "/tour-guides" },
        { label: "Restaurants", href: "/restaurants" },
        { label: "Transportation", href: "/transportations" ,
          dropdown: [
{ label: "By Air", href: "/transportations/by-air" },
{ label: "By Car", href: "/transportations/by-car" },
{ label: "By Train", href: "/transportations/by-train" },
{ label: "By River/Boat", href: "/transportations/by-river-boat" },

          ]
        },
        {
          label: "Tour Itinerary",
          href: "/tour-itinerary",
          dropdown: [
            {
              label: "One day trip",
              href: '/tour-itinerary/one-day-trip'
            },
            {
              label: "Two days trip",
              href: '/tour-itinerary/two-days-trip'
            },
            {
              label: "Three days trip",
              href: '/tour-itinerary/three-days-trip'
            },
            {
              label: "Four days trip",
              href: '/tour-itinerary/four-days-trip'
            },
            {
              label: "Five days trip",
              href: '/tour-itinerary/five-days-trip'
            },
            {
              label: "Six days trip",
              href: '/tour-itinerary/six-days-trip'
            },
            {
              label: "Seven days trip",
              href: '/tour-itinerary/seven-days-trip'
            },
            
          ]
        }
    ]
  },
  {
    id: "things-to-do",
    label: "Things To Do",
    href: "/things-to-do",
    dropdown: [
      { label: "Culture", href: "/cultures" },
      { label: "Festivals & Events", href: "/festivals-and-events" },
      { label: "Cuisine", href: "/cuisine" },
      
    ],
  },
   {
    id: "travel-info",
    label: "Travel Info ",
    href: "/travel-info",
    dropdown: [
        { label: "Weather Forecast", href: "/weather-forecast" },
        { label: "Upcoming Events", href: "/upcoming-events" },
        { label: "Photos", href: "/travel-info/photos" },
        { label: "Videos", href: "/travel-info/videos" },
        { label: "Articles", href: "/travel-info/articles" },
    ]
  },
  
  {
    id: "contact-us",
    label: "Contact Us",
    href: "/contact-us",
    dropdown: [
        
        { label: "Head Offices", href: "/contact-us/head-offices" },
        { label: "Branch Offices", href: "/contact-us/branch-offices" },
         { label: "Tourism Police Offices", href: "/contact-us/tourism-police-offices" },
      
    ]
  },
]
export default navItems;