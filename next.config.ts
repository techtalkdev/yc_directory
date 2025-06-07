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
        hostname: 'placehold.co',
      }
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
