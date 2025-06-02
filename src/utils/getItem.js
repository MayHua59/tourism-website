

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


export const getCultureById = (id, cultures) => {
  if (!cultures || !Array.isArray(cultures)) return undefined;
  return cultures.find(culture => culture.id === id);
};
/////////// start Get Culture By Slug///////
// export const getCultureBySlug = (slug) => {
//   if (!myanmarCulturesData || !Array.isArray(myanmarCulturesData)) {
//     console.error("myanmarCulturesData is not loaded or not an array");
//     return undefined;
//   }
//   // The slug is the last part of the item.url
//   return myanmarCulturesData.find(item => {
//     if (item.url) {
//       const itemSlug = item.url.substring(item.url.lastIndexOf('/') + 1);
//       return itemSlug === slug;
//     }
//     return false;
//   });
// };
/////////// end Get Culture By Slug///////

export const getDestinationBySlug = (slug, destinations) => {
  if (!destinations || !Array.isArray(destinations)) {
    console.error("Destinations data is not loaded or not an array");
    return undefined;
  }
  return destinations.find(destination => destination.slug === slug);
};

export const getAttractionBySlug = (slug, attractions) => {
  if (!attractions || !Array.isArray(attractions)) {
    console.error("Attractions data is not loaded or not an array");
    return undefined;
  }
  return attractions.find(attraction => attraction.slug === slug);
};
