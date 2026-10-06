import { SlideLayout, Reveal } from '../components';

export function Slide16() {
  const tableRows = [
    { dimension: 'Primary Focus', erd: 'Data-centric', oom: 'Object-centric' },
    { dimension: 'Core Building Block', erd: 'Entities', oom: 'Classes' },
    { dimension: 'Data Fields', erd: 'Attributes (Columns)', oom: 'Attributes (State)' },
    { dimension: 'Connections', erd: 'Relationships / Foreign Keys', oom: 'Associations & Polymorphism' },
    { dimension: 'Primary Domain', erd: 'Database design (Storage)', oom: 'Software design (Runtime)' },
  ];

  return (
    <SlideLayout
      eyebrow="Comparative Synthesis"
      title="*ERD* vs. *Class Diagram*"
      titleSize="md"
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '48px', height: '100%', alignItems: 'center' }}>
        {/* Left: Visual Side-by-Side Comparison */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {/* Left ERD Sample */}
            <Reveal delay={0.4} y={15}>
              <div
                style={{
                  padding: '24px 20px',
                  borderRadius: '20px',
                  background: 'var(--card-glass)',
                  backdropFilter: 'blur(14px)',
                  border: '1.5px solid var(--card-border)',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.12em' }}>
                  ERD (RELATIONAL)
                </div>

                <div
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'var(--paper-2)',
                    border: '1.5px solid var(--ink)',
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                  }}
                >
                  CUSTOMER
                </div>
                <div style={{ color: 'var(--ember)', fontWeight: 800 }}>↓ places</div>
                <div
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'var(--paper-2)',
                    border: '1.5px solid var(--ink)',
                    textAlign: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                  }}
                >
                  ORDER
                </div>

                <div
                  style={{
                    marginTop: '8px',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    background: 'var(--ember-soft)',
                    color: 'var(--ember-deep)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    fontWeight: 700,
                  }}
                >
                  Data &amp; Relationships
                </div>
              </div>
            </Reveal>

            {/* Right Class Diagram Sample */}
            <Reveal delay={0.55} y={15}>
              <div
                style={{
                  padding: '24px 20px',
                  borderRadius: '20px',
                  background: 'var(--card-glass)',
                  backdropFilter: 'blur(14px)',
                  border: '1.5px solid var(--tan)',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: 'var(--brown)', letterSpacing: '0.12em' }}>
                  CLASS (OO MODEL)
                </div>

                <div
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    border: '1.5px solid var(--ink)',
                    overflow: 'hidden',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                  }}
                >
                  <div style={{ background: 'var(--ink)', color: '#fff', padding: '6px 10px', fontWeight: 700, textAlign: 'center' }}>
                    Customer
                  </div>
                  <div style={{ padding: '6px 10px', borderBottom: '1px solid var(--line)', background: '#fff' }}>
                    - name: string<br />- email: string
                  </div>
                  <div style={{ padding: '6px 10px', background: 'var(--paper-2)', color: 'var(--brown)' }}>
                    + placeOrder()<br />+ makePayment()
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '8px',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    background: 'var(--paper-3)',
                    color: 'var(--brown-deep)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    fontWeight: 700,
                  }}
                >
                  Data + Behavior
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right: Dimension Matrix Table */}
        <Reveal delay={0.7} x={15}>
          <table className="comp-table">
            <thead>
              <tr>
                <th style={{ width: '32%' }}>DIMENSION</th>
                <th style={{ width: '34%' }}>ERD</th>
                <th style={{ width: '34%' }}>CLASS DIAGRAM</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.dimension}>
                  <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--ink)' }}>
                    {row.dimension}
                  </td>
                  <td style={{ color: 'var(--ember-deep)', fontWeight: 600 }}>
                    {row.erd}
                  </td>
                  <td style={{ color: 'var(--brown)', fontWeight: 600 }}>
                    {row.oom}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </SlideLayout>
  );
}

export const slide16Notes =
  "Comparing ERD and Class Diagrams side by side crystallizes their distinct roles: ERDs are data-centric, defining passive entities, foreign keys, and tables for persistent database storage. Class diagrams are object-centric, defining active classes with internal state and executable methods for application code. Modern engineering integrates both.";
