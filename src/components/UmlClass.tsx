import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'motion/react';
import { EASE_OUT } from '../lib/motion';

export type UmlSize = 'md' | 'lg';

/** Fixed metrics so connectors can be attached precisely. */
export const UML_METRICS: Record<UmlSize, { header: number; row: number; padY: number }> = {
  md: { header: 58, row: 32, padY: 7 },
  lg: { header: 76, row: 46, padY: 12 },
};

const BORDER = 2;
const DIVIDER = 2;

/** Total pixel height of a UML class box. */
export function umlHeight(attrs: number, methods: number, size: UmlSize = 'md'): number {
  const m = UML_METRICS[size];
  const section = (n: number) => DIVIDER + m.padY * 2 + n * m.row;
  return BORDER * 2 + m.header + section(attrs) + (methods > 0 ? section(methods) : 0);
}

interface UmlClassProps {
  name: string;
  attrs: readonly string[];
  methods?: readonly string[];
  /** Absolute position (omit to render in normal flow). */
  x?: number;
  y?: number;
  w: number;
  size?: UmlSize;
  delay?: number;
  variant?: 'default' | 'ember' | 'ink' | 'blueprint' | 'instance';
  /** Small adornment rendered at the start of the header (icon, swatch…). */
  adornment?: ReactNode;
  stereotype?: string;
  className?: string;
  style?: CSSProperties;
}

/** UML class / object box: name · attributes · operations. */
export function UmlClass({
  name,
  attrs,
  methods = [],
  x,
  y,
  w,
  size = 'md',
  delay = 0,
  variant = 'default',
  adornment,
  stereotype,
  className = '',
  style,
}: UmlClassProps) {
  const m = UML_METRICS[size];
  const positioned = x !== undefined && y !== undefined;
  const rowDelay = (i: number) => delay + 0.3 + i * 0.07;

  return (
    <motion.div
      className={`uml uml--${size} uml--${variant} ${positioned ? 'is-positioned' : ''} ${className}`}
      style={{
        left: x,
        top: y,
        width: w,
        height: umlHeight(attrs.length, methods.length, size),
        ['--uml-header' as string]: `${m.header}px`,
        ['--uml-row' as string]: `${m.row}px`,
        ['--uml-pad' as string]: `${m.padY}px`,
        ...style,
      }}
      initial={{ opacity: 0, y: 22, scale: 0.94, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      transition={{ delay, duration: 0.85, ease: EASE_OUT }}
    >
      <div className="uml-head">
        {adornment}
        <div className="uml-name-wrap">
          {stereotype && <span className="uml-stereo">«{stereotype}»</span>}
          <span className="uml-name">{name}</span>
        </div>
      </div>
      <ul className="uml-section">
        {attrs.map((a, i) => (
          <motion.li
            key={a}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: rowDelay(i), duration: 0.5, ease: EASE_OUT }}
          >
            {a}
          </motion.li>
        ))}
      </ul>
      {methods.length > 0 && (
        <ul className="uml-section uml-section--methods">
          {methods.map((meth, i) => (
            <motion.li
              key={meth}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: rowDelay(attrs.length + i), duration: 0.5, ease: EASE_OUT }}
            >
              {meth}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
