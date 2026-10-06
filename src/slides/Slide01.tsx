import { User, Smartphone, Store, CreditCard, Bike, Pizza } from 'lucide-react';
import { SlideLayout, Reveal } from '../components';

export function Slide01() {
  const steps = [
    { icon: User, label: 'Customer', sub: 'Orders online', delay: 0.4 },
    { icon: Smartphone, label: 'Phone / App', sub: 'Order dispatch', delay: 0.55 },
    { icon: Store, label: 'Restaurant', sub: 'Bakes pizza', delay: 0.7 },
    { icon: CreditCard, label: 'Payment', sub: 'Authorizes funds', delay: 0.85 },
    { icon: Bike, label: 'Delivery', sub: 'At your door', delay: 1.0 },
  ];

  return (
    <SlideLayout
      eyebrow="Introduction · Scenario"
      title="A Simple *Pizza Order*"
      titleSize="xl"
      align="center"
    >
      <div className="slide1-container">
        {/* Subtle decorative pizza slice in background */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
          {/* Connecting SVG Flow Line */}
          <svg
            style={{
              position: 'absolute',
              top: '70px',
              left: '100px',
              right: '100px',
              width: 'calc(100% - 200px)',
              height: '4px',
              zIndex: 0,
            }}
          >
            <line
              x1="0"
              y1="2"
              x2="100%"
              y2="2"
              stroke="#D8CAB9"
              strokeWidth="3"
              strokeDasharray="8 8"
            />
          </svg>

          {/* 5 Process Nodes */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.label} delay={step.delay} y={20} className="flow-step-node">
                  <div className={`flow-node-card ${i === 2 ? 'highlight' : ''}`}>
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: i === 2 ? 'var(--ember-soft)' : 'var(--paper-2)',
                        display: 'grid',
                        placeItems: 'center',
                        color: i === 2 ? 'var(--ember)' : 'var(--ink)',
                        marginBottom: '10px',
                      }}
                    >
                      <Icon size={30} strokeWidth={2} />
                    </div>
                    {i === 2 && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '-12px',
                          right: '-12px',
                          background: 'var(--ember)',
                          color: '#fff',
                          borderRadius: '50%',
                          padding: '6px',
                          boxShadow: 'var(--shadow-ember)',
                        }}
                      >
                        <Pizza size={18} />
                      </div>
                    )}
                  </div>
                  <div className="flow-node-label">{step.label}</div>
                  <div className="flow-node-sub">{step.sub}</div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Minimal takeaway punchline chips */}
        <Reveal delay={1.25} y={16}>
          <div className="s1-floating-tags">
            <div className="s1-tag">
              <span className="s1-tag-dot" />
              <span>One order.</span>
            </div>
            <div className="s1-tag">
              <span className="s1-tag-dot" />
              <span>Many entities.</span>
            </div>
            <div className="s1-tag">
              <span className="s1-tag-dot" />
              <span>Many relationships.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </SlideLayout>
  );
}

export const slide01Notes =
  "Imagine this. You're sitting at home. You're hungry. So you open a food delivery app and order a pizza... But behind this effortless single action, the system needs to seamlessly coordinate customers, order items, kitchen inventory, payment gateways, live dispatch, and complex state changes.";
