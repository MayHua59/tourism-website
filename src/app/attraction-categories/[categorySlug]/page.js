import React from 'react';
import AttractionCategoryDetailPage from '../../../main-components/AttractionCategoryDetail/AttractionCategoryDetail';
// import { attraction_categories } from '@/data/attraction-categories';
// import { getAttractionCategoryBySlug } from '@/utils/getItem';

// export async function generateStaticParams() {
//   if (!Array.isArray(attraction_categories)) {
//     return [];
//   }
//   return attraction_categories.map(category => ({
//     categorySlug: category.slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { categorySlug } = params;
//   const category = getAttractionCategoryBySlug(categorySlug, attraction_categories);

//   if (!category) {
//     return {
//       title: 'Attraction Category Not Found',
//       description: 'The attraction category you are looking for does not exist.',
//     };
//   }

//   return {
//     title: `${category.name} | Attraction Categories | Myanmar Tourism`,
//     description: category.description || `Explore attractions in the ${category.name} category in Myanmar.`,
//   };
// }

const AttractionCategoryDetailRoutePage = ({ params }) => {
  const { categorySlug } = params;
  return <AttractionCategoryDetailPage categorySlug={categorySlug} />;
};

export default AttractionCategoryDetailRoutePage;