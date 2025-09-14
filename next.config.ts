import type { NextConfig } from "next";

const repo = 'nuam-prototype';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Use the repository name for GitHub Pages deployment
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  // Ensure static export works properly
  distDir: 'out',
};

export default nextConfig;
