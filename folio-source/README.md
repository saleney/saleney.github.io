# Folio homepage source

The six-folio homepage is built from this source. Run `npm ci` and `npm run build`, then copy `release-dist/index.html` to the repository root and `release-dist/folio-assets/` to the root `folio-assets/`. Preserve the other project folders.

Project destinations and folio grouping live in `src/components/playground.tsx`. Desktop hover and keyboard focus reveal artifacts; pointer exit or leaving keyboard focus reverses the action. Mobile taps toggle, with a readable shared detail sheet.
