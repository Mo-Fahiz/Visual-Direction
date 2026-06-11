#!/usr/bin/env node

/**
 * Build script for GitHub Pages deployment.
 * Sets GITHUB_PAGES=true and runs Next.js build with static export.
 */

import { spawn } from 'node:child_process';

console.log('Building for GitHub Pages deployment...\n');

const build = spawn('npm', ['run', 'build'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    GITHUB_PAGES: 'true',
  },
});

build.on('close', (code) => {
  if (code !== 0) {
    console.error(`\nBuild failed with code ${code}`);
    process.exit(code);
  }
  console.log('\n✓ Static export complete! Output in ./out/');
});
