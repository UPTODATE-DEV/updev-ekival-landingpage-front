/** @type {import('next').NextConfig} */

const securityHeaders = require("./headers");

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  images: {
    domains: ["ekival.com", "images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
