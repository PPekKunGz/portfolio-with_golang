/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.discordapp.net", "dimension-studio.net", "dms-api-gateway.mckimkung.in.th"],
    unoptimized: true,
    minimumCacheTTL: 60,
  },
  env: {
    apiUrl: 'http://localhost:3001',
  }
};

export default nextConfig;