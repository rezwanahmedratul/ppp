/** A 2D point in diagram space. */
export type Pt = readonly [number, number];

/**
 * Builds an orthogonal / polyline SVG path with softly rounded corners.
 */
export function roundedPath(points: readonly Pt[], radius = 14): string {
  if (points.length < 2) return '';
  let d = `M ${points[0][0]} ${points[0][1]}`;

  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i - 1];
    const [cx, cy] = points[i];
    const [nx, ny] = points[i + 1];
    const d1 = Math.hypot(cx - px, cy - py) || 1;
    const d2 = Math.hypot(nx - cx, ny - cy) || 1;
    const r = Math.min(radius, d1 / 2, d2 / 2);
    const ax = cx + ((px - cx) / d1) * r;
    const ay = cy + ((py - cy) / d1) * r;
    const bx = cx + ((nx - cx) / d2) * r;
    const by = cy + ((ny - cy) / d2) * r;
    d += ` L ${ax} ${ay} Q ${cx} ${cy} ${bx} ${by}`;
  }

  const last = points[points.length - 1];
  return `${d} L ${last[0]} ${last[1]}`;
}

/**
 * Catmull-Rom → cubic Bézier: a smooth curve passing through every point.
 */
export function smoothPath(points: readonly Pt[], tension = 1): string {
  if (points.length < 2) return '';
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1[0] + ((p2[0] - p0[0]) / 6) * tension;
    const c1y = p1[1] + ((p2[1] - p0[1]) / 6) * tension;
    const c2x = p2[0] - ((p3[0] - p1[0]) / 6) * tension;
    const c2y = p2[1] - ((p3[1] - p1[1]) / 6) * tension;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}

/** A filled triangular arrowhead whose tip sits exactly on `to`. */
export function arrowHead(from: Pt, to: Pt, size = 13): string {
  const ang = Math.atan2(to[1] - from[1], to[0] - from[0]);
  const spread = 0.45;
  const a1 = ang + Math.PI - spread;
  const a2 = ang + Math.PI + spread;
  const x1 = to[0] + Math.cos(a1) * size;
  const y1 = to[1] + Math.sin(a1) * size;
  const x2 = to[0] + Math.cos(a2) * size;
  const y2 = to[1] + Math.sin(a2) * size;
  return `M ${x1} ${y1} L ${to[0]} ${to[1]} L ${x2} ${y2} Z`;
}

/** Deterministic PRNG so "random" art is identical on every render. */
export function seeded(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
