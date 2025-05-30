

export const getCityById = (id, cities) => {
  return cities.find(city => city.id === id);
};
export const getRegionById = (id, regions) => {
  return regions.find(region => region.id === id)
}