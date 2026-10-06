import type { ReactNode } from 'react';
import { AnimatedTitle } from './AnimatedTitle';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';
import { BottomLine } from './BottomLine';
import { RichText } from './RichText';

interface SlideLayoutProps {
  eyebrow: string;
  title: string;
  titleSize?: 'xl' | 'lg' | 'md';
  lede?: string;
  footer?: string;
  footerDelay?: number;
  align?: 'left' | 'center';
  className?: string;
  children?: ReactNode;
}

/**
 * Standard slide scaffold: eyebrow → animated title → optional lede → body → optional take-away.
 * The body is a positioned flex region that diagrams can fill (see <Diagram fit />).
 */
export function SlideLayout({
  eyebrow,
  title,
  titleSize = 'lg',
  lede,
  footer,
  footerDelay,
  align = 'left',
  className = '',
  children,
}: SlideLayoutProps) {
  return (
    <section className={`slide slide--${align} ${className}`}>
      <header className="slide-head">
        <Eyebrow label={eyebrow} />
        <AnimatedTitle text={title} className={`slide-title slide-title--${titleSize}`} />
        {lede && (
          <Reveal delay={0.75} className="slide-lede">
            <RichText text={lede} />
          </Reveal>
        )}
      </header>
      <div className="slide-body">{children}</div>
      {footer && <BottomLine text={footer} delay={footerDelay} align={align} />}
    </section>
  );
}
