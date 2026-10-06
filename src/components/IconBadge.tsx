import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface IconBadgeProps {
  children: ReactNode;
  size?: number;
  delay?: number;
  variant?: 'ember' | 'ink' | 'paper' | 'soft' | 'brown';
  /** Adds a slow breathing ring around the badge. */
  pulse?: boolean;
  className?: string;
}

/** A round icon medallion that springs in. */
export function IconBadge({ children, size = 96, delay = 0, variant = 'paper', pulse = false, className = '' }: IconBadgeProps) {
  return (
    <motion.div
      className={`icon-badge icon-badge--${variant} ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.3, rotate: -25 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay, type: 'spring', stiffness: 220, damping: 16 }}
    >
      {pulse && <span className="icon-badge-pulse" />}
      {children}
    </motion.div>
  );
}
