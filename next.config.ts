import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // Base path is often required for GitHub Pages project sites (e.g. /repo-name)
  // We will leave it commented out for now, but it might be needed later.
  // basePath: '/zio-book-graph-check', 
};

export default nextConfig;