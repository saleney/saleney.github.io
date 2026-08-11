# Saleney Web Universe Development Guide

## Purpose

`saleney.github.io` is the front door to Salene's collection of personal web projects. The broader collection is a set of interactive museums, playgrounds, experiments, educational experiences, and deliberately unnecessary little internet things.

The point is not to make every project look identical. The point is for each one to feel intentional, personal, playful, and recognizably made by the same person.

## Core philosophy

Projects should feel:

- whimsical
- curious
- playful
- personal
- warm when appropriate
- occasionally unhinged
- visually intentional
- interactive whenever interaction adds delight or meaning
- never generic, sterile, or corporate

Different projects may have different visual identities. Preserve each project's existing personality rather than forcing one universal aesthetic onto everything.

## Universal UX rules

Mobile is a first-class experience, not a desktop adaptation.

For meaningful UI changes, check representative viewport sizes including:

- small mobile
- standard mobile
- large mobile
- desktop

Avoid:

- horizontal overflow
- clipped content
- awkward manual page repositioning
- content hidden behind browser chrome or safe areas
- tiny touch targets
- interactions that require a mouse
- fixed dimensions or positioning that only work at one viewport size

Placards, panels, modals, cards, and overlays should fit comfortably within the available viewport. If content is taller than the viewport, scrolling should be natural and intentional.

Whimsy should never make the experience frustrating to use.

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

Do not redesign unrelated areas unless explicitly requested.

Because these projects are also a way for Salene to learn web development, briefly explain important new concepts when introducing them.

## Consistency

Before creating a new button, card, placard, overlay, typography treatment, spacing rule, animation, or responsive behavior, inspect whether an equivalent pattern already exists in that project.

Reuse existing patterns when practical. Do not create multiple slightly different versions of the same component without a reason.

Consistency should support the experience, not sand away personality.

## Token and agent efficiency

Coding-agent usage should be deliberate and frugal.

Prefer:

- inspecting before implementing
- concise responses
- tightly scoped changes
- batching related fixes
- reusable systems
- data-driven content
- solutions that let Salene make simple future edits manually
- the smallest maintainable implementation

Avoid:

- broad rewrites without a clear need
- repeated implementation attempts when a planning pass would prevent them
- unnecessary refactors
- using an agent for trivial copy changes that can be edited directly

When uncertain about a direction, inspect and propose options before implementing.

## Definition of done

A feature is not complete simply because it works on desktop.

It should:

- work on desktop and mobile
- preserve the project's visual personality
- remain readable and comfortably tappable
- avoid overflow and clipping
- preserve unrelated functionality
- use accessible semantic controls when practical
- feel intentional

## Project map

### Front door

- Repository: `saleney/saleney.github.io`
- Public site: `https://saleney.github.io/`
- Role: front door and index to the wider collection
- Project instructions: `AGENTS.md`

### Salene's World

- Repository: `saleney/salenes-world`
- Public site: `https://saleney.github.io/salenes-world/`
- Role: whimsical interactive museum/playground built around curiosity, wonder, connection, learning, memory, courage, and exploration
- Project instructions: `AGENTS.md`

### Unhinged 8 Ball

- Repository: `saleney/unhinged-8-ball`
- Public site: `https://saleney.github.io/unhinged-8-ball/`
- Role: playful, deliberately unreliable interactive 8 ball
- Project instructions: `AGENTS.md`

### Bad Idea Generator

- Repository: `saleney/bad-idea-generator`
- Public site: `https://saleney.github.io/bad-idea-generator/`
- Role: interactive generator for questionable ideas and absurd decision-making
- Project instructions: `AGENTS.md`

### Should I Text My Ex?

- Repository: `saleney/should-i-text-my-ex`
- Public site: `https://saleney.github.io/should-i-text-my-ex/`
- Role: interactive coin-flip decision toy and origin point of this web-building era
- Project instructions: `AGENTS.md`

### What Now?

- Repository: `saleney/what-now`
- Public site: `https://saleney.github.io/what-now/`
- Role: screen-free activity generator
- Project instructions: `AGENTS.md`

### A Little Adventure

- Repository: `saleney/a-little-adventure`
- Public site: `https://saleney.github.io/a-little-adventure/`
- Role: interactive story/adventure experience
- Project instructions: `AGENTS.md`

## Important-file registry

As each project develops a single source of truth for data or other important shared files, record the exact path here after it has been confirmed from the repository. Do not guess paths.

Examples of things worth recording:

- destination data
- scoring logic
- shared styles
- shared interaction utilities
- content databases
- project-specific configuration

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
