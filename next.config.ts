import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // Base path is required for GitHub Pages project sites
  basePath: '/Numeri-e-Persone_web',
  assetPrefix: '/Numeri-e-Persone_web', 
};

export default nextConfig;