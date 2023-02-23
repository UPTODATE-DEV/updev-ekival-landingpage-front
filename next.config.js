/** @type {import('next').NextConfig} */

const securityHeaders = require("./headers");

const domaine = process.env.NEXT_PUBLIC_BASE_URL.split("//")[1] || "localhost";

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  images: {
    domains: ["ekival.com", "images.unsplash.com", domaine],
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
