/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export (for GitHub Pages & GoDaddy)
  trailingSlash: true, // Helps static hosting handle directories correctly
  images: {
    unoptimized: true, // Required for static export (no Image Optimization)
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Skip TypeScript errors during build
  },
  // Performance and stability optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,

  // ✅ Important: Remove basePath if previously set for GitHub Pages
  basePath: '',

  // ✅ Optional but recommended: set assetPrefix for your root domain
  assetPrefix: './', // Ensures relative paths for static assets
};

module.exports = nextConfig;
