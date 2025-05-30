// This component will be a Server Component by default in the App Router
import Image from 'next/image';
import styles from './HeroSection.module.css';

// Make the component async to await data fetching
const HeroSection = async () => {
  let heroData = null;
  let error = null;

  try {
    // Direct fetch call in a Server Component
    // Next.js fetch is automatically extended to provide caching and revalidation features.
    const response = await fetch('http://localhost:8000/api/v1/home', {
      // You can add caching options here. For truly dynamic, no-store is an option:
      // cache: 'no-store', // This ensures data is always fresh on every request
    });

    if (!response.ok) {
      // If the API call fails, throw an error to be caught by an error.js boundary
      throw new Error(`Failed to fetch hero data: ${response.status}`);
    }
    heroData = await response.json();
  } catch (err) {
    console.error("Error fetching hero data in Server Component:", err);
    error = err.message; // In a real app, you might render an error UI or re-throw
  }

  // Handle cases where data might not be available or an error occurred
  if (error || !heroData || !heroData.video_url || !heroData.image_url) {
    // You might want a more sophisticated error UI or fallback content here
    return <div className={styles.errorContainer}>Error loading hero section: {error || "Data missing."}</div>;
  }

  return (
    <div className={styles.videoContainer}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
        poster={heroData.image_url} // Use image_url from API as poster
      >
        <source
          src={heroData.video_url} // Use video_url from API
          type="video/mp4"
        />
        {/* <Image
          width={1920}
          height={1080}
          src={heroData.image_url}
          alt={heroData.name || "Fallback Image"}
          className={styles.fallbackImage}
        /> */}
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default HeroSection;