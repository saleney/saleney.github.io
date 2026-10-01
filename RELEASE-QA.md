# Playground release QA — September 30, 2026

## Approved design
Six folios with a bottom index, a flat searchable project directory, light hand-traced paper, object-specific reversible hover gestures, keyboard reveals, and mobile taps. Atlas label appears once. Header reads “A place for curious things”. Clay lifts translucent tracing paper. Aviary opens a field guide. Playroom projects are a rug, activity table, and teacher desk drawn into one shared floor plan.

## Audit and fixes
- TypeScript check and static production build passed.
- All 12 public project destinations returned HTTP 200.
- All six desktop folio reveals expose an entry link.
- All twelve mobile project taps expose a readable entry link; tap/close controls dismiss them.
- Responsive checks: 320×640, 390×844, 430×932 and desktop 1280×720. No document horizontal overflow observed.
- Search for clay returns Virtual Clay Studio. Escape dismisses the directory.
- No console errors in the checked production page.
- Fixed inactive folios receiving keyboard focus; off-screen sections are inert.
- Fixed Playroom floor plan and furniture resizing at different rates and moved the desk within the room.
- Fixed mouse-emulated pointer exit closing a mobile tap reveal; small-screen pointer hover no longer interferes with tap state.
- Existing reduced-motion rules disable transitions/animations. Keyboard focus handlers mirror hover; Escape closes reveals.

## Release scope and record
GitHub Pages root homepage and new folio assets/source only. Embedded projects remain unchanged. Original Lovable/Replit references and synced sources were not edited. Static build avoids requiring a server on GitHub Pages. Screenshots and source archive are recorded locally; source and this report are committed with the release.

## Verification limits
Phone checks use browser viewport emulation rather than physical devices. Reduced-motion rules were inspected in source. This is a project discovery homepage; oracle preview answers are fixed excerpts, while entry links lead to the full projects.

## Deployment
Target: https://saleney.github.io/ via existing main-branch GitHub Pages. Deployment result and commit recorded separately after publish.

## October 1 — Quieter artifacts
Removed visible action cues from the Atlas, major artifacts, and small objects. Kept screen-reader labels, hover/focus reveals, and mobile tap behavior. Removed the Clay lift instruction. Production rebuild passed; no horizontal overflow at 320, 390, and 430px. Desktop screenshot: quiet-artifacts.png.
