import { AnimatePresence, motion } from 'motion/react';
import { EASE_OUT } from '../lib/motion';
import { pad2 } from './SlideContext';

interface NotesPanelProps {
  open: boolean;
  index: number;
  title: string;
  notes?: string;
}

/** Speaker-notes drawer (toggle with N). Rendered outside the scaled stage at real pixel size. */
export function NotesPanel({ open, index, title, notes }: NotesPanelProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="notes"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          aria-live="polite"
        >
          <div className="notes-head">
            <span className="kicker">Speaker notes · {pad2(index + 1)}</span>
            <span className="notes-title">{title}</span>
          </div>
          <p className="notes-body">{notes ?? 'No notes for this slide.'}</p>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
