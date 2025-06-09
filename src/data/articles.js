// export const articlesData = [
//   {
//     id: "article1",
//     title: "Top 10 Must-Visit Pagodas in Myanmar",
//     summary: "Explore the most iconic and breathtaking pagodas across Myanmar, rich in history and spiritual significance.",
//     image_url: "https://i.pinimg.com/736x/77/bd/1f/77bd1fafb324087772c38bdee6ac66ce.jpg",
//     url: "/articles/top-10-pagodas-myanmar",
//     relatedCities: ["bagan", "yangon", "mandalay"] 
//   },
//   {
//     id: "article2",
//     title: "A Culinary Journey Through Yangon's Street Food",
//     summary: "Dive into the vibrant street food scene of Yangon and discover delicious local delicacies you can't miss.",
//     image_url: "https://i.pinimg.com/736x/e1/a6/bf/e1a6bf10e62362ef1f0bc7078cd5c50f.jpg",
//     url: "/articles/yangon-street-food-guide",
//     relatedCities: ["yangon"]
//   },
//   {
//     id: "article3",
//     title: "Trekking in Kalaw: A Guide to Myanmar's Hill Country",
//     summary: "Experience the stunning landscapes and unique cultures of Myanmar's Shan State with an unforgettable trek from Kalaw.",
//     image_url: "https://images.unsplash.com/photo-1584412370502-1dd6d55d1060?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     url: "/articles/trekking-kalaw-guide",
//     relatedCities: ["kalaw", "shan state"] 
//   }
  
// ];


// export const getUniqueCitiesFromArticles = () => {
//   const allCities = articlesData.reduce((acc, article) => {
//     if (article.relatedCities) {
//       article.relatedCities.forEach(city => acc.add(city));
//     }
//     return acc;
//   }, new Set());
//   return Array.from(allCities).sort();
// };

const articlesData = [
  {
    "id": 1,
    "name": "Exploring Yangon: The Gateway to Myanmar",
    "slug": "exploring-yangon",
    "image_url": "https://i.pinimg.com/736x/a4/5e/60/a45e6007c6c0bc407fb1f1c8e202029b.jpg",
    "description": "Nestled along the Bay of Bengal, Ngapali stands as Myanmar's most exquisite and serene beach destination. Far removed from the bustling tourist trails of its Southeast Asian counterparts, this idyllic stretch of coastline offers a genuine slice of paradise for those seeking tranquility, natural beauty, and an authentic cultural experience. With its powdery white sands, crystal-clear turquoise waters, and a laid-back atmosphere that feels truly timeless, Ngapali lives up to its reputation as Myanmar's pristine beach haven.",
    "is_active": true,
    "is_featured": true,
    "article_category_id": 1,
    "deleted_at": null,
    "created_at": "2025-06-04T12:57:41.000000Z",
    "updated_at": "2025-06-04T12:57:41.000000Z"
  },
  {
    "id": 2,
    "name": "Bagan: The Land of Ancient Temples",
    "slug": "bagan-ancient-temples",
    "image_url": "https://i.pinimg.com/736x/08/d1/61/08d161a12ad3f9c7a51edb17d44281c6.jpg",
    "description": "Nestled along the Bay of Bengal, Ngapali stands as Myanmar's most exquisite and serene beach destination. Far removed from the bustling tourist trails of its Southeast Asian counterparts, this idyllic stretch of coastline offers a genuine slice of paradise for those seeking tranquility, natural beauty, and an authentic cultural experience. With its powdery white sands, crystal-clear turquoise waters, and a laid-back atmosphere that feels truly timeless, Ngapali lives up to its reputation as Myanmar's pristine beach haven.",
    "is_active": true,
    "is_featured": true,
    "article_category_id": 2,
    "deleted_at": null,
    "created_at": "2025-06-04T12:57:41.000000Z",
    "updated_at": "2025-06-04T12:57:41.000000Z"
  },
  {
    "id": 3,
    "name": "Inle Lake: Myanmar's Floating World",
    "slug": "inle-lake",
    "image_url": "https://i.pinimg.com/736x/54/bb/18/54bb18058933dca95b4d4406f3f7f0f1.jpg",
    "description": "Nestled along the Bay of Bengal, Ngapali stands as Myanmar's most exquisite and serene beach destination. Far removed from the bustling tourist trails of its Southeast Asian counterparts, this idyllic stretch of coastline offers a genuine slice of paradise for those seeking tranquility, natural beauty, and an authentic cultural experience. With its powdery white sands, crystal-clear turquoise waters, and a laid-back atmosphere that feels truly timeless, Ngapali lives up to its reputation as Myanmar's pristine beach haven.",
    "is_active": true,
    "is_featured": true,
    "article_category_id": 3,
    "deleted_at": null,
    "created_at": "2025-06-04T12:57:41.000000Z",
    "updated_at": "2025-06-04T12:57:41.000000Z"
  },
  {
    "id": 4,
    "name": "Mandalay: Myanmar's Cultural Heartland",
    "slug": "mandalay",
    "image_url": "https://i.pinimg.com/736x/5c/f9/d0/5cf9d0c9f2404534552f764dca5f951a.jpg",
    "description": "Nestled along the Bay of Bengal, Ngapali stands as Myanmar's most exquisite and serene beach destination. Far removed from the bustling tourist trails of its Southeast Asian counterparts, this idyllic stretch of coastline offers a genuine slice of paradise for those seeking tranquility, natural beauty, and an authentic cultural experience. With its powdery white sands, crystal-clear turquoise waters, and a laid-back atmosphere that feels truly timeless, Ngapali lives up to its reputation as Myanmar's pristine beach haven.",
    "is_active": true,
    "is_featured": true,
    "article_category_id": 1,
    "deleted_at": null,
    "created_at": "2025-06-04T12:57:41.000000Z",
    "updated_at": "2025-06-04T12:57:41.000000Z"
  },
  {
    "id": 5,
    "name": "Ngapali: Myanmar's Pristine Beach Paradise",
    "slug": "ngapali-beach",
    "image_url": "https://i.pinimg.com/736x/9e/24/b1/9e24b11f81d625c70d39e6d6d9b1d136.jpg",
    "description": "Nestled along the Bay of Bengal, Ngapali stands as Myanmar's most exquisite and serene beach destination. Far removed from the bustling tourist trails of its Southeast Asian counterparts, this idyllic stretch of coastline offers a genuine slice of paradise for those seeking tranquility, natural beauty, and an authentic cultural experience. With its powdery white sands, crystal-clear turquoise waters, and a laid-back atmosphere that feels truly timeless, Ngapali lives up to its reputation as Myanmar's pristine beach haven.",
    "is_active": true,
    "is_featured": true,
    "article_category_id": 4,
    "deleted_at": null,
    "created_at": "2025-06-04T12:57:41.000000Z",
    "updated_at": "2025-06-04T12:57:41.000000Z"
  },
  
 
]

export default articlesData;