import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function sourceFiles() {
  const [page, css, layout, museumData] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/museum-data.ts", root), "utf8"),
  ]);

  return { page, css, layout, museumData };
}

test("keeps the museum's identity in its document metadata", async () => {
  const { layout } = await sourceFiles();

  assert.match(layout, /An Autobiography Told Through Love/);
  assert.doesNotMatch(layout, /Starter Project/);
});

test("keeps memory dialogs keyboard-safe and public memories explicit", async () => {
  const { page, museumData } = await sourceFiles();

  assert.match(museumData, /function memoryForEdition/);
  assert.match(museumData, /function makeCurrentMemoriesPublic/);
  assert.match(page, /from "\.\/museum-data"/);
  assert.match(page, /event\.key !== "Tab"/);
  assert.match(page, /aria-modal="true"/);
  assert.match(page, /className="portal-dismiss"/);
  assert.doesNotMatch(page, /portal-backdrop" onClick/);
});

test("preserves comfortable mobile touch targets and flexible doors", async () => {
  const { css } = await sourceFiles();

  assert.match(css, /button:focus-visible,a:focus-visible/);
  assert.match(css, /\.sound\{display:block;min-height:44px/);
  assert.match(css, /\.door\{flex:0 0 min\(350px,75vw\);display:grid;min-height:560px/);
  assert.match(css, /\.door\{flex-basis:calc\(100vw - 48px\);min-height:430px/);
  assert.match(css, /\.hallway-hint\{display:block/);
});
