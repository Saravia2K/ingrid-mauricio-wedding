import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/invitacion",
      destination: "/",
      permanent: false,
    },
  ],
};

export default nextConfig;
