import { motion } from 'motion/react';
import { EASE_IN_OUT, EASE_OUT } from '../lib/motion';
import { arrowHead, roundedPath, smoothPath } from '../lib/geometry';
import type { Pt } from '../lib/geometry';

export type Tone = 'ink' | 'ember' | 'brown' | 'muted' | 'tan';

interface ConnectorLabel {
  text: string;
  x: number;
  y: number;
  anchor?: 'start' | 'middle' | 'end';
  italic?: boolean;
}

export interface ConnectorProps {
  points: readonly Pt[];
  delay?: number;
  duration?: number;
  arrow?: 'end' | 'start' | 'both' | 'none';
  /** Hollow triangle (UML generalization) at the end instead of a filled arrow. */
  hollow?: boolean;
  dashed?: boolean;
  tone?: Tone;
  width?: number;
  radius?: number;
  smooth?: boolean;
  label?: ConnectorLabel;
  /** Animate a glowing dot travelling along the path (data in motion). */
  flow?: boolean | { dur?: number; r?: number };
}

/** An SVG connector that draws itself, then optionally pulses data along its length. */
export function Connector({
  points,
  delay = 0,
  duration = 0.8,
  arrow = 'none',
  hollow = false,
  dashed = false,
  tone = 'ink',
  width = 2,
  radius = 14,
  smooth = false,
  label,
  flow = false,
}: ConnectorProps) {
  const d = smooth ? smoothPath(points) : roundedPath(points, radius);
  const n = points.length;
  const headEnd = arrow === 'end' || arrow === 'both';
  const headStart = arrow === 'start' || arrow === 'both';
  const after = delay + duration * 0.85;
  const flowCfg = typeof flow === 'object' ? flow : {};

  return (
    <g className={`connector tone-${tone}`}>
      {dashed ? (
        <motion.path
          d={d}
          className="connector-line is-dashed"
          strokeWidth={width}
          initial={{ opacity: 0, strokeDashoffset: 0 }}
          animate={{ opacity: 1, strokeDashoffset: -40 }}
          transition={{
            opacity: { delay, duration: 0.6 },
            strokeDashoffset: { delay, duration: 1.6, repeat: Infinity, ease: 'linear' },
          }}
        />
      ) : (
        <motion.path
          d={d}
          className="connector-line"
          strokeWidth={width}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { delay, duration, ease: EASE_IN_OUT },
            opacity: { delay, duration: 0.15 },
          }}
        />
      )}

      {headEnd && (
        <motion.path
          d={arrowHead(points[n - 2], points[n - 1], hollow ? 18 : 13)}
          className={hollow ? 'connector-head is-hollow' : 'connector-head'}
          strokeWidth={hollow ? width : 0}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: after, duration: 0.3 }}
        />
      )}
      {headStart && (
        <motion.path
          d={arrowHead(points[1], points[0])}
          className="connector-head"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: after, duration: 0.3 }}
        />
      )}

      {label && (
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + duration * 0.6, duration: 0.6, ease: EASE_OUT }}
        >
          <text
            x={label.x}
            y={label.y}
            textAnchor={label.anchor ?? 'middle'}
            className={`connector-label ${label.italic === false ? '' : 'is-italic'}`}
          >
            {label.text}
          </text>
        </motion.g>
      )}

      {flow && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + duration, duration: 0.4 }}>
          <circle r={(flowCfg.r ?? 6) + 6} className="flow-halo">
            <animateMotion dur={`${flowCfg.dur ?? 2.4}s`} repeatCount="indefinite" path={d} />
          </circle>
          <circle r={flowCfg.r ?? 6} className="flow-dot">
            <animateMotion dur={`${flowCfg.dur ?? 2.4}s`} repeatCount="indefinite" path={d} />
          </circle>
        </motion.g>
      )}
    </g>
  );
}
