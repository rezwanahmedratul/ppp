import { motion } from 'motion/react';
import { EASE_IN_OUT } from '../lib/motion';

/** Blob positions (in % of viewport) per slide — they glide between slides like Magic Move. */
const PRESETS: ReadonlyArray<{ ember: [number, number]; brown: [number, number]; sand: [number, number] }> = [
  { ember: [82, 18], brown: [10, 92], sand: [55, 60] },
  { ember: [12, 20], brown: [88, 88], sand: [60, 30] },
  { ember: [88, 80], brown: [18, 14], sand: [40, 70] },
  { ember: [50, 10], brown: [92, 60], sand: [8, 70] },
  { ember: [14, 78], brown: [82, 16], sand: [60, 82] },
  { ember: [92, 30], brown: [30, 96], sand: [20, 20] },
];

const pct = ([x, y]: [number, number]) => ({ left: `${x}%`, top: `${y}%` });

export function AmbientBackground({ index }: { index: number }) {
  const p = PRESETS[index % PRESETS.length];
  const t = { duration: 2.6, ease: EASE_IN_OUT };

  return (
    <div className="ambient" aria-hidden="true">
      <motion.div className="ambient-blob ambient-blob--ember" initial={false} animate={pct(p.ember)} transition={t} />
      <motion.div className="ambient-blob ambient-blob--brown" initial={false} animate={pct(p.brown)} transition={t} />
      <motion.div className="ambient-blob ambient-blob--sand" initial={false} animate={pct(p.sand)} transition={t} />
      <div className="ambient-dots" />
      <div className="ambient-grain" />
    </div>
  );
}
