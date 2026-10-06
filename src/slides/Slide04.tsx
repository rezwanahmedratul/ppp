import { Database, Boxes } from 'lucide-react';
import { SlideLayout, Reveal } from '../components';

export function Slide04() {
  const dataFocus = ['Data', 'Storage', 'Relationships', 'Persistence'];
  const ooFocus = ['Objects', 'Behavior', 'State', 'Interactions'];

  return (
    <SlideLayout
      eyebrow="Architectural Lenses"
      title="*Data Modeling* vs. *Object-Oriented* Modeling"
      footer="One system. Two complementary perspectives."
      footerDelay={1.3}
    >
      <div className="grid-2col">
        {/* Left: Data Modeling */}
        <Reveal delay={0.4} x={-20} className="split-card">
          <div className="split-card-head">
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '22px',
                background: 'var(--ember-soft)',
                border: '1.5px solid rgba(224, 78, 31, 0.25)',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--ember)',
                boxShadow: '0 8px 24px -6px var(--ember-glow)',
              }}
            >
              <Database size={42} strokeWidth={2.2} />
            </div>
            <div>
              <div className="split-card-kicker">Relational View</div>
              <h3 className="split-card-title">Data Modeling</h3>
            </div>
          </div>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Focuses primarily on:
          </p>

          <div className="split-list">
            {dataFocus.map((item, i) => (
              <Reveal key={item} delay={0.6 + i * 0.1} y={12} className="split-list-item">
                <span className="split-list-dot" />
                <span>{item}</span>
              </Reveal>
            ))}
          </div>

          <div
            style={{
              marginTop: 'auto',
              padding: '16px 22px',
              borderRadius: '16px',
              background: 'rgba(248, 244, 238, 0.9)',
              border: '1.5px solid var(--card-border)',
              fontFamily: 'var(--font-mono)',
              fontSize: '15px',
              color: 'var(--brown)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            }}
          >
            Emphasis: Tables, keys, schema constraints & relational integrity.
          </div>
        </Reveal>

        {/* Right: OO Modeling */}
        <Reveal delay={0.55} x={20} className="split-card accent">
          <div className="split-card-head">
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '22px',
                background: 'var(--sand)',
                border: '1.5px solid var(--tan)',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--brown-deep)',
                boxShadow: '0 8px 24px -6px rgba(122, 74, 46, 0.15)',
              }}
            >
              <Boxes size={42} strokeWidth={2.2} />
            </div>
            <div>
              <div className="split-card-kicker">Behavioral View</div>
              <h3 className="split-card-title">Object-Oriented Modeling</h3>
            </div>
          </div>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Focuses primarily on:
          </p>

          <div className="split-list">
            {ooFocus.map((item, i) => (
              <Reveal key={item} delay={0.75 + i * 0.1} y={12} className="split-list-item">
                <span className="split-list-dot" style={{ background: 'var(--brown)' }} />
                <span>{item}</span>
              </Reveal>
            ))}
          </div>

          <div
            style={{
              marginTop: 'auto',
              padding: '16px 22px',
              borderRadius: '16px',
              background: 'rgba(248, 244, 238, 0.9)',
              border: '1.5px solid var(--card-border)',
              fontFamily: 'var(--font-mono)',
              fontSize: '15px',
              color: 'var(--brown)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            }}
          >
            Emphasis: Classes, methods, message passing & encapsulation.
          </div>
        </Reveal>
      </div>
    </SlideLayout>
  );
}

export const slide04Notes =
  "A system can be examined through two foundational paradigms: Data Modeling and Object-Oriented Modeling. Data modeling prioritizes relational persistence, storage schemas, and relational constraints. Object-Oriented modeling concentrates on runtime objects, behavior, state transitions, and interactions. Neither is superior alone—they provide two complementary perspectives of the same reality.";
