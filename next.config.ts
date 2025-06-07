import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images:{
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "placehold.co",
      },
      {
        protocol: 'https',
        hostname: "avatars.githubusercontent.com",
      },
    ]
  },
  experimental: {
  //  ppr: 'incremental',
  },
  devIndicators: {
    position: 'bottom-left',
  }
};

export default nextConfig;
