import { SlideLayout, Reveal, CrowEnd } from '../components';

export function Slide07() {
  const cards = [
    {
      ratio: '1 : 1',
      title: 'One-to-One',
      left: 'Customer',
      right: 'Passport',
      desc: 'Each instance of Entity A relates to at most one instance of Entity B, and vice versa.',
      leftCrow: 'one' as const,
      rightCrow: 'one' as const,
      delay: 0.4,
    },
    {
      ratio: '1 : N',
      title: 'One-to-Many',
      left: 'Customer',
      right: 'Orders',
      desc: 'A single customer can place many orders over time, but each order belongs to exactly one customer.',
      leftCrow: 'one' as const,
      rightCrow: 'many' as const,
      highlight: true,
      delay: 0.65,
    },
    {
      ratio: 'N : M',
      title: 'Many-to-Many',
      left: 'Students',
      right: 'Courses',
      desc: 'Each student enrolls in multiple courses, and each course contains multiple enrolled students.',
      leftCrow: 'many' as const,
      rightCrow: 'many' as const,
      delay: 0.9,
    },
  ];

  return (
    <SlideLayout
      eyebrow="Data Modeling · Cardinality"
      title="How Many? — *Cardinality*"
      footer="Cardinality tells us how many instances can participate in a relationship."
      footerDelay={1.3}
    >
      <div className="grid-3col">
        {cards.map((c) => (
          <Reveal
            key={c.ratio}
            delay={c.delay}
            y={24}
            className="cardinality-card"
            style={c.highlight ? { borderColor: 'var(--ember)', boxShadow: '0 16px 44px -12px var(--ember-glow)' } : {}}
          >
            <div className="cardinality-badge">{c.ratio}</div>
            <h3 className="cardinality-name">{c.title}</h3>

            {/* Visual Crow's Foot Diagram for this card */}
            <div style={{ width: '100%', height: '100px', position: 'relative', margin: '10px 0' }}>
              <svg width="100%" height="100" viewBox="0 0 380 100" style={{ overflow: 'visible' }}>
                {/* Horizontal line */}
                <line x1="100" y1="50" x2="280" y2="50" stroke="var(--ink)" strokeWidth="2.5" />

                {/* Left Crow glyph */}
                <CrowEnd at={[100, 50]} angle={180} kind={c.leftCrow} delay={c.delay + 0.3} tone="ink" />

                {/* Right Crow glyph */}
                <CrowEnd at={[280, 50]} angle={0} kind={c.rightCrow} delay={c.delay + 0.4} tone={c.highlight ? 'ember' : 'ink'} />

                {/* Left Entity pill */}
                <rect x="0" y="24" width="95" height="52" rx="12" fill="var(--paper-2)" stroke="var(--ink)" strokeWidth="1.5" />
                <text x="47" y="56" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fontWeight="700" fill="var(--ink)">
                  {c.left}
                </text>

                {/* Right Entity pill */}
                <rect x="285" y="24" width="95" height="52" rx="12" fill={c.highlight ? 'var(--ember-soft)' : 'var(--paper-2)'} stroke={c.highlight ? 'var(--ember)' : 'var(--ink)'} strokeWidth="1.5" />
                <text x="332" y="56" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fontWeight="700" fill={c.highlight ? 'var(--ember-deep)' : 'var(--ink)'}>
                  {c.right}
                </text>
              </svg>
            </div>

            <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.5, textAlign: 'center' }}>
              {c.desc}
            </p>

            <div className="cardinality-example">
              <span>{c.left}</span>
              <span style={{ color: 'var(--ember)' }}>
                {c.ratio === '1 : 1' ? '───' : c.ratio === '1 : N' ? '───<' : '>───<'}
              </span>
              <span>{c.right}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </SlideLayout>
  );
}

export const slide07Notes =
  "Cardinality specifies the numeric constraints of a relationship: how many instances of Entity A can connect with Entity B. We distinguish three fundamental types: 1-to-1 (Customer to Passport), 1-to-Many (Customer to Orders), and Many-to-Many (Students to Courses). Crow's Foot notation gives engineers a standard visual shorthand for these constraints.";
