import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/invitacion",
      destination: "/",
      permanent: false,
    },
  ],
  images: {
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
