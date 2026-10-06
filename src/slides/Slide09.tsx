import { AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SlideLayout, Reveal } from '../components';

export function Slide09() {
  const normSteps = [
    {
      nf: '1NF',
      title: 'First Normal Form',
      rule: 'Atomic values',
      desc: 'No repeating groups or multi-valued columns. Every cell holds exactly one single discrete value.',
      delay: 0.9,
    },
    {
      nf: '2NF',
      title: 'Second Normal Form',
      rule: 'Remove partial dependencies',
      desc: 'All non-key attributes must depend fully on the primary key, not just a portion of a composite key.',
      delay: 1.05,
    },
    {
      nf: '3NF',
      title: 'Third Normal Form',
      rule: 'Remove transitive dependencies',
      desc: 'No non-key attribute may depend on another non-key attribute (X → Y → Z eliminated).',
      delay: 1.2,
    },
  ];

  return (
    <SlideLayout
      eyebrow="Data Integrity · Normalization"
      title="What Happens When *Data Gets Messy*?"
      footer="Goal: Reduce redundancy and maintain data integrity."
      footerDelay={1.4}
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        {/* Top: Bad Table -> Normalization -> Clean Entities */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1.2fr', gap: '32px', alignItems: 'center' }}>
          {/* Deliberately Bad Table */}
          <Reveal delay={0.4} x={-15} className="bad-table-wrap">
            <div className="bad-table-head">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertTriangle size={20} color="#e05b5b" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: '#e05b5b', letterSpacing: '0.1em' }}>
                  UN-NORMALIZED (BAD SCHEMA)
                </span>
              </div>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#a03030' }}>Redundancy & Update Anomalies</span>
            </div>
            <table className="bad-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Pizza 1</th>
                  <th>Pizza 2</th>
                  <th>Pizza 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 600 }}>Rahim</td>
                  <td>Margherita</td>
                  <td>Pepperoni</td>
                  <td style={{ color: 'var(--muted)' }}>—</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Sara</td>
                  <td>BBQ Chicken</td>
                  <td style={{ color: 'var(--muted)' }}>—</td>
                  <td style={{ color: 'var(--muted)' }}>—</td>
                </tr>
              </tbody>
            </table>
          </Reveal>

          {/* Normalization Arrow */}
          <Reveal delay={0.6} y={0}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, color: 'var(--ember)', letterSpacing: '0.12em' }}>
                NORMALIZATION
              </span>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--ember)',
                  color: '#ffffff',
                  display: 'grid',
                  placeItems: 'center',
                  boxShadow: 'var(--shadow-ember)',
                }}
              >
                <ArrowRight size={28} />
              </div>
            </div>
          </Reveal>

          {/* Clean Normalized Chain */}
          <Reveal delay={0.75} x={15}>
            <div
              style={{
                padding: '26px 30px',
                borderRadius: '22px',
                background: 'var(--card-glass)',
                backdropFilter: 'blur(14px)',
                border: '1.5px solid var(--card-border)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <CheckCircle2 size={20} color="var(--ember)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: 'var(--ember)', letterSpacing: '0.12em' }}>
                  CLEAN NORMALIZED ENTITIES
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                {['CUSTOMER', 'ORDER', 'ORDER LINE', 'PIZZA'].map((ent, i) => (
                  <div key={ent} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        padding: '10px 16px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        border: '1.5px solid var(--ink)',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: 'var(--ink)',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                      }}
                    >
                      {ent}
                    </div>
                    {i < 3 && <span style={{ color: 'var(--ember)', fontWeight: 800 }}>→</span>}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom: 3 Normal Form Rule Cards */}
        <div className="grid-3col" style={{ height: 'auto', marginTop: '20px' }}>
          {normSteps.map((s) => (
            <Reveal key={s.nf} delay={s.delay} y={20} className="norm-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="norm-tag">{s.nf}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {s.title}
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '19px', color: 'var(--ink)' }}>
                {s.rule}
              </div>
              <p className="norm-desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

export const slide09Notes =
  "When systems start naively storing multiple pizzas in repeated columns like Pizza 1, Pizza 2, they introduce horrible update anomalies and wasted null spaces. Normalization fixes this through progressive rules: 1NF ensures atomic values; 2NF removes partial key dependencies; and 3NF eliminates transitive dependencies. The outcome: pure relational integrity with zero redundancy.";
