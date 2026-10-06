import { useLayoutEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface DiagramProps {
  /** Design-space size; children are positioned absolutely within it. */
  width: number;
  height: number;
  /** SVG layer (connectors, crow's feet, art) drawn beneath the HTML nodes. */
  lines?: ReactNode;
  /** SVG layer drawn above the HTML nodes (labels, pointers). */
  overlay?: ReactNode;
  children?: ReactNode;
  /** Scale down to fit the parent box (never scales up). Default true. */
  fit?: boolean;
  className?: string;
}

/**
 * A fixed-coordinate canvas for diagrams. HTML boxes and SVG connectors share
 * one coordinate system, and the whole thing scales to fit its container.
 */
export function Diagram({ width, height, lines, overlay, children, fit = true, className = '' }: DiagramProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const host = hostRef.current;
    if (!host || !fit) return;
    const measure = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      if (!w || !h) return;
      setScale(Math.min(1, w / width, h / height));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(host);
    return () => ro.disconnect();
  }, [fit, width, height]);

  const canvas = (
    <div className={`diagram ${className}`} style={{ width, height, transform: fit ? `scale(${scale})` : undefined }}>
      <svg className="diagram-svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
        {lines}
      </svg>
      {children}
      {overlay && (
        <svg className="diagram-svg diagram-svg--over" width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
          {overlay}
        </svg>
      )}
    </div>
  );

  if (!fit) return canvas;

  return (
    <div ref={hostRef} className="diagram-fit">
      <div style={{ width: width * scale, height: height * scale, position: 'relative' }}>{canvas}</div>
    </div>
  );
}
