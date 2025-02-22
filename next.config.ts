import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["liveblocks.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "liveblocks.io",
        port: '',
      }
    ]
  }
};

export default nextConfig;
