//next.config.ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./next-intl.config.ts');

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost'],
    unoptimized: true
  }
};

export default withNextIntl(nextConfig);
