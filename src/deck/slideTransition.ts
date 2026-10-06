import type { Variants } from 'motion/react';
import { EASE_OUT, EASE_SNAP } from '../lib/motion';

/**
 * Keynote-style "dissolve + push" between slides.
 * `custom` is the navigation direction (+1 forward, -1 back).
 */
export const slideVariants: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir * 90,
    scale: 1.015,
    filter: 'blur(14px)',
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.95, ease: EASE_OUT },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir * -70,
    scale: 0.965,
    filter: 'blur(12px)',
    transition: { duration: 0.55, ease: EASE_SNAP },
  }),
};
