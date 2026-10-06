import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'motion/react';
import { EASE_OUT } from '../lib/motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  /** Starting offset; positive y rises up, positive x slides in from the right. */
  y?: number;
  x?: number;
  scale?: number;
  blur?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

/** The workhorse entrance: fade + rise + de-blur. */
export function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  y = 28,
  x = 0,
  scale = 1,
  blur = true,
  className,
  style,
  id,
}: RevealProps) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y, x, scale, filter: blur ? 'blur(8px)' : 'blur(0px)' }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' }}
      transition={{ delay, duration, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
