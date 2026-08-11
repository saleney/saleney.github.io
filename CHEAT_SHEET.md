# Salene Web Dev Cheat Sheet

## The one thing to remember

Your front door is:

`https://saleney.github.io/`

Your master project map is:

`DEV_GUIDE.md`

Your coding-agent rules for this repository are:

`AGENTS.md`

Each standalone repository also has its own `AGENTS.md`.

## When you want to work on something

1. Pick the website/project.
2. Tell the coding agent to read that repository's `AGENTS.md` first.
3. Describe the specific change you want.
4. For anything nontrivial, ask it to inspect before changing.
5. Keep the task scoped.
6. Test the result.
7. Commit/push/deploy if needed.
8. Check the public version on your actual phone.
9. Stop when it works.

## Where important things live

### Salene's World destinations

`src/destinations.js` in the `saleney/salenes-world` repository.

This is the single source of truth for destination metadata. Add/edit destination content there first.

### Public Red Flag scoring

`am-i-the-red-flag/index.html` in the `saleney/saleney.github.io` repository.

The interface, styling, and scoring logic are currently together in that file.

### Autobiography Told Through Love

In `saleney/saleney.github.io`:

- structure: `autobiography-through-love/index.html`
- behavior/content: `autobiography-through-love/script.js`
- styling: `autobiography-through-love/styles.css`

### 听不懂

In `saleney/saleney.github.io`:

- structure: `ting-bu-dong/index.html`
- behavior/content: `ting-bu-dong/script.js`
- styling: `ting-bu-dong/styles.css`

## Useful prompt pattern

For a bug:

> Read AGENTS.md first. Inspect the relevant implementation before changing anything. Explain the cause briefly, then make the smallest clean fix. Preserve unrelated behavior and styling. Test mobile and desktop. Keep your response concise.

For an idea you are not sure about yet:

> Read AGENTS.md first. Do not change anything yet. Inspect the current implementation and give me 2–3 simple options, from least invasive to most ambitious. Keep it concise.

For a tiny copy/content change:

You may not need a coding agent at all. If you know the exact file and text, edit it directly.

## Vocabulary

- Repo = one project/repository on GitHub.
- Commit = saved checkpoint in Git history.
- Push = send your local commits to GitHub.
- Deploy = publish the version visitors can access.
- `AGENTS.md` = project-specific instructions for coding agents.
- `DEV_GUIDE.md` = your master map/rules across the whole Saleney web universe.
- Source of truth = the one canonical place data should be edited instead of duplicating it in several places.
