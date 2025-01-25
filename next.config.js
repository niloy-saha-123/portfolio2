/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio2' : ''
}