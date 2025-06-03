import React from 'react';
import CultureCategoryDetailPage from '../../../main-components/CultureCategoryDetail/CultureCategoryDetail';
// import { culture_categories } from '@/data/culture-categories';
// import { getCultureCategoryBySlug } from '@/utils/getItem';

// export async function generateStaticParams() {
//   if (!Array.isArray(culture_categories)) {
//     return [];
//   }
//   return culture_categories.map(category => ({
//     categorySlug: category.slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { categorySlug } = params;
//   const category = getCultureCategoryBySlug(categorySlug, culture_categories);

//   if (!category) {
//     return {
//       title: 'Culture Category Not Found',
//       description: 'The culture category you are looking for does not exist.',
//     };
//   }

//   return {
//     title: `${category.name} | Myanmar Culture Categories`,
//     description: category.description || `Explore cultural items in the ${category.name} category in Myanmar.`,
//   };
// }

const CultureCategoryDetailRoutePage = ({ params }) => {
  const { categorySlug } = params;
  return <CultureCategoryDetailPage categorySlug={categorySlug} />;
};

export default CultureCategoryDetailRoutePage;