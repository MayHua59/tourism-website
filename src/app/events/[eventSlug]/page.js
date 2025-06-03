import React from 'react';
// import EventDetailPage from '@/main-components/EventDetail/EventDetailPage';
// import { eventsData } from '@/data/events';
// import { getEventBySlug } from '@/utils/getItem';

// export async function generateStaticParams() {
//   if (!Array.isArray(eventsData)) {
//     return [];
//   }
//   return eventsData.map(event => {
//     const parts = event.url.split('/');
//     return {
//       eventSlug: parts[parts.length - 1],
//     };
//   });
// }

// export async function generateMetadata({ params }) {
//   const { eventSlug } = params;
//   const event = getEventBySlug(eventSlug, eventsData);

//   if (!event) {
//     return {
//       title: 'Event Not Found',
//       description: 'The event you are looking for does not exist.',
//     };
//   }

//   return {
//     title: `${event.name} | Myanmar Events`,
//     description: event.description ? event.description.substring(0, 160) : `Details about ${event.name}.`,
//   };
// }

const Page = ({ params }) => {
  const { eventSlug } = params;
  return <EventDetailPage eventSlug={eventSlug} />;
};

export default Page;