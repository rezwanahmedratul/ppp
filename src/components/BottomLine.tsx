import { motion } from 'motion/react';
import { EASE_OUT } from '../lib/motion';
import { RichText } from './RichText';

interface BottomLineProps {
  text: string;
  delay?: number;
  align?: 'left' | 'center';
  className?: string;
}

/** The slide's take-away statement: an ember rule draws, then the sentence rises in. */
export function BottomLine({ text, delay = 1.6, align = 'left', className = '' }: BottomLineProps) {
  return (
    <div className={`bottom-line bottom-line--${align} ${className}`}>
      <motion.span
        className="bottom-line-rule"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay, duration: 0.9, ease: EASE_OUT }}
      />
      <motion.p
        className="bottom-line-text serif"
        initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: delay + 0.25, duration: 0.9, ease: EASE_OUT }}
      >
        <RichText text={text} />
      </motion.p>
    </div>
  );
}
