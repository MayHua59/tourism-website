import React from 'react';
import AttractionDetailPage from '../../../main-components/AttractionDetail/AttractionDetail';
// import { getAttractionBySlug } from '@/utils/getItem'; // Make sure this path is correct

// export async function generateStaticParams() {
//   if (!Array.isArray(attractions)) {
//     return [];
//   }
//   return attractions.map(attraction => ({
//     attractionSlug: attraction.slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { attractionSlug } = params;
//   const attraction = getAttractionBySlug(attractionSlug, attractions);

//   if (!attraction) {
//     return {
//       title: 'Attraction Not Found',
//       description: 'The attraction you are looking for does not exist.',
//     };
//   }

//   return {
//     title: `${attraction.name} | Myanmar Attractions`,
//     description: attraction.description ? attraction.description.substring(0, 160) : `Learn more about ${attraction.name}, a fascinating attraction in Myanmar.`,
//   };
// }

const Page = ({ params }) => {
  const { attractionSlug } = params;
  return <AttractionDetailPage attractionSlug={attractionSlug} />;
};

export default Page;