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
                borderRadius: '20px',
                background: 'var(--paper-2)',
                border: '2px solid var(--line)',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--ember)',
                boxShadow: 'var(--shadow-1)',
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
              padding: '16px 20px',
              borderRadius: '16px',
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              fontFamily: 'var(--font-mono)',
              fontSize: '15px',
              color: 'var(--brown)',
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
                borderRadius: '20px',
                background: 'var(--paper-3)',
                border: '2px solid var(--line)',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--brown)',
                boxShadow: 'var(--shadow-1)',
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
              padding: '16px 20px',
              borderRadius: '16px',
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              fontFamily: 'var(--font-mono)',
              fontSize: '15px',
              color: 'var(--brown)',
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
