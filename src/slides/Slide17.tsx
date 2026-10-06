import { ArrowRight, Sparkles } from 'lucide-react';
import { SlideLayout, Reveal } from '../components';

export function Slide17() {
  const pipeline = [
    {
      title: 'REAL-WORLD PROBLEM',
      sub: 'Business requirements & scenario',
      chips: ['User needs', 'Domain rules'],
      delay: 0.35,
    },
    {
      title: 'SYSTEM MODELING',
      sub: 'High-level architectural abstraction',
      chips: ['Simplification', 'Validation'],
      delay: 0.5,
    },
    {
      title: 'DATA MODEL',
      sub: 'Relational persistence & flow',
      chips: ['ERD', 'DFD', '3NF Normalization'],
      featured: true,
      delay: 0.65,
    },
    {
      title: 'OBJECT MODEL',
      sub: 'Classes, encapsulation & behavior',
      chips: ['Classes & Objects', '4 OOP Pillars'],
      featured: true,
      delay: 0.8,
    },
    {
      title: 'UML SPECIFICATION',
      sub: 'Standardized blueprints',
      chips: ['Use Case / Sequence', 'Activity / Class'],
      delay: 0.95,
    },
    {
      title: 'SOFTWARE SYSTEM',
      sub: 'Scalable, maintainable application',
      chips: ['Production Code', 'Relational DB'],
      highlight: true,
      delay: 1.1,
    },
  ];

  return (
    <SlideLayout
      eyebrow="Grand Synthesis · Conclusion"
      title="From Real World → *Working Software*"
      titleSize="lg"
      align="center"
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Horizontal Pipeline */}
        <div className="synthesis-pipeline" style={{ maxWidth: '1680px', margin: '16px auto 0' }}>
          {pipeline.map((step, idx) => (
            <div key={step.title} style={{ display: 'flex', alignItems: 'center', flex: 1, gap: '12px' }}>
              <Reveal
                delay={step.delay}
                y={20}
                className={`syn-block ${step.highlight ? 'featured' : ''}`}
                style={step.highlight ? { background: 'var(--ink)', color: 'var(--paper)', borderColor: 'var(--ink)' } : {}}
              >
                <span
                  className="syn-block-title"
                  style={step.highlight ? { color: 'var(--ember-2)' } : step.featured ? { color: 'var(--ember)' } : {}}
                >
                  {step.title}
                </span>

                <div className="syn-chips">
                  {step.chips.map((c) => (
                    <span
                      key={c}
                      className="syn-chip"
                      style={step.highlight ? { background: 'rgba(255,255,255,0.12)', color: '#fff' } : {}}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </Reveal>

              {idx < pipeline.length - 1 && (
                <Reveal delay={step.delay + 0.1} y={0}>
                  <ArrowRight size={22} color="var(--ember)" />
                </Reveal>
              )}
            </div>
          ))}
        </div>

        {/* Big Keynote Punchline */}
        <div style={{ textAlign: 'center', maxWidth: '1200px', margin: '24px auto 0' }}>
          <Reveal delay={1.3} y={15}>
            <p
              className="display"
              style={{
                fontSize: '44px',
                lineHeight: 1.25,
                color: 'var(--ink)',
              }}
            >
              “Good models turn complexity into something we can{' '}
              <em className="em">understand</em>, <em className="em">communicate</em>, and <em className="em">build</em>.”
            </p>
          </Reveal>

          <Reveal delay={1.5} y={10}>
            <div
              style={{
                marginTop: '28px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                padding: '12px 34px',
                borderRadius: '999px',
                background: 'var(--grad-ink)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--paper)',
                boxShadow: 'var(--shadow-3)',
              }}
            >
              <Sparkles size={18} color="var(--ember)" style={{ animation: 'pulseSubtle 2.5s ease-in-out infinite' }} />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontStyle: 'italic',
                  letterSpacing: '0.04em',
                }}
              >
                Thank You
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--tan)', letterSpacing: '0.12em' }}>
                · GROUP PRESENTATION
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </SlideLayout>
  );
}

export const slide17Notes =
  "In closing: great software engineering is not about typing code faster. It is about disciplined modeling. By transforming real-world chaos through data models (ERD, DFD, Normalization), object models (Classes, OOP Pillars), and unified UML diagrams, we create systems that are scalable, maintainable, and understandable. Thank you!";
