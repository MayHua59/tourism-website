

export const getCityById = (id, cities) => {
  return cities.find(city => city.id === id);
};
export const getRegionById = (id, regions) => {
  return regions.find(region => region.id === id)
}
export const getArticleById = (id, articles) => {
  if (!articles || !Array.isArray(articles)) {
    console.error("articlesData is not loaded or not an array");
    return undefined;
  }
  return articles.find(article => article.id === id);
};