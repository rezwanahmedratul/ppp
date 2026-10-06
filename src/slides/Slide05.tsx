import { ArrowDown, HelpCircle, Network, HardDrive } from 'lucide-react';
import { SlideLayout, Reveal } from '../components';

export function Slide05() {
  const levels = [
    {
      level: 'CONCEPTUAL',
      q: '“What exists?”',
      desc: 'High-level business concepts, domain entities, and core semantic relationships without technical details.',
      tags: ['Business Concepts', 'Entities & Relationships'],
      icon: HelpCircle,
      delay: 0.4,
    },
    {
      level: 'LOGICAL',
      q: '“How is it structured?”',
      desc: 'Detailed schema specification including all attributes, primary & foreign keys, normalization, and cardinalities.',
      tags: ['Attributes', 'PK / FK / Cardinality'],
      icon: Network,
      delay: 0.65,
    },
    {
      level: 'PHYSICAL',
      q: '“How will it actually be stored?”',
      desc: 'Database engine implementation: explicit tables, columnar data types, storage engines, indexes, and performance constraints.',
      tags: ['Tables / Data Types', 'Indexes / Constraints'],
      icon: HardDrive,
      delay: 0.9,
    },
  ];

  return (
    <SlideLayout
      eyebrow="Data Modeling · Three Levels of Abstraction"
      title="From *Business Idea* to Database"
      lede="Data modeling progresses across three sequential abstraction levels: from high-level human ideas to machine storage."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '1360px', margin: '0 auto', height: '100%', justifyContent: 'center' }}>
        {levels.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={item.level} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <Reveal delay={item.delay} y={18} className="s5-tier-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flex: 1 }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '18px',
                      background: idx === 0 ? 'var(--sand)' : idx === 1 ? 'var(--ember-soft)' : 'var(--paper-3)',
                      color: idx === 1 ? 'var(--ember)' : idx === 0 ? 'var(--brown-deep)' : 'var(--ink)',
                      display: 'grid',
                      placeItems: 'center',
                      boxShadow: idx === 1 ? '0 8px 24px -6px var(--ember-glow)' : '0 4px 12px rgba(0,0,0,0.05)',
                    }}
                  >
                    <Icon size={32} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span className="s5-tier-title">{item.level}</span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            style={{
                              padding: '4px 14px',
                              borderRadius: '999px',
                              background: 'rgba(255, 255, 255, 0.9)',
                              border: '1px solid var(--card-border)',
                              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '13px',
                              fontWeight: 600,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p style={{ marginTop: '6px', fontSize: '17px', color: 'var(--muted)', maxWidth: '780px' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Question Callout */}
                <div className="s5-side-annotation" style={{ minWidth: '320px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                    Guiding Question
                  </span>
                  <span className="s5-side-q">{item.q}</span>
                </div>
              </Reveal>

              {idx < 2 && (
                <Reveal delay={item.delay + 0.15} y={0} style={{ alignSelf: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ember)', animation: 'floatGentle 2.5s ease-in-out infinite' }}>
                    <ArrowDown size={24} strokeWidth={2.5} />
                  </div>
                </Reveal>
              )}
            </div>
          );
        })}
      </div>
    </SlideLayout>
  );
}

export const slide05Notes =
  "In systems engineering, database design never jumps straight to table creation. We follow three sequential levels: Conceptual ('What exists?'), capturing raw business concepts; Logical ('How is it structured?'), defining attributes, primary keys, and relationships; and Physical ('How will it actually be stored?'), choosing data types, indexes, and storage constraints in a specific DBMS.";
