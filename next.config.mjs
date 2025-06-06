/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
       {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // Allows any path under this hostname
      },
      {
        protocol: 'https',
        hostname: 'commondatastorage.googleapis.com',
        port: '',
        pathname: '/**', // Allows any path under this hostname
      },
      {
        protocol: 'http', // For localhost, http is fine
        hostname: 'localhost',
        port: '', // Port can be an empty string
        pathname: '/**', 
      },
      
      { 
        protocol: 'https', 
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      
    ],
    
  },
};

export default nextConfig;
