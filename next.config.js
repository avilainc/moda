/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/moda',
  assetPrefix: '/moda',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Necessário para exportação estática
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  trailingSlash: true,
}

module.exports = nextConfig
