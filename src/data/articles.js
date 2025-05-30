export const articlesData = [
  {
    id: "article1",
    title: "Top 10 Must-Visit Pagodas in Myanmar",
    summary: "Explore the most iconic and breathtaking pagodas across Myanmar, rich in history and spiritual significance.",
    image_url: "https://images.unsplash.com/photo-1584412370502-1dd6d55d1060?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/articles/top-10-pagodas-myanmar",
    relatedCities: ["bagan", "yangon", "mandalay"] 
  },
  {
    id: "article2",
    title: "A Culinary Journey Through Yangon's Street Food",
    summary: "Dive into the vibrant street food scene of Yangon and discover delicious local delicacies you can't miss.",
    image_url: "https://images.unsplash.com/photo-1584412370502-1dd6d55d1060?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/articles/yangon-street-food-guide",
    relatedCities: ["yangon"]
  },
  {
    id: "article3",
    title: "Trekking in Kalaw: A Guide to Myanmar's Hill Country",
    summary: "Experience the stunning landscapes and unique cultures of Myanmar's Shan State with an unforgettable trek from Kalaw.",
    image_url: "https://images.unsplash.com/photo-1584412370502-1dd6d55d1060?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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