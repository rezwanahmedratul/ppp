import type { ComponentType } from 'react';

/** Everything the deck needs to know about a single slide module. */
export interface SlideDefinition {
  /** Stable id, used as React key and for debugging. */
  id: string;
  /** Short title shown in the notes panel. */
  title: string;
  /** Section label shown in the top-right chrome. */
  section: string;
  /** Optional speaker notes (toggle with the N key). */
  notes?: string;
  /** The slide's visual component (rendered on a 1920×1080 stage). */
  Component: ComponentType;
}

export interface SlideContextValue {
  index: number;
  total: number;
}
