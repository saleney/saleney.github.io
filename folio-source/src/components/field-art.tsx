// Authored SVG paths adapted from the preserved Replit Art renderer.
// Colors follow this sandbox's existing paper / sage / terracotta tokens.
export function FieldArt({ kind }: { kind: "bird" | "checklist" | "mountains" }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" aria-hidden="true" className={`field-art field-art--${kind}`}>
      {kind === "bird" && <>
        <path d="M21 79c21-2 47-5 77-19M54 62c-1-18 6-30 19-37" stroke="var(--color-sage-deep)" strokeWidth="2" />
        <path d="M55 58c-13-11-24-6-27 1 10 7 19 7 27-1Zm11-19c10-13 23-12 29-7-5 12-16 16-29 7Z" fill="var(--color-paper-deep)" stroke="var(--color-sage-deep)" strokeWidth="1.5" />
        <path d="M70 48c9-13 22-14 28-10M40 68l-4 8m15-10 2 9" stroke="var(--color-sage-deep)" strokeWidth="1.5" />
        <path d="m72 34 7-10 5 9" stroke="var(--color-terracotta-deep)" strokeWidth="1.5" />
        <circle cx="83" cy="37" r="1.4" fill="var(--color-foreground)" />
        <path d="M18 86h83" stroke="var(--color-sage-deep)" strokeWidth="1" strokeDasharray="2 3" />
      </>}
      {kind === "checklist" && <>
        <path d="M29 24h62v55H29z" fill="var(--color-paper-light)" stroke="var(--color-sage-deep)" strokeWidth="1.5" />
        <path d="m42 51 11 11 25-27" stroke="var(--color-sage-deep)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M39 86h43M43 17h34" stroke="var(--color-terracotta-deep)" strokeWidth="1.5" />
        <circle cx="92" cy="21" r="5" fill="var(--color-terracotta)" />
      </>}
      {kind === "mountains" && <>
        <path d="m22 77 25-50 19 32 12-18 22 36H22Z" fill="var(--color-paper-deep)" stroke="var(--color-sage-deep)" strokeWidth="1.5" />
        <path d="m38 78 11-22 10 15m8 4 18-24 17 27" stroke="var(--color-sage-deep)" strokeWidth="2" />
        <path d="M20 87h81" stroke="var(--color-terracotta-deep)" />
        <circle cx="81" cy="24" r="7" fill="var(--color-mustard)" />
      </>}
    </svg>
  );
}

export function FieldTrace() {
  return (
    <svg className="field-trace" viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden="true">
      <path d="M210 568c112-51 163-57 211-9 60 61 143 20 174-42 35-70 174-32 252-88 50-37 80-99 129-163" />
      <path className="field-trace-contour" d="M986 490c42-29 91-22 105 14 12 31-20 61-62 58-51-4-73-41-43-72Z" />
    </svg>
  );
}
