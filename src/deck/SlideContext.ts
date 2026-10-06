import { createContext, useContext } from 'react';
import type { SlideContextValue } from './types';

export const SlideContext = createContext<SlideContextValue>({ index: 0, total: 1 });

/** Access the current slide's position inside the deck. */
export function useSlide(): SlideContextValue {
  return useContext(SlideContext);
}

/** Zero-padded slide number, e.g. 3 → "03". */
export function pad2(n: number): string {
  return String(n).padStart(2, '0');
}
