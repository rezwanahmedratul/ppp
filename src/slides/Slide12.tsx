import { Lock, TreeDeciduous, RefreshCw, Recycle } from 'lucide-react';
import { SlideLayout, Reveal } from '../components';

export function Slide12() {
  const pillars = [
    {
      title: 'Encapsulation',
      icon: Lock,
      symbol: '🔒',
      desc: 'Hide internal state and expose controlled interfaces.',
      detail: 'Private variables accessed only through explicit getters/setters and public methods, protecting internal invariant guarantees.',
      delay: 0.4,
    },
    {
      title: 'Inheritance',
      icon: TreeDeciduous,
      symbol: '🌳',
      desc: 'Reuse attributes and methods from a parent class.',
      detail: 'Hierarchical taxonomy allowing specialized subclasses (e.g., ExpressDelivery) to inherit base traits from Delivery.',
      delay: 0.55,
    },
    {
      title: 'Polymorphism',
      icon: RefreshCw,
      symbol: '🔄',
      desc: 'Different objects can respond differently to the same operation.',
      detail: 'Unified call signature (e.g., pay()) executes distinct logic whether invoked on CreditCard, PayPal, or CashOnDelivery.',
      delay: 0.7,
    },
    {
      title: 'Reusability',
      icon: Recycle,
      symbol: '📦',
      desc: 'Reuse components across different parts of the system.',
      detail: 'Self-contained, modular classes can be plugged into other domains and services without rewriting logic from scratch.',
      delay: 0.85,
    },
  ];

  return (
    <SlideLayout
      eyebrow="Object-Oriented Design · Core Building Blocks"
      title="The Four Pillars of *Object-Oriented Design*"
      lede="Foundational concepts that make object-oriented code modular, extensible, and robust."
    >
      <div className="grid-2x2">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.title} delay={p.delay} y={20} className="pillar-card">
              <div className="pillar-top">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '18px',
                      background: 'var(--ember-soft)',
                      display: 'grid',
                      placeItems: 'center',
                      color: 'var(--ember)',
                      border: '1.5px solid rgba(224, 78, 31, 0.2)',
                      boxShadow: '0 4px 14px var(--ember-subtle)',
                    }}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="pillar-title">{p.title}</h3>
                </div>
                <span style={{ fontSize: '32px' }}>{p.symbol}</span>
              </div>

              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 600, color: 'var(--ink)' }}>
                {p.desc}
              </div>

              <p className="pillar-desc">{p.detail}</p>
            </Reveal>
          );
        })}
      </div>
    </SlideLayout>
  );
}

export const slide12Notes =
  "As highlighted in our course material, the architecture of object-oriented systems rests on these key pillars: Encapsulation shields internal state; Inheritance enables hierarchical code reuse; Polymorphism lets diverse objects respond uniquely to a single shared message; and Reusability allows proven software modules to be repurposed throughout enterprise systems.";
