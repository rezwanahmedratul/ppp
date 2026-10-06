import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'motion/react';
import { EASE_OUT } from '../lib/motion';

export type BoxVariant = 'outline' | 'solid' | 'ember' | 'soft' | 'ghost' | 'brown';

interface DBoxProps {
  x: number;
  y: number;
  w: number;
  h?: number;
  delay?: number;
  variant?: BoxVariant;
  shape?: 'rect' | 'pill' | 'circle';
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  id?: string;
}

/** An absolutely-positioned diagram node that pops in with a soft spring. */
export function DBox({ x, y, w, h, delay = 0, variant = 'outline', shape = 'rect', className = '', style, children, id }: DBoxProps) {
  return (
    <motion.div
      id={id}
      className={`dbox dbox--${variant} dbox--${shape} ${className}`}
      style={{ left: x, top: y, width: w, height: h, ...style }}
      initial={{ opacity: 0, y: 18, scale: 0.92, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      transition={{ delay, duration: 0.75, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
