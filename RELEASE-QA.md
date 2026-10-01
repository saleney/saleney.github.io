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

## October 1 — Pen invitations
Restored three sparse invitations as custom SVG pen paths: unfurl here, lift the page / look beneath, flip here. No font or SVG text elements in these drawings. Varied baseline, tilt, stroke width, and curved arrows. Accessible image labels retained. Production rebuild passed, desktop Atlas and Studio reviewed, responsive views checked for overflow. Screenshot: pen-invitations.png.

## Drawn margin notes
Converted the Atlas margin note, making note, Aviary invitation, Archive annotation, language margins, and Playroom blueprint labels to custom pen-stroke SVG paths. No handwriting font in these annotations. Reviewed Atlas and Playroom at desktop. Screenshots: drawn-margin-notes.png, drawn-playroom-notes.png.

## Aviary spacing — 2026-10-01
- Gave The Aviary a wider, centered pale sheet, with the existing bird centered inside it, title at the lower edge, and drawn note above the right corner.
- Preserved the bird artwork and field-guide interaction.
- Production build passed. Reviewed desktop and mobile composition; mobile guide opens and closes correctly.
- Saved aviary-spacing-desktop.png and aviary-spacing-mobile.png locally.

## Aviary on-sheet title — 2026-10-01
- Moved the title inside the sheet and added small imagined field coordinates beneath it. Kept the existing bird and interaction.
- Production build passed; desktop composition reviewed and saved as aviary-field-coordinates.png.

## Squarer Aviary sheet
Brought the sheet closer to square and replaced the precise bird icon contours with gently irregular pen paths, preserving its silhouette. Build passed; desktop and phone reviewed. Saved aviary-squarer-sheet.png.

## Original Aviary bird restored
Restored the original Bird artwork from the earlier released Playground, preserving the squarer sheet, inset title, and coordinates. Production build passed.

## Drive original Aviary artwork restored
Recovered the exact image labeled Original reference — Aviary bird from the Playground Icon System document in Drive (1-4b1zXp-iMYPKw4F3-7Hxe2z2xMJtuUWI2OW4JgIZAw). Preserved the original downloaded image, squarer sheet, title and interaction. Build passed; appearance reviewed and saved as aviary-drive-art-restored.png.

## Aviary background and press positioning
Used a small brightness adjustment with the existing multiply blend to remove the pale rectangular background visually without modifying the source image. Disabled the legacy wing animation on the positioning wrapper so opening no longer overrides its centering transform. Build passed; desktop appearance and mobile opening/closing checked. Saved aviary-seamless-background.png.
