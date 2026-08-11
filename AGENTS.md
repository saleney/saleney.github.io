# ChatGPT project context

This directory is a local mirror of the ChatGPT project “Vibe Coding”.

- Treat every file under `sources/` as read-only reference material.
- Do not edit, rename, move, or delete synced project files.
- These files may be replaced the next time a task is created from this ChatGPT project.


## Project instructions

## Salene's World — permanent project guidelines

### Creative direction

Salene’s World is an interactive museum/playground built around curiosity, wonder, connection, learning, and exploration.

The experience should feel whimsical, warm, curious, handmade, playful, surprising, occasionally unhinged, and distinctly personal. It should never feel corporate, generic, sterile, or childish simply for the sake of being cute.

Preserve the existing visual personality of the site.

### UX philosophy

Visitors should feel invited to wander, explore, click, and discover. Interactions can contain surprises, Easter eggs, humor, and moments of delight.

Whimsy should never make the site frustrating or confusing to use.

### Mobile first

Mobile is a first-class experience, not a desktop adaptation.

Every new or modified interaction must be checked at narrow phone widths before it is considered complete.

Avoid fixed dimensions or positioning that assume a desktop viewport.

Interactive content must remain fully visible, comfortably tappable, readable, free from horizontal overflow, and usable without awkward manual repositioning.

Placards, panels, modals, cards, and overlays must fit comfortably within the available viewport. If content is taller than the viewport, scrolling should feel natural and intentional.

Account for mobile browser chrome and device safe areas.

### Consistency

Before creating a new UI pattern, inspect whether an equivalent pattern already exists elsewhere in the project.

Reuse existing buttons, cards, placards, overlays, typography, spacing, animations, navigation patterns, and responsive behavior wherever appropriate.

Do not create slightly different versions of the same component without a reason.

All areas of Salene’s World should feel like parts of the same universe while retaining their individual personality.

### Code quality

Prefer simple, maintainable solutions.

Avoid unnecessary refactoring of unrelated code, unnecessary dependencies, replacing working behavior without reason, and one-off positional hacks when responsive solutions are possible.

Because I am learning web development through this project, briefly explain important new coding concepts when you introduce them.

### Before significant changes

1. Inspect the existing implementation.
2. Identify relevant existing patterns.
3. Briefly explain what you plan to change.
4. Preserve unrelated functionality.
5. Implement the smallest clean solution.
6. Check both desktop and mobile behavior.
7. Summarize what changed.

### Definition of done

A feature is not complete simply because it works on desktop.

It should work on desktop and mobile, visually belong in Salene’s World, remain accessible, have comfortable touch targets, avoid overflow and clipping, preserve existing functionality, and feel intentional.
