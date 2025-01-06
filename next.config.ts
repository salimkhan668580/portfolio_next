import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React Strict Mode
  swcMinify: true, // Enables SWC-based minification
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Example of customizing the Webpack configuration for client-side
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
};

export default nextConfig;
