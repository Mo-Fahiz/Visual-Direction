# Reference dump

Historical artifacts that seeded this design system site.

These files are **reference only** — the published site is the single source of
truth (SSOT). When something here disagrees with a page in `/app`, the page
wins. Update the page, then (optionally) delete the stale dump file.

## Contents

- `acko-visual-direction_01.jsx` — original visual-direction showreel that
  established the four-moments narrative, the principle Do/Don't UI mocks,
  the colour distribution band, and the prompt architecture. The `MockFrame`,
  `DoDontVisual`, and per-principle mocks under
  `components/showcase/` are direct ports of the components defined here.

## How to retire a file

1. Migrate any unique content into the relevant page under `/app`.
2. Add a changelog entry on the site noting the move.
3. Delete the file from this folder in the same PR.
