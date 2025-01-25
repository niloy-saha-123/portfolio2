/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    remotePatterns: [{
      protocol: 'https',
      hostname: '**'
    }]
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio2' : '',
  trailingSlash: true,
 }
 
 module.exports = nextConfig