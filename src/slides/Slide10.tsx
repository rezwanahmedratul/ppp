import { Box, Cpu, Layers } from 'lucide-react';
import { SlideLayout, UmlClass, Reveal } from '../components';

export function Slide10() {
  return (
    <SlideLayout
      eyebrow="Object-Oriented Paradigm"
      title="*But Data Isn't* the Whole Story"
      footer="State  +  Behavior  =  Object"
      footerDelay={1.3}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.3fr', gap: '56px', height: '100%', alignItems: 'center' }}>
        {/* Left: Customer Object Box (State + Behavior) */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <Reveal delay={0.4} scale={0.96}>
            <div style={{ position: 'relative' }}>
              <UmlClass
                name="CUSTOMER"
                attrs={['+ name : string', '+ email : string', '+ address : string']}
                methods={['+ placeOrder() : Order', '+ makePayment() : boolean', '+ viewOrder(id) : Order']}
                w={440}
                size="lg"
                delay={0.5}
                adornment={<Box size={26} color="var(--ember)" />}
              />

              {/* Side brackets pointing out State vs Behavior */}
              <div
                style={{
                  position: 'absolute',
                  right: '-160px',
                  top: '110px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--brown)',
                }}
              >
                <span>←</span>
                <span>ATTRIBUTES / STATE</span>
              </div>

              <div
                style={{
                  position: 'absolute',
                  right: '-160px',
                  bottom: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--ember)',
                }}
              >
                <span>←</span>
                <span>METHODS / BEHAVIOR</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: Explanatory Core Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Reveal delay={0.65} y={15}>
            <div
              style={{
                fontSize: '28px',
                fontFamily: 'var(--font-display)',
                lineHeight: 1.4,
                color: 'var(--ink)',
              }}
            >
              Object-Oriented Modeling represents real-world elements as objects containing{' '}
              <em className="em">both data and behavior</em>.
            </div>
          </Reveal>

          <Reveal delay={0.8} y={15}>
            <div
              style={{
                padding: '24px 28px',
                borderRadius: '20px',
                background: '#ffffff',
                border: '1.5px solid var(--line)',
                boxShadow: 'var(--shadow-1)',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--paper-2)',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'var(--brown)',
                  flexShrink: 0,
                }}
              >
                <Layers size={24} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: 700, color: 'var(--ink)' }}>
                  State (Data)
                </h4>
                <p style={{ marginTop: '6px', fontSize: '16px', color: 'var(--muted)', lineHeight: 1.5 }}>
                  The internal memory and attributes of the object that persist across method executions.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.95} y={15}>
            <div
              style={{
                padding: '24px 28px',
                borderRadius: '20px',
                background: '#ffffff',
                border: '1.5px solid var(--line)',
                boxShadow: 'var(--shadow-1)',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--ember-soft)',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'var(--ember)',
                  flexShrink: 0,
                }}
              >
                <Cpu size={24} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: 700, color: 'var(--ink)' }}>
                  Behavior (Operations)
                </h4>
                <p style={{ marginTop: '6px', fontSize: '16px', color: 'var(--muted)', lineHeight: 1.5 }}>
                  The logic, operations, and message responses that alter or query the internal state.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SlideLayout>
  );
}

export const slide10Notes =
  "Databases only store passive data rows. But applications must actually execute logic! Object-Oriented Modeling fuses passive data with active operations. A Customer isn't just a record with a name and email—it is an entity that actively places orders, triggers payments, and checks delivery status. The core formula: State + Behavior = Object.";
