/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  images: {
    // Disable image optimization
    unoptimized: true,
  },
};

module.exports = nextConfig;
