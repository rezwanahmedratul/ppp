import { SlideLayout, Reveal } from '../components';

export function Slide14() {
  return (
    <SlideLayout
      eyebrow="Dynamic Modeling · Behavioral UML"
      title="How Does the *System Behave*?"
      titleSize="md"
      footer="Use Case → What the user wants  ·  Sequence → How interactions happen over time  ·  Activity → How a process flows"
      footerDelay={1.4}
    >
      <div className="grid-3col">
        {/* Column 1: Use Case */}
        <Reveal delay={0.4} y={20} className="behavior-col">
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ember)', fontWeight: 700, letterSpacing: '0.12em' }}>
              01 / USE CASE
            </span>
            <h3 className="behavior-col-title">What the user wants</h3>
          </div>

          <div className="behavior-canvas">
            <svg width="100%" height="320" viewBox="0 0 340 320">
              {/* Actor node */}
              <circle cx="50" cy="90" r="16" fill="none" stroke="var(--ink)" strokeWidth="2.5" />
              <line x1="50" y1="106" x2="50" y2="150" stroke="var(--ink)" strokeWidth="2.5" />
              <line x1="25" y1="124" x2="75" y2="124" stroke="var(--ink)" strokeWidth="2.5" />
              <line x1="50" y1="150" x2="30" y2="185" stroke="var(--ink)" strokeWidth="2.5" />
              <line x1="50" y1="150" x2="70" y2="185" stroke="var(--ink)" strokeWidth="2.5" />
              <text x="50" y="210" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fontWeight="700">
                Customer
              </text>

              {/* Connecting lines */}
              <line x1="75" y1="124" x2="160" y2="60" stroke="var(--line)" strokeWidth="1.8" />
              <line x1="75" y1="124" x2="160" y2="120" stroke="var(--line)" strokeWidth="1.8" />
              <line x1="75" y1="124" x2="160" y2="180" stroke="var(--line)" strokeWidth="1.8" />
              <line x1="75" y1="124" x2="160" y2="240" stroke="var(--line)" strokeWidth="1.8" />

              {/* Use Case Ovals */}
              {[
                { name: 'Login', y: 60 },
                { name: 'View Items', y: 120 },
                { name: 'Purchase', y: 180 },
                { name: 'Checkout', y: 240 },
              ].map((uc) => (
                <g key={uc.name}>
                  <ellipse cx="230" cy={uc.y} rx="65" ry="22" fill="#ffffff" stroke="var(--ink)" strokeWidth="1.8" />
                  <text x="230" y={uc.y + 5} textAnchor="middle" fontFamily="var(--font-sans)" fontSize="14" fontWeight="600" fill="var(--ink)">
                    {uc.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>

        {/* Column 2: Sequence */}
        <Reveal delay={0.6} y={20} className="behavior-col">
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--brown)', fontWeight: 700, letterSpacing: '0.12em' }}>
              02 / SEQUENCE
            </span>
            <h3 className="behavior-col-title">Interactions over time</h3>
          </div>

          <div className="behavior-canvas">
            <svg width="100%" height="320" viewBox="0 0 340 320">
              {/* 3 Participant Boxes */}
              <rect x="15" y="15" width="80" height="34" rx="8" fill="var(--ink)" />
              <text x="55" y="37" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="#fff" fontWeight="700">
                Customer
              </text>

              <rect x="130" y="15" width="80" height="34" rx="8" fill="var(--ember)" />
              <text x="170" y="37" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="#fff" fontWeight="700">
                System
              </text>

              <rect x="245" y="15" width="80" height="34" rx="8" fill="var(--brown)" />
              <text x="285" y="37" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="#fff" fontWeight="700">
                Database
              </text>

              {/* Lifelines */}
              <line x1="55" y1="49" x2="55" y2="300" stroke="var(--line)" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="170" y1="49" x2="170" y2="300" stroke="var(--line)" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="285" y1="49" x2="285" y2="300" stroke="var(--line)" strokeWidth="1.5" strokeDasharray="4 4" />

              {/* Step 1: Customer -> System */}
              <line x1="55" y1="95" x2="165" y2="95" stroke="var(--ink)" strokeWidth="2" />
              <polygon points="165,95 155,90 155,100" fill="var(--ink)" />
              <text x="110" y="85" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11">order()</text>

              {/* Step 2: System -> Database */}
              <line x1="170" y1="145" x2="280" y2="145" stroke="var(--ink)" strokeWidth="2" />
              <polygon points="280,145 270,140 270,150" fill="var(--ink)" />
              <text x="225" y="135" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11">save()</text>

              {/* Step 3: Database -> System (reply) */}
              <line x1="285" y1="195" x2="175" y2="195" stroke="var(--ember)" strokeWidth="2" strokeDasharray="4 3" />
              <polygon points="175,195 185,190 185,200" fill="var(--ember)" />
              <text x="225" y="185" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--ember)">confirmed</text>

              {/* Step 4: System -> Customer (reply) */}
              <line x1="170" y1="245" x2="60" y2="245" stroke="var(--ember)" strokeWidth="2" strokeDasharray="4 3" />
              <polygon points="60,245 70,240 70,250" fill="var(--ember)" />
              <text x="110" y="235" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--ember)">orderId</text>
            </svg>
          </div>
        </Reveal>

        {/* Column 3: Activity */}
        <Reveal delay={0.8} y={20} className="behavior-col">
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--ink)', fontWeight: 700, letterSpacing: '0.12em' }}>
              03 / ACTIVITY
            </span>
            <h3 className="behavior-col-title">How a process flows</h3>
          </div>

          <div className="behavior-canvas">
            <svg width="100%" height="320" viewBox="0 0 340 320">
              {/* Start state circle */}
              <circle cx="170" cy="22" r="10" fill="var(--ink)" />

              {/* Start -> Browse Product */}
              <line x1="170" y1="32" x2="170" y2="55" stroke="var(--ink)" strokeWidth="2" />
              <rect x="100" y="55" width="140" height="30" rx="8" fill="#ffffff" stroke="var(--ink)" strokeWidth="1.5" />
              <text x="170" y="75" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="600">Browse Product</text>

              {/* Browse -> Add to Cart */}
              <line x1="170" y1="85" x2="170" y2="105" stroke="var(--ink)" strokeWidth="2" />
              <rect x="100" y="105" width="140" height="30" rx="8" fill="#ffffff" stroke="var(--ink)" strokeWidth="1.5" />
              <text x="170" y="125" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="600">Add to Cart</text>

              {/* Add to Cart -> Checkout */}
              <line x1="170" y1="135" x2="170" y2="155" stroke="var(--ink)" strokeWidth="2" />
              <rect x="100" y="155" width="140" height="30" rx="8" fill="#ffffff" stroke="var(--ink)" strokeWidth="1.5" />
              <text x="170" y="175" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="13" fontWeight="600">Checkout</text>

              {/* Checkout -> Decision Diamond */}
              <line x1="170" y1="185" x2="170" y2="200" stroke="var(--ink)" strokeWidth="2" />
              <polygon points="170,200 195,215 170,230 145,215" fill="var(--ember-soft)" stroke="var(--ember)" strokeWidth="1.8" />
              <text x="170" y="219" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fontWeight="700">Pay?</text>

              {/* Branch Left: Card / Branch Right: Cash */}
              <line x1="145" y1="215" x2="80" y2="215" stroke="var(--ink)" strokeWidth="1.8" />
              <line x1="80" y1="215" x2="80" y2="245" stroke="var(--ink)" strokeWidth="1.8" />
              <rect x="55" y="245" width="50" height="24" rx="6" fill="#fff" stroke="var(--ink)" strokeWidth="1.2" />
              <text x="80" y="261" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11">Card</text>

              <line x1="195" y1="215" x2="260" y2="215" stroke="var(--ink)" strokeWidth="1.8" />
              <line x1="260" y1="215" x2="260" y2="245" stroke="var(--ink)" strokeWidth="1.8" />
              <rect x="235" y="245" width="50" height="24" rx="6" fill="#fff" stroke="var(--ink)" strokeWidth="1.2" />
              <text x="260" y="261" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11">Cash</text>

              {/* Merge down into Complete Order */}
              <line x1="80" y1="269" x2="80" y2="285" stroke="var(--ink)" strokeWidth="1.8" />
              <line x1="260" y1="269" x2="260" y2="285" stroke="var(--ink)" strokeWidth="1.8" />
              <line x1="80" y1="285" x2="260" y2="285" stroke="var(--ink)" strokeWidth="1.8" />
              <line x1="170" y1="285" x2="170" y2="295" stroke="var(--ink)" strokeWidth="2" />
              <circle cx="170" cy="305" r="9" fill="none" stroke="var(--ink)" strokeWidth="2" />
              <circle cx="170" cy="305" r="5" fill="var(--ink)" />
            </svg>
          </div>
        </Reveal>
      </div>
    </SlideLayout>
  );
}

export const slide14Notes =
  "Behavioral UML describes system motion across three complementary angles: Use Case diagrams capture user intentions at the boundary; Sequence diagrams chart message exchanges across vertical lifelines chronologically; and Activity diagrams trace procedural logic, branching decisions (Card vs Cash), and terminal workflows.";
