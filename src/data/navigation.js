const navItems = [
     {
    id: "destinations",
    label: "Destinations",
    href: "/destinations", // This can be a link to an overview page
    dropdown: [
      { label: "Popular Destinations", href: "/destinations" },
      { label: "Destination Categories", href: "/destination-categories" },
      // { label: "Adventure Travel", href: "/destinations/adventure" },
      // { label: "Cultural Hotspots", href: "/destinations/cultural-hotspots" },
      // { label: "Nature & Wildlife", href: "/destinations/nature-wildlife" },
    ],
  },
  {
    id: "articles",
    label: "Articles",
    href: "/articles",
    dropdown: [
      { label: "Latest Articles", href: "/articles/latest" },
      { label: "Article Categories", href: "/article-categories" },
      // { label: "Cultural Insights", href: "/articles/culture" },
      // { label: "Food & Drink", href: "/articles/food-drink" },
    ],
  },
   {
    id: "events",
    label: "Events",
    href: "/events",
    dropdown: [
        { label: "Upcoming Events", href: "/events/upcoming" },
        { label: "Event Categories", href: "/event-categories" },
        // { label: "Exhibitions", href: "/events/exhibitions" },
    ]
  },
   {
    id: "plan-your-trip",
    label: "Plan Your Trip",
    href: "/plan-your-trip",
    dropdown: [
        { label: "Visa Information", href: "/plan-your-trip/visa" },
        { label: "Accommodation", href: "/plan-your-trip/accommodation" },
        { label: "Transportation", href: "/plan-your-trip/transportation" },
        { label: "Suggested Itineraries", href: "/plan-your-trip/itineraries" },
    ]
  },
  {
    id: "myanmar-cultures",
    label: "Myanmar Cultures",
    href: "/myanmar-cultures",
    dropdown: [
        // { label: "Traditions & Customs", href: "/myanmar-cultures/traditions" },
        // { label: "Arts & Crafts", href: "/myanmar-cultures/arts" },
        // { label: "Myanmar Cuisine", href: "/myanmar-cultures/cuisine" },
        { label: "Explore Myanmar Cultures", href: "/cultures" },
        { label: "Culture Categories", href: "/culture-categories" },
      
    ]
  },
]
export default navItems;