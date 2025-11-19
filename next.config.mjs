// next.config.mjs
//  @type {import('next').NextConfig} 
/** @type {import('next').NextConfig} */
const nextConfig = {
   compiler: {
    removeConsole: false,
     swcMinify: true,
  },
  experimental: {
    optimizePackageImports: ['react-icons'], // disables just for react-icons
  },
};



export default nextConfig;
