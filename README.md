# Salene's Playground

The public front door for Salene's collection of tiny internet worlds, interactive projects, and personal artifacts.

Live site: [saleney.github.io](https://saleney.github.io/)

## What lives here

- `index.html` — the homepage and project directory.
- `birds.js` — the editable list of meaningful Bird Visitors.
- `bird-visitors.js` — the occasional bird and field-guide behavior.
- `am-i-the-red-flag/`, `autobiography-through-love/`, and `ting-bu-dong/` — projects currently hosted from this repository.

Several other destinations are standalone repositories and are linked from the homepage. Their locations are documented in `DEV_GUIDE.md`.

## Before changing the homepage

1. Read `AGENTS.md`, `DEV_GUIDE.md`, and `DESIGN.md`.
2. Keep the front door personal, playable, and mobile-friendly.
3. Use explicit semantic project classes such as `.project-clay-studio`; do not use card-order (`nth-child`) styling.
4. Preview at desktop and phone widths, including hover/focus behavior and horizontal overflow.

## Publishing

The site is served through GitHub Pages from the `main` branch. Commit approved changes, push to `main`, then verify the public site after Pages rebuilds.

## Add a future bird

Add one object to the `birds` array in `birds.js`. That file is the homepage's single source of truth for bird names, notes, perches, illustration identifiers, and optional audio paths.
