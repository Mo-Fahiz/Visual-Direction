import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-5a33ff699b8d4e15a765e8394fbc6d74.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
