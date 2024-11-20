import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  fontLoader: false, // Disable Next.js font optimization
  experimental: {
    optimizeCss: true, // This is optional, just for CSS optimizations
  }

};

export default nextConfig;
