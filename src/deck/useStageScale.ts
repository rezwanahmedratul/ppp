import { useLayoutEffect, useState } from 'react';

/**
 * Returns the scale factor that fits a fixed-size stage (default 1920×1080)
 * inside the current viewport, letterboxing as needed — just like Keynote.
 */
export function useStageScale(width = 1920, height = 1080): number {
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const update = () => setScale(Math.min(window.innerWidth / width, window.innerHeight / height));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [width, height]);

  return scale;
}
