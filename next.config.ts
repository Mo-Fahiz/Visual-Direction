import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Set by `scripts/build-pages.mjs` for static export to GitHub Pages. */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  ...(isGithubPages && {
    output: "export",
    /** Must match repo name path: github.io/&lt;owner&gt;/&lt;repo&gt;/ */
    basePath: "/Visual-Direction",
    assetPrefix: "/Visual-Direction/",
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
};

export default nextConfig;
