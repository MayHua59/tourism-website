const navItems = [
     {
    id: "destinations",
    label: "Destinations",
    href: "/destinations", // This can be a link to an overview page
    dropdown: [
      { label: "Top 10 Destinations", href: "/destinations/top-10" },
      { label: "Destinations by Region", href: "/destinations/regions" },
      { label: "Adventure Travel", href: "/destinations/adventure" },
      { label: "Cultural Hotspots", href: "/destinations/cultural-hotspots" },
      { label: "Nature & Wildlife", href: "/destinations/nature-wildlife" },
    ],
  },
  {
    id: "articles",
    label: "Articles",
    href: "/articles",
    dropdown: [
      { label: "Latest Articles", href: "/articles/latest" },
      { label: "Travel Tips", href: "/articles/tips" },
      { label: "Cultural Insights", href: "/articles/culture" },
      { label: "Food & Drink", href: "/articles/food-drink" },
    ],
  },
   {
    id: "events",
    label: "Events",
    href: "/events",
    dropdown: [
        { label: "Upcoming Festivals", href: "/events/festivals" },
        { label: "Cultural Events", href: "/events/cultural" },
        { label: "Exhibitions", href: "/events/exhibitions" },
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
        { label: "Traditions & Customs", href: "/myanmar-cultures/traditions" },
        { label: "Arts & Crafts", href: "/myanmar-cultures/arts" },
        { label: "Myanmar Cuisine", href: "/myanmar-cultures/cuisine" },
    ]
  },
]
export default navItems;