import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import type { SlideDefinition } from './types';
import { SlideContext } from './SlideContext';
import { useDeckNavigation } from './useDeckNavigation';
import { useStageScale } from './useStageScale';
import { slideVariants } from './slideTransition';
import { AmbientBackground } from './AmbientBackground';
import { DeckChrome } from './DeckChrome';
import { NotesPanel } from './NotesPanel';
import '../styles/deck.css';

const STAGE_W = 1920;
const STAGE_H = 1080;

function toggleFullscreen() {
  if (document.fullscreenElement) void document.exitFullscreen();
  else void document.documentElement.requestFullscreen?.();
}

/** The presentation shell: scales a 1920×1080 stage and swaps slides with keynote transitions. */
export function Deck({ slides }: { slides: readonly SlideDefinition[] }) {
  const nav = useDeckNavigation(slides.length);
  const scale = useStageScale(STAGE_W, STAGE_H);
  const [notesOpen, setNotesOpen] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const firstIndex = useRef(nav.index);

  const slide = slides[nav.index];

  useEffect(() => {
    if (nav.index !== firstIndex.current) setHasNavigated(true);
  }, [nav.index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase();
      if (k === 'f') toggleFullscreen();
      else if (k === 'n') setNotesOpen((o) => !o);
      else if (k === 'escape') setNotesOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.title = `${slide.title} — Data & OO System Design`;
  }, [slide.title]);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const s = touchStart.current;
    touchStart.current = null;
    if (!s) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - s.x;
    const dy = t.clientY - s.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) nav.next();
      else nav.prev();
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="deck" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <AmbientBackground index={nav.index} />

        <div
          className="stage"
          style={{ width: STAGE_W, height: STAGE_H, transform: `translate(-50%, -50%) scale(${scale})` }}
        >
          <AnimatePresence initial custom={nav.direction}>
            <motion.div
              key={slide.id}
              className="slide-shell"
              custom={nav.direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <SlideContext.Provider value={{ index: nav.index, total: nav.total }}>
                <slide.Component />
              </SlideContext.Provider>
            </motion.div>
          </AnimatePresence>

          <DeckChrome
            index={nav.index}
            total={nav.total}
            section={slide.section}
            onPrev={nav.prev}
            onNext={nav.next}
            onJump={nav.goTo}
            showHint={!hasNavigated}
          />
        </div>

        <NotesPanel open={notesOpen} index={nav.index} title={slide.title} notes={slide.notes} />
      </main>
    </MotionConfig>
  );
}
