import type { ReactNode } from 'react';

/**
 * Renders inline *emphasis* markup as ember italics, e.g.
 * "Two *complementary* perspectives." → Two <em>complementary</em> perspectives.
 */
export function RichText({ text }: { text: string }): ReactNode {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return parts.map((p, i) =>
    p.startsWith('*') && p.endsWith('*') ? (
      <em key={i} className="em">
        {p.slice(1, -1)}
      </em>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}
