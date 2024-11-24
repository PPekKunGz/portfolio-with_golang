/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.discordapp.net", "dimension-studio.net", "dms-api-gateway.mckimkung.in.th"],
    unoptimized: true,
    minimumCacheTTL: 60,
  },
  env: {
    apiUrl: 'https://go-portfolio.xn--12cgj3ga1lya4d6c.xn--o3cw4h',
    ghUrl: 'https://api.github.com/users'
  }
};

export default nextConfig;