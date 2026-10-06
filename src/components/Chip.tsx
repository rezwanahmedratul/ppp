import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { EASE_OUT } from '../lib/motion';

interface ChipProps {
  children: ReactNode;
  delay?: number;
  variant?: 'outline' | 'ember' | 'ink' | 'soft';
  className?: string;
}

/** Small pill label. */
export function Chip({ children, delay = 0, variant = 'outline', className = '' }: ChipProps) {
  return (
    <motion.span
      className={`chip chip--${variant} ${className}`}
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.55, ease: EASE_OUT }}
    >
      {children}
    </motion.span>
  );
}
