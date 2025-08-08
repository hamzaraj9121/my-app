// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['react-icons'], // disables just for react-icons
  },
};

export default nextConfig;
