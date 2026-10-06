import { Fragment, createElement } from 'react';
import { motion } from 'motion/react';
import { EASE_OUT } from '../lib/motion';

interface AnimatedTitleProps {
  /**
   * Title text. Wrap words in *asterisks* for italic ember emphasis
   * (multi-word allowed: "*whole story*"). Use "\n" to force a line break.
   */
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  delay?: number;
  stagger?: number;
  className?: string;
}

interface Token {
  word: string;
  em: boolean;
  br: boolean;
}

function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  let inEm = false;
  for (const line of text.split('\n').map((l, i) => ({ l, i }))) {
    if (line.i > 0) tokens.push({ word: '', em: false, br: true });
    for (const raw of line.l.split(' ').filter(Boolean)) {
      let word = raw;
      if (word.startsWith('*')) {
        inEm = true;
        word = word.slice(1);
      }
      // A closing star may be followed by punctuation, e.g. "*Messy*?"
      const closeIdx = word.indexOf('*');
      if (closeIdx !== -1) {
        const before = word.slice(0, closeIdx);
        const after = word.slice(closeIdx + 1);
        tokens.push({ word: after ? `${before}\u0000${after}` : before, em: true, br: false });
        inEm = false;
        continue;
      }
      tokens.push({ word, em: inEm, br: false });
    }
  }
  return tokens;
}

/** Keynote-style headline: every word rises out of a mask, one after another. */
export function AnimatedTitle({ text, as = 'h2', delay = 0.35, stagger = 0.07, className = '' }: AnimatedTitleProps) {
  const tokens = tokenize(text);
  let wordIndex = 0;

  const children = tokens.map((t, i) => {
    if (t.br) return <br key={`br-${i}`} />;
    const [main, trailing] = t.word.split('\u0000');
    const idx = wordIndex++;
    return (
      <Fragment key={i}>
        <span className="word-mask">
          <motion.span
            className="word"
            initial={{ y: '115%', rotate: 4, opacity: 0 }}
            animate={{ y: '0%', rotate: 0, opacity: 1 }}
            transition={{ delay: delay + idx * stagger, duration: 1, ease: EASE_OUT }}
          >
            {t.em ? <em>{main}</em> : main}
            {trailing}
          </motion.span>
        </span>{' '}
      </Fragment>
    );
  });

  return createElement(as, { className: `display animated-title ${className}` }, children);
}
