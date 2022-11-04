/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hututusoftwares.com',
        port: '',
        pathname: '/3D/**',
      },
    ],
  },
}

module.exports = nextConfig
