import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  allowedDevOrigins: ["192.168.0.3"],
};

export default nextConfig;
