import React from 'react';
import EventCategoryDetailPage from '../../../main-components/EventCategoryDetail/EventCategoryDetail';
// import { event_categories } from '@/data/event-categories';
// import { getEventCategoryBySlug } from '@/utils/getItem';

// export async function generateStaticParams() {
//   if (!Array.isArray(event_categories)) {
//     return [];
//   }
//   return event_categories.map(category => ({
//     categorySlug: category.slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { categorySlug } = params;
//   const category = getEventCategoryBySlug(categorySlug, event_categories);

//   if (!category) {
//     return {
//       title: 'Event Category Not Found',
//       description: 'The event category you are looking for does not exist.',
//     };
//   }

//   return {
//     title: `${category.name} | Myanmar Event Categories`,
//     description: category.description || `Explore events in the ${category.name} category in Myanmar.`,
//   };
// }

const Page = ({ params }) => {
  const { categorySlug } = params;
  return <EventCategoryDetailPage categorySlug={categorySlug} />;
};

export default Page;