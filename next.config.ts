/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["gov.uk"], // add all external domains you want to allow
  },
};

module.exports = nextConfig;
