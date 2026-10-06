import type { Transition } from 'motion/react';

/** Signature "keynote" easing — fast start, long graceful settle. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
/** Smooth in-out for exits and loops. */
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;
/** Snappy ease for small UI chrome. */
export const EASE_SNAP = [0.4, 0, 0.2, 1] as const;

/** Default time (s) at which slide content begins animating after a transition. */
export const SLIDE_IN = 0.35;

export const spring: Transition = { type: 'spring', stiffness: 260, damping: 26, mass: 0.9 };

export const springSoft: Transition = { type: 'spring', stiffness: 140, damping: 20, mass: 1 };

/** Builds a tween transition with the house easing. */
export function tween(delay = 0, duration = 0.8): Transition {
  return { delay, duration, ease: EASE_OUT };
}

/** Creates an incremental delay helper: `const d = stagger(0.4, 0.12); d(0), d(1)…` */
export function stagger(start: number, step: number) {
  return (i: number) => start + i * step;
}
