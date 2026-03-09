const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/middleware-manifest\.json$/],
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Explicitly allow Turbopack (Next.js 16 default) despite next-pwa's webpack config
  turbopack: {},
}

module.exports = withPWA(nextConfig)
