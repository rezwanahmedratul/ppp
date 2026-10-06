import { motion } from 'motion/react';
import { EASE_OUT } from '../lib/motion';

export interface EntityAttr {
  name: string;
  key?: 'PK' | 'FK';
}

interface EntityBoxProps {
  name: string;
  attrs: readonly EntityAttr[];
  x: number;
  y: number;
  w: number;
  delay?: number;
  accent?: boolean;
}

/** Fixed metrics so connectors can be attached precisely. */
export const ENTITY = { border: 2, header: 54, padY: 6, row: 38 } as const;

/** Total pixel height of an entity box with `n` attribute rows. */
export function entityHeight(n: number): number {
  return ENTITY.border * 2 + ENTITY.header + 2 + ENTITY.padY * 2 + n * ENTITY.row;
}

/** ER-diagram entity: name header + attribute rows with PK/FK badges. */
export function EntityBox({ name, attrs, x, y, w, delay = 0, accent = false }: EntityBoxProps) {
  return (
    <motion.div
      className={`entity ${accent ? 'entity--accent' : ''}`}
      style={{ left: x, top: y, width: w, height: entityHeight(attrs.length) }}
      initial={{ opacity: 0, y: 20, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: EASE_OUT }}
    >
      <div className="entity-head">{name}</div>
      <ul className="entity-body">
        {attrs.map((a, i) => (
          <motion.li
            key={a.name}
            className="entity-row"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.25 + i * 0.06, duration: 0.5, ease: EASE_OUT }}
          >
            <span className={`entity-key ${a.key ? `is-${a.key.toLowerCase()}` : ''}`}>{a.key ?? ''}</span>
            <span className="entity-attr">{a.name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
