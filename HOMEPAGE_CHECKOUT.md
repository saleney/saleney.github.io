# Salene's Playground — Approved Homepage Checkout

Approved: 2026-09-08

## Source of truth

- Branch: `main`
- Approved visual source commit: `c3eff099fb72433c6dc1526b1c8a2fb25e60b202`
- Last substantive visual commit: `eb3962bd6204abbb042c7f2ba4c4bf182d91376e`
- Public URL: `https://saleney.github.io/`
- Primary files: `index.html`, `front-door.css`, `front-door.js`

The homepage is at checkout. Do not redesign it unless Salene explicitly asks.

## Visual system

- Warm paper background
- Dark ink
- Clay/rust accent
- Dramatic editorial serif typography
- Mono production labels
- Strong negative space
- Asymmetrical composition
- Personal illustrations treated as editorial artifacts
- Restrained ambient motion with reduced-motion support and a pause control
- Left-side navigation as the structural spine on larger screens
- Compact room navigation on mobile
- Distinct room identities within one shared building

## Major decisions

- The homepage is an entrance to Salene's collection, not a generic portfolio or resume.
- Virtual Clay Studio leads as the dominant object study.
- The Aviary is a quieter field-study world.
- Personal projects are presented as separate artifacts, not repeated cards.
- Side quests remain a clustered collection of smaller discoveries.
- Project artwork can reveal a process caption while project titles retain their destination links.
- Motion stays ambient and restrained; interaction and legibility take priority.
- Mobile is intentionally composed and must preserve personality without horizontal overflow.
- Individual project repositories should feel like distinct rooms in the same building, not clones of the homepage.

## Approved editorial language

- `OBJECT STUDY / DIGITAL CLAY`
- `FIELD NOTE / OBSERVED`
- `AN OPEN FOLIO / PERSONAL INDEX`
- `ARCHIVE FRAGMENT / PERSON`
- `SIDE QUESTS / IN PROGRESS`
- `TOUCH GENTLY`

## Restore instructions

The approved homepage implementation can always be inspected with:

```bash
git show c3eff099fb72433c6dc1526b1c8a2fb25e60b202:index.html
git show c3eff099fb72433c6dc1526b1c8a2fb25e60b202:front-door.css
git show c3eff099fb72433c6dc1526b1c8a2fb25e60b202:front-door.js
```

To make a safe restoration branch without rewriting history:

```bash
git switch -c restore/approved-homepage c3eff099fb72433c6dc1526b1c8a2fb25e60b202
```

Do not use destructive reset commands to restore this state. Compare or branch from the approved commit first.

## Cross-repo translation rule

Use this homepage as the design source of truth while preserving every project's existing functionality, content, links, and identity. Translate the system into each project's material language:

- Virtual Clay Studio: tactile, sculptural, object study
- Aviary: field study, specimen, observational

Work one repository at a time. Preview before deployment, checkpoint meaningful changes, and do not perform unrelated redesigns or multi-repo sweeps.

## Screenshot record

The checkout record requires a full-page desktop capture at 1440 px wide and a full-page mobile capture at 390 px wide. Store them under `docs/homepage-checkout/` as `desktop.png` and `mobile.png` without changing the approved implementation.
