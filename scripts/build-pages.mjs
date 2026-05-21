/**
 * GitHub Pages: static export cannot include App Router Route Handlers.
 * Temporarily move app/api aside, run next build, then restore.
 */
import { spawnSync } from "node:child_process";
import { existsSync, renameSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const apiDir = path.join(root, "app", "api");
const backupDir = path.join(root, "app", "__api_pages_backup");

let moved = false;
try {
  if (existsSync(apiDir)) {
    renameSync(apiDir, backupDir);
    moved = true;
  }

  const result = spawnSync("npx", ["next", "build"], {
    stdio: "inherit",
    env: {
      ...process.env,
      GITHUB_PAGES: "true",
      NEXT_PUBLIC_GITHUB_PAGES: "true",
    },
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
} finally {
  if (moved && existsSync(backupDir)) {
    renameSync(backupDir, apiDir);
  }
}
