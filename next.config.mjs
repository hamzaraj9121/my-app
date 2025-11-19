// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: false,
  },

  swcMinify: true, // Keep minifier enabled

  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;
