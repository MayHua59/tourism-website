// // import React from 'react';
// // import HotelCard from '../../components/ui/HotelCard/HotelCard'; 
// // import  hotelsData  from '../../data/hotels'; 
// // import styles from './HotelList.module.css'; 
// // const HotelListPage = () => {
  
// //   return (
// //     <div className={styles.hotelListContainer}>
// //       <h2 className={styles.hotelListTitle}>Explore Our Hotels</h2>
// //       <div className={styles.hotelGrid}>
// //         {hotelsData.map((hotel) => (
// //           <HotelCard key={hotel.id} hotel={hotel} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default HotelListPage;

// //*** with API ***/
// "use client";

// import React, { useState, useEffect } from 'react';
// import HotelCard from '../../components/ui/HotelCard/HotelCard';
// import styles from './HotelList.module.css';
// import Loading from '../../components/ui/Loading/Loading'; // Import the Loading component

// const HotelListPage = () => {
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await fetch('/api/v1/hotels'); // Your API endpoint
//         if (!response.ok) {
//           throw new Error(`Failed to fetch hotels: ${response.status} ${response.statusText}`);
//         }
//         const data = await response.json();
//         setHotels(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching hotels:', error);
//         setError('Failed to load hotels');
//         setLoading(false);
//       }
//     };

//     fetchHotels();
//   }, []);

//   if (loading) {
//     return (
//       <div className={styles.hotelListContainer}>
//         <Loading message="Loading hotels..." />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.hotelListContainer}>
//         <h2 className={styles.hotelListTitle}>Explore Our Hotels</h2>
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   if (!hotels || hotels.length === 0) {
//     return (
//       <div className={styles.hotelListContainer}>
//         <h2 className={styles.hotelListTitle}>Explore Our Hotels</h2>
//         <p>No hotels found at the moment. Please check back later!</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.hotelListContainer}>
//       <h2 className={styles.hotelListTitle}>Explore Our Hotels</h2>
//       <div className={styles.hotelGrid}>
//         {hotels.map((hotel) => (
//           <HotelCard key={hotel.id} hotel={hotel} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HotelListPage;

//*** with Pagination ***/
"use client";

import React, { useState, useEffect } from 'react';
import HotelCard from '../../components/ui/HotelCard/HotelCard';
import styles from './HotelList.module.css';
import Loading from '../../components/ui/Loading/Loading';
import Pagination from '../../components/ui/Pagination/Pagination';

const HotelListPage = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        console.log(`Fetching page ${currentPage} with ${perPage} items per page`);
        const response = await fetch(`/api/v1/hotels?page=${currentPage}&per_page=${perPage}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch hotels: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log("API Data:", data);
        setHotels(data.data);
        setTotalItems(data.total);
        setTotalPages(data.last_page);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setError('Failed to load hotels');
        setLoading(false);
      }
    };

    fetchHotels();
  }, [currentPage, perPage]);

  const handlePageChange = (newPage) => {
    console.log("New Page:", newPage);
    setCurrentPage(newPage);
  };

  const handlePerPageChange = (newPerPage) => {
    console.log("New Per Page:", newPerPage);
    setPerPage(newPerPage);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className={styles.hotelListContainer}>
        <Loading message="Loading hotels..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.hotelListContainer}>
        <h2 className={styles.hotelListTitle}>Explore Our Hotels</h2>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!hotels || hotels.length === 0) {
    return (
      <div className={styles.hotelListContainer}>
        <h2 className={styles.hotelListTitle}>Explore Our Hotels</h2>
        <p>No hotels found at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <div className={styles.hotelListContainer}>
      <h2 className={styles.hotelListTitle}>Explore Our Hotels</h2>
      <div className={styles.hotelGrid}>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        perPage={perPage}
        onPageChange={handlePageChange}
        onPerPageChange={handlePerPageChange}
      />
    </div>
  );
};

export default HotelListPage;