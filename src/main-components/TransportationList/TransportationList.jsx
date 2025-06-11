// import React from 'react';
// import styles from './TransportationList.module.css';
// import Link from 'next/link';
// import { FaPlane, FaBus, FaTrain, FaShip, FaCar } from 'react-icons/fa';
// import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs';

// const TransportationListPage = () => {
//   const breadcrumbSegments = [
   
//     { label: 'Transportation'}
//   ];
//   return (
//     <div className={styles.transportationPage}>
//       <Breadcrumbs segments={breadcrumbSegments}/>
//       <h1 className={styles.pageTitle}>Transportation in Myanmar</h1>

//       {/* I. Getting To Myanmar (International Arrivals) */}
//       <section className={styles.section}>
//         <h2 className={styles.sectionHeading}>Getting To Myanmar (International Arrivals)</h2>
//         <p>Myanmar is accessible by air, land, and sea, though air travel is the most common for international visitors.</p>
//         <h3>International Airports:</h3>
//         <ul>
//           <li>Yangon (RGN)</li>
//           <li>Mandalay (MDL)</li>
//           <li>Naypyidaw (NYT)</li>
//         </ul>
//         <h3>Major International Connections:</h3>
//         <p>Direct flights are frequently available from major hubs in Asia, including:</p>
//         <ul>
//           <li>Bangkok (BKK)</li>
//           <li>Singapore (SIN)</li>
//           <li>Kuala Lumpur (KUL)</li>
//         </ul>
//         <h3>Border Crossings (Land/Sea):</h3>
//         <p>Several land border crossings are open, primarily with Thailand. However, most require pre-arranged tours or special permits. Visa requirements are strict.</p>
//         <p className={styles.visaInfo}>
//           <strong>Visa Information:</strong> A visa is required for most nationalities. Please check the <Link href="https://evisa.moip.gov.mm/home" className={styles.visaLink}>
//     Official Government Website
//   </Link> for the latest requirements.
//         </p>
//       </section>

      
//       <section className={styles.section}>
//         <h2 className={styles.sectionHeading}>Getting Around Myanmar (Domestic Travel)</h2>

//         {/* A. By Air (Domestic Flights) */}
//         <div className={styles.transportMode}>
//           <FaPlane className={styles.transportIcon} />
//           <h3>By Air (Domestic Flights)</h3>
//           <p>Domestic flights are a fast and convenient way to travel long distances within Myanmar.</p>
//           <h4>Major Domestic Airlines:</h4>
//           <ul>
//             <li>Myanmar National Airlines</li>
//             <li>Air KBZ</li>
//             <li>Golden Myanmar Airlines</li>
//           </ul>
//           <h4>Key Routes and Flight Durations:</h4>
//           <ul>
//             <li>Yangon to Bagan: ~1.5 hours</li>
//             <li>Mandalay to Heho (Inle Lake): ~30 minutes</li>
//           </ul>
//           <p>Booking advice: Book online or through travel agencies/hotels. Be aware that delays or cancellations can occur on less popular routes.</p>
//         </div>

//         {/* B. By Bus */}
//         <div className={styles.transportMode}>
//           <FaBus className={styles.transportIcon} />
//           <h3>By Bus</h3>
//           <p>An extensive and affordable network connects most cities and towns.</p>
//           <h4>Regular vs. VIP Buses:</h4>
//           <p>VIP buses offer greater comfort and amenities (e.g., reclining seats, air conditioning).</p>
//           <h4>Major Routes and Journey Times:</h4>
//           <ul>
//             <li>Yangon to Mandalay: ~8-10 hours</li>
//             <li>Yangon to Inle Lake (Heho): ~12-14 hours</li>
//           </ul>
//           <p>Booking information: Purchase tickets at bus stations, online, or through hotels. Dress warmly for AC and bring snacks.</p>
//         </div>

//         {/* C. By Train */}
//         <div className={styles.transportMode}>
//           <FaTrain className={styles.transportIcon} />
//           <h3>By Train</h3>
//           <p>A scenic but slower option. Experience local life and stunning landscapes.</p>
//           <h4>Key Scenic Routes:</h4>
//           <ul>
//             <li>Pyin Oo Lwin to Hsipaw (Gokteik Viaduct)</li>
//             <li>Mandalay to Yangon (long journey)</li>
//           </ul>
//           <h4>Classes of Travel:</h4>
//           <p>Ordinary, Upper, and Sleeper classes are available. Expect varying levels of comfort.</p>
//           <p>Booking advice: Purchase tickets at train stations.</p>
//         </div>

//         {/* D. By River/Boat */}
//         <div className={styles.transportMode}>
//           <FaShip className={styles.transportIcon} />
//           <h3>By River/Boat</h3>
//           <p>Scenic routes along the Ayeyarwady River and Inle Lake.</p>
//           <h4>Ayeyarwady River:</h4>
//           <p>Mandalay to Bagan: Express boats, slow boats, and luxury cruises are available.</p>
//           <h4>Inle Lake:</h4>
//           <p>Local longtail boats for sightseeing.</p>
//         </div>

//         {/* E. By Private Car / Taxi */}
//         <div className={styles.transportMode}>
//           <FaCar className={styles.transportIcon} />
//           <h3>By Private Car / Taxi</h3>
//           <p>Self-driving rental cars are generally not allowed for foreigners.</p>
//           <p>Hiring a car with a driver is recommended for inter-city travel or full-day sightseeing.</p>
//           <h4>Taxi Availability:</h4>
//           <ul>
//             <li>Yangon: Plentiful, metered/negotiated</li>
//             <li>Mandalay: More motorbike taxis, negotiation</li>
//             <li>Naypyidaw: Always negotiate</li>
//           </ul>
//           <p>Ride-hailing apps: Grab is available in Yangon and Mandalay.</p>
//         </div>

//         {/* F. Local Transport (City/Area Specific) */}
//         <div className={styles.transportMode}>
//           <h3>Local Transport (City/Area Specific)</h3>
//           <h4>Bagan:</h4>
//           <p>E-bikes (electric scooters), horse carts, bicycles.</p>
//           <h4>Inle Lake:</h4>
//           <p>Longtail boats (main transport on the lake).</p>
//           <h4>Mandalay:</h4>
//           <p>Motorbike taxis, trishaws, shared pickups.</p>
//           <h4>Yangon:</h4>
//           <p>Taxis, local buses (advise caution for tourists).</p>
//           <h4>Kalaw/Hsipaw:</h4>
//           <p>Trekking/walking (and local taxis/pickups for trailheads).</p>
//           <h4>Pyin Oo Lwin:</h4>
//           <p>Horse carts.</p>
//           <p className={styles.motorbikeWarning}>
//             <strong>Motorbike Rentals:</strong> Strong safety warning and note on legality/licensing for foreigners.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default TransportationListPage;

//*** with API ***/
"use client";

import React, { useState, useEffect } from 'react';
import styles from './TransportationList.module.css';
import Link from 'next/link';
import { FaPlane, FaBus, FaTrain, FaShip, FaCar } from 'react-icons/fa';
import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs';
import Loading from '../../components/ui/Loading/Loading'; // Import the Loading component

const TransportationListPage = () => {
  const [transportationData, setTransportationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const breadcrumbSegments = [
    { label: 'Transportation' }
  ];

  useEffect(() => {
    const fetchTransportationData = async () => {
      try {
        const response = await fetch('/api/v1/transportation'); // Your API endpoint
        if (!response.ok) {
          throw new Error(`Failed to fetch transportation data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setTransportationData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching transportation data:', error);
        setError('Failed to load transportation data');
        setLoading(false);
      }
    };

    fetchTransportationData();
  }, []);

  if (loading) {
    return (
      <div className={styles.transportationPage}>
        <Loading message="Loading transportation information..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.transportationPage}>
        <Breadcrumbs segments={breadcrumbSegments} />
        <h1 className={styles.pageTitle}>Transportation in Myanmar</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!transportationData) {
    return (
      <div className={styles.transportationPage}>
        <Breadcrumbs segments={breadcrumbSegments} />
        <h1 className={styles.pageTitle}>Transportation in Myanmar</h1>
        <p>No transportation information found at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <div className={styles.transportationPage}>
      <Breadcrumbs segments={breadcrumbSegments} />
      <h1 className={styles.pageTitle}>Transportation in Myanmar</h1>

      {/* I. Getting To Myanmar (International Arrivals) */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Getting To Myanmar (International Arrivals)</h2>
        <p>{transportationData.internationalArrivalsDescription || "Myanmar is accessible by air, land, and sea, though air travel is the most common for international visitors."}</p>
        <h3>International Airports:</h3>
        <ul>
          {transportationData.internationalAirports && transportationData.internationalAirports.map((airport, index) => (
            <li key={index}>{airport}</li>
          ))}
        </ul>
        <h3>Major International Connections:</h3>
        <p>Direct flights are frequently available from major hubs in Asia, including:</p>
        <ul>
          {transportationData.majorInternationalConnections && transportationData.majorInternationalConnections.map((connection, index) => (
            <li key={index}>{connection}</li>
          ))}
        </ul>
        <h3>Border Crossings (Land/Sea):</h3>
        <p>{transportationData.borderCrossingsDescription || "Several land border crossings are open, primarily with Thailand. However, most require pre-arranged tours or special permits. Visa requirements are strict."}</p>
        <p className={styles.visaInfo}>
          <strong>Visa Information:</strong> A visa is required for most nationalities. Please check the <Link href="https://evisa.moip.gov.mm/home" className={styles.visaLink}>
            Official Government Website
          </Link> for the latest requirements.
        </p>
      </section>

      {/* Getting Around Myanmar (Domestic Travel) */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Getting Around Myanmar (Domestic Travel)</h2>

        {/* A. By Air (Domestic Flights) */}
        <div className={styles.transportMode}>
          <FaPlane className={styles.transportIcon} />
          <h3>By Air (Domestic Flights)</h3>
          <p>{transportationData.byAirDescription || "Domestic flights are a fast and convenient way to travel long distances within Myanmar."}</p>
          <h4>Major Domestic Airlines:</h4>
          <ul>
            {transportationData.majorDomesticAirlines && transportationData.majorDomesticAirlines.map((airline, index) => (
              <li key={index}>{airline}</li>
            ))}
          </ul>
          <h4>Key Routes and Flight Durations:</h4>
          <ul>
            {transportationData.keyRoutesAndFlightDurations && transportationData.keyRoutesAndFlightDurations.map((route, index) => (
              <li key={index}>{route}</li>
            ))}
          </ul>
          <p>{transportationData.byAirBookingAdvice || "Book online or through travel agencies/hotels. Be aware that delays or cancellations can occur on less popular routes."}</p>
        </div>

        {/* B. By Bus */}
        <div className={styles.transportMode}>
          <FaBus className={styles.transportIcon} />
          <h3>By Bus</h3>
          <p>{transportationData.byBusDescription || "An extensive and affordable network connects most cities and towns."}</p>
          <h4>Regular vs. VIP Buses:</h4>
          <p>{transportationData.byBusRegularVsVIP || "VIP buses offer greater comfort and amenities (e.g., reclining seats, air conditioning)."}</p>
          <h4>Major Routes and Journey Times:</h4>
          <ul>
            {transportationData.byBusMajorRoutes && transportationData.byBusMajorRoutes.map((route, index) => (
              <li key={index}>{route}</li>
            ))}
          </ul>
          <p>{transportationData.byBusBookingInformation || "Purchase tickets at bus stations, online, or through hotels. Dress warmly for AC and bring snacks."}</p>
        </div>

        {/* C. By Train */}
        <div className={styles.transportMode}>
          <FaTrain className={styles.transportIcon} />
          <h3>By Train</h3>
          <p>{transportationData.byTrainDescription || "A scenic but slower option. Experience local life and stunning landscapes."}</p>
          <h4>Key Scenic Routes:</h4>
          <ul>
            {transportationData.byTrainKeyScenicRoutes && transportationData.byTrainKeyScenicRoutes.map((route, index) => (
              <li key={index}>{route}</li>
            ))}
          </ul>
          <h4>Classes of Travel:</h4>
          <p>{transportationData.byTrainClassesOfTravel || "Ordinary, Upper, and Sleeper classes are available. Expect varying levels of comfort."}</p>
          <p>{transportationData.byTrainBookingAdvice || "Purchase tickets at train stations."}</p>
        </div>

        {/* D. By River/Boat */}
        <div className={styles.transportMode}>
          <FaShip className={styles.transportIcon} />
          <h3>By River/Boat</h3>
          <p>{transportationData.byRiverBoatDescription || "Scenic routes along the Ayeyarwady River and Inle Lake."}</p>
          <h4>Ayeyarwady River:</h4>
          <p>{transportationData.byRiverBoatAyeyarwadyRiver || "Mandalay to Bagan: Express boats, slow boats, and luxury cruises are available."}</p>
          <h4>Inle Lake:</h4>
          <p>{transportationData.byRiverBoatInleLake || "Local longtail boats for sightseeing."}</p>
        </div>

        {/* E. By Private Car / Taxi */}
        <div className={styles.transportMode}>
          <FaCar className={styles.transportIcon} />
          <h3>By Private Car / Taxi</h3>
          <p>{transportationData.byPrivateCarDescription || "Self-driving rental cars are generally not allowed for foreigners."}</p>
          <p>{transportationData.byPrivateCarHiringAdvice || "Hiring a car with a driver is recommended for inter-city travel or full-day sightseeing."}</p>
          <h4>Taxi Availability:</h4>
          <ul>
            {transportationData.byPrivateCarTaxiAvailability && transportationData.byPrivateCarTaxiAvailability.map((availability, index) => (
              <li key={index}>{availability}</li>
            ))}
          </ul>
          <p>{transportationData.byPrivateCarRideHailingApps || "Ride-hailing apps: Grab is available in Yangon and Mandalay."}</p>
        </div>

        {/* F. Local Transport (City/Area Specific) */}
        <div className={styles.transportMode}>
          <h3>Local Transport (City/Area Specific)</h3>
          <h4>Bagan:</h4>
          <p>{transportationData.localTransportBagan || "E-bikes (electric scooters), horse carts, bicycles."}</p>
          <h4>Inle Lake:</h4>
          <p>{transportationData.localTransportInleLake || "Longtail boats (main transport on the lake)."}</p>
          <h4>Mandalay:</h4>
          <p>{transportationData.localTransportMandalay || "Motorbike taxis, trishaws, shared pickups."}</p>
          <h4>Yangon:</h4>
          <p>{transportationData.localTransportYangon || "Taxis, local buses (advise caution for tourists)."}</p>
          <h4>Kalaw/Hsipaw:</h4>
          <p>{transportationData.localTransportKalawHsipaw || "Trekking/walking (and local taxis/pickups for trailheads)."}</p>
          <h4>Pyin Oo Lwin:</h4>
          <p>{transportationData.localTransportPyinOoLwin || "Horse carts."}</p>
          <p className={styles.motorbikeWarning}>
            <strong>Motorbike Rentals:</strong> {transportationData.motorbikeRentalsWarning || "Strong safety warning and note on legality/licensing for foreigners."}
          </p>
        </div>
      </section>
    </div>
  );
};

export default TransportationListPage;