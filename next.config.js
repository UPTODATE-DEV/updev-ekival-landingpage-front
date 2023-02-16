/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  images: {
    domains: ["ekival.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
