import { motion } from 'motion/react';
import type { Pt } from '../lib/geometry';
import type { Tone } from './Connector';

export type CrowKind = 'one' | 'many' | 'oneMany' | 'zeroMany' | 'zeroOne';

interface CrowEndProps {
  /** The point where the relationship line meets the entity edge. */
  at: Pt;
  /** Direction (deg) pointing from the line INTO the entity: 0 → right, 90 → down, 180 → left, -90 → up. */
  angle: number;
  kind: CrowKind;
  delay?: number;
  tone?: Tone;
}

/** Crow's-foot notation glyph drawn at a relationship endpoint. */
export function CrowEnd({ at, angle, kind, delay = 0, tone = 'ink' }: CrowEndProps) {
  const many = kind === 'many' || kind === 'oneMany' || kind === 'zeroMany';
  return (
    <g transform={`translate(${at[0]} ${at[1]}) rotate(${angle})`} className={`crow tone-${tone}`}>
      <motion.g
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, type: 'spring', stiffness: 300, damping: 18 }}
      >
        {many && <path d="M -24 0 L 0 -14 M -24 0 L 0 0 M -24 0 L 0 14" />}
        {kind === 'one' && <path d="M -10 -12 L -10 12 M -19 -12 L -19 12" />}
        {kind === 'oneMany' && <path d="M -32 -12 L -32 12" />}
        {kind === 'zeroMany' && <circle cx={-38} cy={0} r={7} className="crow-zero" />}
        {kind === 'zeroOne' && (
          <>
            <path d="M -10 -12 L -10 12" />
            <circle cx={-26} cy={0} r={7} className="crow-zero" />
          </>
        )}
      </motion.g>
    </g>
  );
}
