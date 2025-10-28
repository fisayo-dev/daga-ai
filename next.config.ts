import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, '..'),
  },
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
