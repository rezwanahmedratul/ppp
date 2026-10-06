import { ArrowRight, Puzzle, MessagesSquare, ShieldCheck, Globe, Workflow, Laptop } from 'lucide-react';
import { SlideLayout, Reveal } from '../components';

export function Slide03() {
  const cards = [
    {
      tag: '01 / Purpose',
      title: 'Simplify',
      desc: 'Break complex systems into understandable, manageable parts so cognitive load remains low.',
      icon: Puzzle,
      delay: 0.8,
    },
    {
      tag: '02 / Purpose',
      title: 'Communicate',
      desc: 'Create a clear, unambiguous shared understanding between business stakeholders and developers.',
      icon: MessagesSquare,
      delay: 0.95,
    },
    {
      tag: '03 / Purpose',
      title: 'Validate',
      desc: 'Discover flaws, gaps, and structural bottlenecks on paper before writing costly implementation code.',
      icon: ShieldCheck,
      delay: 1.1,
    },
  ];

  return (
    <SlideLayout
      eyebrow="Foundations · Definition"
      title="What Is *System Modeling*?"
      lede="Modeling is the process of creating visual and abstract representations of a system."
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        {/* Real World -> Model -> Software System */}
        <Reveal delay={0.4} y={15}>
          <div className="pipeline-track">
            <div className="pipeline-node pipeline-node--real">
              <Globe size={24} color="var(--brown)" />
              <span>REAL-WORLD SYSTEM</span>
            </div>

            <ArrowRight size={28} color="var(--ember)" />

            <div className="pipeline-node pipeline-node--model">
              <Workflow size={24} color="#ffffff" />
              <span>MODEL</span>
            </div>

            <ArrowRight size={28} color="var(--ember)" />

            <div className="pipeline-node pipeline-node--software">
              <Laptop size={24} color="var(--paper)" />
              <span>SOFTWARE SYSTEM</span>
            </div>
          </div>
        </Reveal>

        {/* 3 Purpose Cards */}
        <div className="grid-3col" style={{ height: 'auto', marginTop: '16px' }}>
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={c.delay} y={20} className="purpose-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="purpose-card-tag">{c.tag}</span>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--paper-2)',
                      display: 'grid',
                      placeItems: 'center',
                      color: 'var(--ember)',
                    }}
                  >
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="purpose-card-title">{c.title}</h3>
                <p className="purpose-card-desc">{c.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}

export const slide03Notes =
  "System modeling acts as the vital bridge between messy real-world business requirements and structured software architecture. We build models for three fundamental reasons: to Simplify complexity, to Communicate across technical and business teams, and to Validate architectural correctness before writing a single line of production code.";
