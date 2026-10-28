//next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./next-intl.config.ts');

const nextConfig: NextConfig = {
  // Allow the LAN address used to preview the site during development.
  allowedDevOrigins: ['10.53.126.18'],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
    ],
  }
};

export default withNextIntl(nextConfig);
