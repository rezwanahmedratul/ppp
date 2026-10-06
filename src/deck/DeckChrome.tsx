import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { EASE_OUT } from '../lib/motion';
import { pad2 } from './SlideContext';

interface DeckChromeProps {
  index: number;
  total: number;
  section: string;
  onPrev: () => void;
  onNext: () => void;
  onJump: (i: number) => void;
  showHint: boolean;
}

/** Persistent keynote "chrome": brand, section label, progress, counter and controls. */
export function DeckChrome({ index, total, section, onPrev, onNext, onJump, showHint }: DeckChromeProps) {
  return (
    <div className="chrome">
      <div className="chrome-top">
        <div className="chrome-brand">
          <span className="chrome-brand-mark" />
          <span>Data &amp; Object-Oriented System Design</span>
        </div>

        <div className="chrome-section">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={section}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE_OUT }}
            >
              {section}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="chrome-bottom">
        <AnimatePresence>
          {showHint && (
            <motion.div
              className="chrome-hint"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1.6, duration: 0.6 } }}
              exit={{ opacity: 0, y: 8, transition: { duration: 0.3 } }}
            >
              <kbd>←</kbd>
              <kbd>→</kbd>
              <span>navigate</span>
              <span className="chrome-hint-sep" />
              <kbd>F</kbd>
              <span>fullscreen</span>
              <span className="chrome-hint-sep" />
              <kbd>N</kbd>
              <span>notes</span>
            </motion.div>
          )}
        </AnimatePresence>

        <nav className="chrome-progress" aria-label="Slides">
          {Array.from({ length: total }, (_, i) => (
            <button
              key={i}
              id={`progress-dot-${i + 1}`}
              className={`chrome-tick ${i < index ? 'is-past' : ''} ${i === index ? 'is-current' : ''}`}
              onClick={() => onJump(i)}
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === index && <motion.span layoutId="tick-active" className="chrome-tick-active" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
            </button>
          ))}
        </nav>

        <div className="chrome-controls">
          <button id="nav-prev" className="chrome-btn" onClick={onPrev} disabled={index === 0} aria-label="Previous slide">
            <ArrowLeft size={18} strokeWidth={2} />
          </button>
          <div className="chrome-counter mono">
            <span className="chrome-counter-current">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={index}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE_OUT }}
                >
                  {pad2(index + 1)}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="chrome-counter-sep">/</span>
            <span>{pad2(total)}</span>
          </div>
          <button id="nav-next" className="chrome-btn" onClick={onNext} disabled={index === total - 1} aria-label="Next slide">
            <ArrowRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
