import { motion } from 'motion/react';
import { EASE_OUT } from '../lib/motion';
import { pad2, useSlide } from '../deck/SlideContext';

interface EyebrowProps {
  label: string;
  delay?: number;
  /** Prefix with the slide number automatically (default true). */
  numbered?: boolean;
  className?: string;
}

/** Small mono label above a headline: "05 — Data Modeling". The rule draws in from the left. */
export function Eyebrow({ label, delay = 0.25, numbered = true, className = '' }: EyebrowProps) {
  const { index } = useSlide();
  return (
    <div className={`eyebrow ${className}`}>
      {numbered && (
        <motion.span
          className="eyebrow-num"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay, duration: 0.6, ease: EASE_OUT }}
        >
          {pad2(index + 1)}
        </motion.span>
      )}
      <motion.span
        className="eyebrow-rule"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: delay + 0.1, duration: 0.8, ease: EASE_OUT }}
      />
      <motion.span
        className="kicker"
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: delay + 0.25, duration: 0.7, ease: EASE_OUT }}
      >
        {label}
      </motion.span>
    </div>
  );
}
