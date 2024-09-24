/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://hr-360-one.vercel.app',
  },
  async redirects() {
      return [
        {
          source: '/',
          destination: '/dashboard',
          permanent: true,
        },
      ]
    },
};

export default nextConfig;
