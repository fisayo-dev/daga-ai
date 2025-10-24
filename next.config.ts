import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allow images from any HTTPS source
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Wildcard to allow all hostnames
        pathname: "/**", // Wildcard to allow all paths
      },
      {
        protocol: "http", // Optionally allow HTTP for local development or specific cases
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
