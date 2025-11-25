// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: false,
  },



  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;
