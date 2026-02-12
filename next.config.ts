/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      resolveAlias: {
        '@': './src',
      },
    },
  },
}

module.exports = nextConfig