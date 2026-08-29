# Saleney Web Universe Development Guide

## Purpose

`saleney.github.io` is the front door to Salene's collection of personal web projects. The collection is a set of interactive museums, playgrounds, experiments, educational experiences, autobiographical spaces, and deliberately unnecessary little internet things.

The point is not to make every project look identical. The point is for each one to feel intentional, personal, playful, and recognizably made by the same person.

## Core philosophy

Projects should feel whimsical, curious, playful, personal, visually intentional, and occasionally unhinged. They should never feel generic, sterile, or corporate.

Different projects may have different visual identities. Preserve each project's existing personality rather than forcing one universal aesthetic onto everything.

Curiosity, wonder, learning, connection, experimentation, and making things simply because they deserve to exist are recurring values across the collection.

## Universal UX rules

Mobile is a first-class experience, not a desktop adaptation.

For meaningful UI changes, check representative viewport sizes including small mobile, standard mobile, large mobile, and desktop.

Avoid horizontal overflow, clipped content, awkward manual page repositioning, content hidden behind browser chrome/safe areas, tiny touch targets, mouse-only interactions, and fixed dimensions or positioning that only work at one viewport size.

Placards, panels, modals, cards, and overlays should fit comfortably within the available viewport. If content is taller than the viewport, scrolling should be natural and intentional.

Whimsy should never make an experience frustrating to use.

## Development rules

Before significant changes:

1. Inspect the current implementation.
2. Understand existing patterns before creating new ones.
3. Recommend the smallest clean solution.
4. Preserve unrelated functionality.
5. Avoid unnecessary dependencies.
6. Prefer reusable patterns over repeated one-off fixes.
7. Test after implementation.
8. Summarize what changed.
9. Stop when the requested problem is solved.

Do not redesign unrelated areas unless explicitly requested.

Because these projects are also a way for Salene to learn web development, briefly explain important new concepts when introducing them.

## Source hygiene

Keep source code readable as the collection grows.

- Prefer the existing file boundaries rather than merging unrelated markup, styling, data, and behavior into one new file.
- When formatting or reorganizing working code, keep that work behavior-preserving and commit it separately from design, copy, or feature changes.
- Review large formatting diffs carefully; a readable file is useful only when the cleanup does not obscure a real functional change.
- Do not reformat an entire project solely for consistency when it would create a noisy diff around embedded assets or otherwise stable code.

## Token and agent efficiency

Coding-agent usage should be deliberate and frugal.

Prefer inspecting before implementing, concise responses, tightly scoped changes, batching related fixes, reusable systems, data-driven content, and solutions that let Salene make simple future edits manually.

Avoid broad rewrites without a clear need, repeated implementation attempts when a planning pass would prevent them, unnecessary refactors, and using an agent for trivial copy changes that can be edited directly.

When uncertain about a direction, inspect and propose options before implementing.

## Project map

### Front door and embedded projects

Repository: `saleney/saleney.github.io`

Repository instructions: `AGENTS.md`

Master guide: `DEV_GUIDE.md`

#### Front door

- Public: `https://saleney.github.io/`
- Main file: `index.html`
- Role: hub/index for the whole collection.

### Virtual Clay Studio

- Repository: `saleney/virtual-clay-studio`
- Public: `https://saleney.github.io/virtual-clay-studio/`
- Main files: `index.html`, `atelier.js`
- Role: a standalone real-time WebGL pottery-wheel experience. Its repository is separate from this hub; the front door only links to it.

#### Am I the Red Flag?

- Public: `https://saleney.github.io/am-i-the-red-flag/`
- Canonical public file: `am-i-the-red-flag/index.html`
- Current architecture: single-file project containing markup, styling, and scoring/verdict logic.
- Important note: there is also an older/secondary copy at `saleney/should-i-text-my-ex/am-i-the-red-flag/index.html`. Do not assume that nested copy is the public canonical version.

#### An Autobiography Told Through Love

- Repository: `saleney/autobiography-through-love`
- Public: `https://saleney.github.io/autobiography-through-love/`
- Canonical files: root `index.html`, `script.js`, `styles.css`, and `og.png` in the dedicated repository.
- Important: the `autobiography-through-love/` folder in this hub repository is a legacy copy. GitHub Pages routes the public path to the dedicated project repository, so edits to the hub copy do not change the live page.

#### 听不懂

- Public: `https://saleney.github.io/ting-bu-dong/`
- Structure: `ting-bu-dong/index.html`
- Behavior/content: `ting-bu-dong/script.js`
- Primary styling: `ting-bu-dong/styles.css`
- Targeted icon overrides: `ting-bu-dong/icon-overrides.css`

### Salene's World

- Repository: `saleney/salenes-world`
- Public: `https://saleney.github.io/salenes-world/`
- Project instructions: `AGENTS.md`
- Destination source of truth: `src/destinations.js`
- Main interaction/globe logic: `src/main.js`
- Shared styling: `src/style.css`
- Main page/activity panels: `index.html`
- Landmark/world art: `src/assets/`
- Deployment workflow: `.github/workflows/deploy-pages.yml`

`src/destinations.js` is the single editable source of truth for destination metadata, including content, landmark art, globe coordinates, and opening behavior. New destinations should start there rather than duplicating data elsewhere.

### Unhinged 8 Ball

- Repository: `saleney/unhinged-8-ball`
- Public: `https://saleney.github.io/unhinged-8-ball/`
- Project instructions: `AGENTS.md`
- Main/only app file: `index.html`

### Bad Idea Generator

- Repository: `saleney/bad-idea-generator`
- Public: `https://saleney.github.io/bad-idea-generator/`
- Project instructions: `AGENTS.md`
- Main/only app file: `index.html`

### Should I Text My Ex?

- Repository: `saleney/should-i-text-my-ex`
- Public: `https://saleney.github.io/should-i-text-my-ex/`
- Project instructions: `AGENTS.md`
- Main/only app file: `index.html`
- Secondary old Red Flag copy: `am-i-the-red-flag/index.html`

### What Now?

- Repository: `saleney/what-now`
- Public: `https://saleney.github.io/what-now/`
- Project instructions: `AGENTS.md`
- Main/only app file: `index.html`

### A Little Adventure

- Repository: `saleney/a-little-adventure`
- Public: `https://saleney.github.io/a-little-adventure/`
- Project instructions: `AGENTS.md`
- Main/only app file: `index.html`

## Definition of done

A feature is not complete simply because it works on desktop.

It should work on desktop and mobile, preserve the project's visual personality, remain readable and comfortably tappable, avoid overflow and clipping, preserve unrelated functionality, use accessible semantic controls when practical, and feel intentional.

## Default workflow

Idea or problem

→ clarify the desired behavior

→ inspect the existing implementation

→ define scope and constraints

→ implement the smallest clean solution

→ test representative mobile and desktop viewports

→ commit and push

→ verify the deployed public site on a real phone

→ stop when the problem is solved
