export const getCityById = (id, cities) => {
  return cities.find(city => city.id === id);
};