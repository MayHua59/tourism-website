export const articlesData = [
  {
    id: "article1",
    title: "Top 10 Must-Visit Pagodas in Myanmar",
    summary: "Explore the most iconic and breathtaking pagodas across Myanmar, rich in history and spiritual significance.",
    image_url: "https://images.unsplash.com/photo-1552098479-bddc0d0a4119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    url: "/articles/top-10-pagodas-myanmar",
    relatedCities: ["bagan", "yangon", "mandalay"] 
  },
  {
    id: "article2",
    title: "A Culinary Journey Through Yangon's Street Food",
    summary: "Dive into the vibrant street food scene of Yangon and discover delicious local delicacies you can't miss.",
    image_url: "https://images.unsplash.com/photo-1599600300922-7d67d86cef07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eWFuZ29uJTIwc3RyZWV0JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    url: "/articles/yangon-street-food-guide",
    relatedCities: ["yangon"]
  },
  {
    id: "article3",
    title: "Trekking in Kalaw: A Guide to Myanmar's Hill Country",
    summary: "Experience the stunning landscapes and unique cultures of Myanmar's Shan State with an unforgettable trek from Kalaw.",
    image_url: "https://images.unsplash.com/photo-1604724955313-15de3356406e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FsYXclMjB0cmVra2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    url: "/articles/trekking-kalaw-guide",
    relatedCities: ["kalaw", "shan state"] 
  }
  
];


export const getUniqueCitiesFromArticles = () => {
  const allCities = articlesData.reduce((acc, article) => {
    if (article.relatedCities) {
      article.relatedCities.forEach(city => acc.add(city));
    }
    return acc;
  }, new Set());
  return Array.from(allCities).sort();
};