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
      // commondatastorage.googleapis.com

      {
        protocol: 'https',
        hostname: 'commondatastorage.googleapis.com',
        port: '',
        pathname: '/**', // Allows any path under this hostname
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**', // Allows any path under this hostname
      },
      // You can add other hostnames here if needed
      // {
      //   protocol: 'https',
      //   hostname: 'another-image-provider.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
    
  },
};

export default nextConfig;
