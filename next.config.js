/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/yodit-wellness', // <-- replace with your repo name
  assetPrefix: '/yodit-wellness/', // <-- ensures assets like images load correctly
  images: {
    unoptimized: true, // necessary for static export on GitHub Pages
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig
