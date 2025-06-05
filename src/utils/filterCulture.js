import { myanmarCulturesData } from "../data/cultures";

export const getUniqueRegionsFromCultures = () => {
  if (!myanmarCulturesData || !Array.isArray(myanmarCulturesData)) {
    return [];
  }
  const allRegions = myanmarCulturesData.reduce((acc, cultureItem) => {
    if (cultureItem.region) {
      acc.add(cultureItem.region.toLowerCase().replace(/_/g, ' ')); 
    }
    return acc;
  }, new Set());
  return Array.from(allRegions).sort();
};