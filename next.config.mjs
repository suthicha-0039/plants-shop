/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [
      {
        hostname: 'park.co.th',
      },
    ],
  },
};

export default nextConfig;
