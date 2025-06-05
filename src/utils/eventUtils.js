import { eventsData } from '../data/events';

export const getUniqueLocationsFromEvents = () => {
  if (!eventsData || !Array.isArray(eventsData)) {
    return [];
  }
  const allLocations = eventsData.reduce((acc, eventItem) => {
    if (eventItem.location) {
      // Split if multiple locations are comma-separated, then trim and add
      eventItem.location.split(',').forEach(loc => {
        const trimmedLoc = loc.trim();
        if (trimmedLoc) acc.add(trimmedLoc);
      });
    }
    return acc;
  }, new Set());
  return Array.from(allLocations).sort();
};


export const getEventBySlug = (slug, data = eventsData) => {
  if (!data || !Array.isArray(data)) return undefined;
  return data.find(item => item.url && item.url.endsWith(slug));
};

export const getEventById = (id, data = eventsData) => {
  if (!data || !Array.isArray(data)) return undefined;
  return data.find(item => item.id === id);
};