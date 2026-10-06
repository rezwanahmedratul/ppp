import { useCallback, useEffect, useState } from 'react';

interface NavState {
  index: number;
  /** +1 when moving forward, -1 when moving back — drives transition direction. */
  direction: 1 | -1;
}

function readHash(total: number): number {
  const n = parseInt(window.location.hash.replace(/[^0-9]/g, ''), 10);
  if (Number.isNaN(n)) return 0;
  return Math.min(Math.max(n - 1, 0), total - 1);
}

const NEXT_KEYS = new Set(['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter']);
const PREV_KEYS = new Set(['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace']);

/**
 * Keyboard + hash driven slide navigation.
 * → / ↓ / Space / PageDown: next · ← / ↑ / PageUp: previous · Home / End: first / last.
 */
export function useDeckNavigation(total: number) {
  const [state, setState] = useState<NavState>(() => ({ index: readHash(total), direction: 1 }));

  const goTo = useCallback(
    (target: number) => {
      setState((s) => {
        const index = Math.min(Math.max(target, 0), total - 1);
        if (index === s.index) return s;
        return { index, direction: index > s.index ? 1 : -1 };
      });
    },
    [total],
  );

  const next = useCallback(() => setState((s) => (s.index >= total - 1 ? s : { index: s.index + 1, direction: 1 })), [total]);
  const prev = useCallback(() => setState((s) => (s.index <= 0 ? s : { index: s.index - 1, direction: -1 })), []);

  // Keep the URL in sync so a refresh lands on the same slide.
  useEffect(() => {
    const hash = `#/${state.index + 1}`;
    if (window.location.hash !== hash) window.history.replaceState(null, '', hash);
  }, [state.index]);

  useEffect(() => {
    const onHash = () => goTo(readHash(total));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [goTo, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))) return;

      if (NEXT_KEYS.has(e.key)) {
        e.preventDefault();
        next();
      } else if (PREV_KEYS.has(e.key)) {
        e.preventDefault();
        prev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goTo(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goTo(total - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, goTo, total]);

  return { ...state, total, next, prev, goTo };
}
