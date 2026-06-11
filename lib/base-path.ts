/**
 * Helper to resolve asset paths for GitHub Pages deployment.
 * When deployed to GitHub Pages, adds the /Visual-Direction basePath.
 * In local development, returns the path as-is.
 */

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/Visual-Direction" : "";

export function assetPath(path: string): string {
  // External URLs (http/https) pass through unchanged
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  // For local assets, prepend basePath when building for GitHub Pages
  return `${basePath}${path}`;
}
