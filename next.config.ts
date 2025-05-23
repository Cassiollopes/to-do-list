import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "idocode.com.br",
      },
    ],
  },
};

export default nextConfig;
