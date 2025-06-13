// // "use client";

// // import React from 'react';
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import styles from './EventList.module.css';
// // import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';  

// // const formatDate = (dateString) => {
// //   if (!dateString) return 'Date Unavailable';

// //   try {
// //     const date = new Date(dateString);

// //     // Check if the date is valid
// //     if (isNaN(date.getTime())) {
// //       console.error("Invalid date format:", dateString);
// //       return 'Date Unavailable';
// //     }

// //     return date.toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'long',
// //       day: 'numeric',
// //     });
// //   } catch (error) {
// //     console.error("Error formatting date:", dateString, error);
// //     return 'Date Unavailable';
// //   }
// // };

// // const EventListPage = ({ events }) => {
// //   if (!events || events.length === 0) {
// //     return (
// //       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
// //         <h1 className={styles.pageTitle}>Upcoming Events in Myanmar</h1>
// //         <p className={styles.noItemsText}>No events found at the moment. Please check back later!</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className={styles.pageContainer}>
// //       <h1 className={styles.pageTitle}>Discover Exciting Events in Myanmar</h1>
// //       <p className={styles.pageSubtitle}>Plan your trip around these amazing cultural festivals and happenings.</p>
// //       <div className={styles.eventsGrid}>
// //         {events.map(event => (
// //           <Link key={event.id} href={`/events/${event.slug}`} className={styles.eventCardLink}>
// //             <div className={styles.eventCard}>
// //               {event.image_url && (
// //                 <div className={styles.eventImageWrapper}>
// //                   <Image
// //                     src={event.image_url}
// //                     alt={`Image for ${event.name}`}
// //                     layout="fill"
// //                     objectFit="cover"
// //                     className={styles.eventImage}
// //                   />
// //                 </div>
// //               )}
// //               <div className={styles.eventInfo}>
// //                 <h2 className={styles.eventName}>{event.name}</h2>
// //                 <div className={styles.eventDates}>
// //                   <div className={styles.startDate}>
// //                     <FaCalendarAlt />
// //                     <span>Start Date: <span style={{fontWeight: 'bold'}} >{formatDate(event.start_date)}</span></span>
// //                   </div>
// //                   <div className={styles.endDate}>
// //                     <FaCalendarAlt />
// //                     <span>End Date: <span style={{fontWeight: 'bold'}} >{formatDate(event.end_date)}</span></span>
// //                   </div>
// //                 </div>
// //                 <div className={styles.eventLocation}>
// //                   <FaMapMarkerAlt />
// //                   {event.location}
// //                 </div>
// //                 {event.short_description && (
// //                   <p className={styles.eventDescription}>
// //                     {event.short_description.substring(0, 80)}
// //                     {event.short_description.length > 80 ? '...' : ''}
// //                   </p>
// //                 )}
// //                 <Link href={`/events/${event.slug}`} className={styles.viewDetailsButton}>
// //                   Explore the Event
// //                 </Link>
// //               </div>
// //             </div>
// //           </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default EventListPage;

// // *** start Section with Static Data ***//
// "use client";

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './EventList.module.css';
// import { formatDate } from '../../utils/date-formatter';
// import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'; 

// const EventList = ({events}) => {
//   if (!events || events.length === 0) {
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.pageTitle}>Upcoming Events in Myanmar</h1>
//         <p className={styles.noItemsText}>No events found at the moment. Please check back later!</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <h1 className={styles.pageTitle}>Discover Exciting Events in Myanmar</h1>
//       <p className={styles.pageSubtitle}>Plan your trip around these amazing cultural festivals and happenings.</p>
//       <div className={styles.eventsGrid}>
//         {events.map(event => (
//           <Link key={event.id} href={`/events/${event.slug}`} className={styles.eventCardLink}>
//             <div className={styles.eventCard}>
//               {event.image_url && (
//                 <div className={styles.eventImageWrapper}>
//                   <Image
//                     src={event.image_url}
//                     alt={`Image for ${event.name}`}
//                     layout="fill"
//                     objectFit="cover"
//                     className={styles.eventImage}
//                   />
//                 </div>
//               )}
//               <div className={styles.eventInfo}>
//                 <h2 className={styles.eventName}>{event.name}</h2>
//                 <div className={styles.eventDates}>
//                   <div className={styles.startDate}>
//                     <FaCalendarAlt />
//                     <span>
//                       Start Date:{' '}
//                       <span style={{ fontWeight: 'bold' }}>{formatDate(event.start_date)}</span>
//                     </span>
//                   </div>
//                   <div className={styles.endDate}>
//                     <FaCalendarAlt />
//                     <span>
//                       End Date: <span style={{ fontWeight: 'bold' }}>{formatDate(event.end_date)}</span>
//                     </span>
//                   </div>
//                 </div>
//                 {/* {event.city_id && (
//                   <div className={styles.eventLocation}>
//                     <FaMapMarkerAlt />
//                     Location: {event.city_id}
//                   </div>
//                 )} */}
//                 <p className={styles.eventDescription}>
//                   {event.description.substring(0, 80)}
//                   {event.description.length > 80 ? '...' : ''}
//                 </p>
//                 <Link href={`/events/${event.slug}`} className={styles.viewDetailsButton}>
//                   Explore the Event
//                 </Link>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventList;

//*** with API ***/
// "use client";

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './EventList.module.css';
// import { formatDate } from '../../utils/date-formatter';
// import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
// import Loading from '../../components/ui/Loading/Loading'; // Import the Loading component

// const EventList = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch('/api/v1/events'); // Your API endpoint
//         if (!response.ok) {
//           throw new Error(`Failed to fetch events: ${response.status} ${response.statusText}`);
//         }
//         const data = await response.json();
//         setEvents(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         setError('Failed to load events');
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   if (loading) {
//     return (
//       <div className={styles.pageContainer}>
//         <Loading message="Loading events..." />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.pageTitle}>Upcoming Events in Myanmar</h1>
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   if (!events || events.length === 0) {
//     return (
//       <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
//         <h1 className={styles.pageTitle}>Upcoming Events in Myanmar</h1>
//         <p className={styles.noItemsText}>No events found at the moment. Please check back later!</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <h1 className={styles.pageTitle}>Discover Exciting Events in Myanmar</h1>
//       <p className={styles.pageSubtitle}>Plan your trip around these amazing cultural festivals and happenings.</p>
//       <div className={styles.eventsGrid}>
//         {events.map(event => (
//           <Link key={event.id} href={`/events/${event.slug}`} className={styles.eventCardLink}>
//             <div className={styles.eventCard}>
//               {event.image_url && (
//                 <div className={styles.eventImageWrapper}>
//                   <Image
//                     src={event.image_url}
//                     alt={`Image for ${event.name}`}
//                     layout="fill"
//                     objectFit="cover"
//                     className={styles.eventImage}
//                   />
//                 </div>
//               )}
//               <div className={styles.eventInfo}>
//                 <h2 className={styles.eventName}>{event.name}</h2>
//                 <div className={styles.eventDates}>
//                   <div className={styles.startDate}>
//                     <FaCalendarAlt />
//                     <span>
//                       Start Date:{' '}
//                       <span style={{ fontWeight: 'bold' }}>{formatDate(event.start_date)}</span>
//                     </span>
//                   </div>
//                   <div className={styles.endDate}>
//                     <FaCalendarAlt />
//                     <span>
//                       End Date: <span style={{ fontWeight: 'bold' }}>{formatDate(event.end_date)}</span>
//                     </span>
//                   </div>
//                 </div>
//                 {/* {event.city_id && (
//                   <div className={styles.eventLocation}>
//                     <FaMapMarkerAlt />
//                     Location: {event.city_id}
//                   </div>
//                 )} */}
//                 <p className={styles.eventDescription}>
//                   {event.description.substring(0, 80)}
//                   {event.description.length > 80 ? '...' : ''}
//                 </p>
//                 <Link href={`/events/${event.slug}`} className={styles.viewDetailsButton}>
//                   Explore the Event
//                 </Link>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventList;

//*** with Pagination ***/
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './EventList.module.css';
import { formatDate } from '../../utils/date-formatter';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Loading from '../../components/ui/Loading/Loading';
import Pagination from '../../components/ui/Pagination/Pagination';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(2);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log(`Fetching page ${currentPage} with ${perPage} items per page`);
        const response = await fetch(`/api/v1/events?page=${currentPage}&per_page=${perPage}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch events: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log("API Data:", data);
        setEvents(data.data);
        setTotalItems(data.total);
        setTotalPages(data.last_page);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('Failed to load events');
        setLoading(false);
      }
    };

    fetchEvents();
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
      <div className={styles.pageContainer}>
        <Loading message="Loading events..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Upcoming Events in Myanmar</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!events || events.length === 0) {
    return (
      <div className={styles.pageContainer} style={{ textAlign: 'center' }}>
        <h1 className={styles.pageTitle}>Upcoming Events in Myanmar</h1>
        <p className={styles.noItemsText}>No events found at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Discover Exciting Events in Myanmar</h1>
      <p className={styles.pageSubtitle}>Plan your trip around these amazing cultural festivals and happenings.</p>
      <div className={styles.eventsGrid}>
        {events.map(event => (
          <Link key={event.id} href={`/events/${event.slug}`} className={styles.eventCardLink}>
            <div className={styles.eventCard}>
              {event.image_url && (
                <div className={styles.eventImageWrapper}>
                  <Image
                    src={event.image_url}
                    alt={`Image for ${event.name}`}
                    layout="fill"
                    objectFit="cover"
                    className={styles.eventImage}
                  />
                </div>
              )}
              <div className={styles.eventInfo}>
                <h2 className={styles.eventName}>{event.name}</h2>
                <div className={styles.eventDates}>
                  <div className={styles.startDate}>
                    <FaCalendarAlt />
                    <span>
                      Start Date:{' '}
                      <span style={{ fontWeight: 'bold' }}>{formatDate(event.start_date)}</span>
                    </span>
                  </div>
                  <div className={styles.endDate}>
                    <FaCalendarAlt />
                    <span>
                      End Date: <span style={{ fontWeight: 'bold' }}>{formatDate(event.end_date)}</span>
                    </span>
                  </div>
                </div>
                {/* {event.city_id && (
                  <div className={styles.eventLocation}>
                    <FaMapMarkerAlt />
                    Location: {event.city_id}
                  </div>
                )} */}
                <p className={styles.eventDescription}>
                  {event.description.substring(0, 80)}
                  {event.description.length > 80 ? '...' : ''}
                </p>
                <Link href={`/events/${event.slug}`} className={styles.viewDetailsButton}>
                  Explore the Event
                </Link>
              </div>
            </div>
          </Link>
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

export default EventList;