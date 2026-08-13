# Repository Instructions

Read `DEV_GUIDE.md` before making meaningful changes. It is the master guide for Salene's full web universe.

## Scope of this repository

This repository serves two roles:

1. `index.html` is the public front door at `saleney.github.io`.
2. Several projects live directly in subfolders of this repository.

Preserve that distinction. Do not turn the front door into a generic portfolio template and do not flatten the subprojects into one visual style.

## Universal rules

- Preserve the existing personality of each project.
- Mobile is a first-class experience.
- Inspect before changing.
- Prefer the smallest clean solution.
- Do not redesign unrelated areas.
- Avoid unnecessary dependencies and broad refactors.
- Reuse existing patterns when practical.
- Test meaningful UI work at small mobile, standard mobile, large mobile, and desktop widths.
- Prevent horizontal overflow, clipped content, awkward manual repositioning, and tiny touch targets.
- Briefly explain important new concepts because Salene is learning web development.
- Be concise and token-efficient.

## Important files and embedded projects

### Front door

- `index.html`
- Purpose: the hub for Salene's entire collection of web projects.
- Keep it inviting, whimsical, personal, easy to scan, and easy to use on mobile.
- When adding a new project card, also update the project map in `DEV_GUIDE.md`.

### Am I the Red Flag?

- `am-i-the-red-flag/index.html`
- This single file currently contains the interface, styling, and scoring/verdict logic for the public Red Flag project at `/am-i-the-red-flag/`.
- Preserve varied percentages and the possibility of insufficient evidence.
- Clearly severe harmful behavior should not receive implausibly low scores merely because exact wording was not anticipated.
- Humor is welcome, but it must not make the scoring behavior nonsensical.
- Do not present the result as professional psychological, legal, or clinical judgment.
- When adjusting scoring, test representative severe, moderate, harmless, vague, and negated statements rather than patching only one phrase.

### An Autobiography Told Through Love

- `autobiography-through-love/index.html` contains structure.
- `autobiography-through-love/script.js` contains interactive behavior/content logic.
- `autobiography-through-love/styles.css` contains styling.
- `autobiography-through-love/og.png` is the social preview image.
- Preserve emotional nuance and narrative clarity.
- Do not imply that every important person in the autobiography is a romantic partner.
- Distinguish romantic heartbreak, friendship, family, grief, memory, and other forms of love when context requires it.
- Prefer subtle clarification over over-explaining personal history.

### 听不懂

- `ting-bu-dong/index.html` contains structure.
- `ting-bu-dong/script.js` contains interactive behavior and much of the experience content.
- `ting-bu-dong/styles.css` contains primary styling.
- `ting-bu-dong/icon-overrides.css` contains targeted icon styling overrides.
- Preserve the playful Mandarin-survival-simulator framing and the autobiographical China-trip voice.
- Chinese characters, pinyin, translations, and cultural/geographic details should be accurate.
- Do not replace specific lived details with generic travel copy.
- Mobile interaction quality matters especially for tap-heavy learning/game experiences.

## Before substantial work

1. Read `DEV_GUIDE.md`.
2. Inspect the relevant project files only.
3. State the cause or plan briefly when the task is nontrivial.
4. Make scoped changes.
5. Test the affected interactions and responsive behavior.
6. Summarize what changed.
7. Stop when the requested problem is solved.

## Required session start

Before modifying this project:

1. Read this `AGENTS.md` file completely.
2. Read the master creative constitution: https://github.com/saleney/saleney.github.io/blob/main/DESIGN.md
3. Briefly confirm which instruction files you read.
4. Inspect the existing implementation before proposing or making changes.

Treat `AGENTS.md` as the operational instructions and the master `DESIGN.md` as the creative constitution. If either required file is unavailable, stop and tell Salene before modifying anything.
