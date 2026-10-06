import { Car, FileCode, Copy } from 'lucide-react';
import { SlideLayout, UmlClass, Diagram, Connector, Reveal } from '../components';

export function Slide11() {
  const definitions = [
    { title: 'Class', subtitle: 'Blueprint / template', desc: 'The compile-time specification defining structure and behavior.', icon: FileCode },
    { title: 'Object', subtitle: 'Instance of a class', desc: 'A runtime entity living in memory with real state and identity.', icon: Copy },
    { title: 'Attributes', subtitle: 'Data & State', desc: 'Variables and properties holding values for a given instance.', icon: Car },
    { title: 'Methods', subtitle: 'Executable Behavior', desc: 'Functions defined inside the class executed by active objects.', icon: Car },
  ];

  return (
    <SlideLayout
      eyebrow="Core OOP Concepts"
      title="Class *≠* Object"
      lede="A class is an abstract template; objects are concrete instances instantiated in memory."
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '56px',
          height: '100%',
          alignItems: 'stretch',
          position: 'relative',
        }}
      >
        {/* Left Column: Visual Class -> creates -> Objects */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 0,
            minHeight: 0,
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <Diagram
            width={740}
            height={480}
            lines={
              <>
                {/* Connector from Class bottom to fork */}
                <Connector points={[[380, 210], [380, 255]]} width={3} delay={0.6} />
                {/* Horizontal fork */}
                <Connector points={[[180, 255], [580, 255]]} width={3} delay={0.7} />
                {/* Drop to Car #1 & Car #2 */}
                <Connector
                  points={[[180, 255], [180, 305]]}
                  arrow="end"
                  width={3}
                  delay={0.8}
                  label={{ text: 'creates', x: 235, y: 280 }}
                />
                <Connector
                  points={[[580, 255], [580, 305]]}
                  arrow="end"
                  width={3}
                  delay={0.8}
                  label={{ text: 'creates', x: 525, y: 280 }}
                />
              </>
            }
          >
            {/* Class: CAR (Blueprint style) */}
            <UmlClass
              name="CAR"
              attrs={['- color : string', '- speed : int']}
              methods={['+ drive(speed) : void']}
              x={240}
              y={20}
              w={280}
              size="md"
              variant="blueprint"
              stereotype="Blueprint"
              delay={0.3}
            />

            {/* Object 1: Car #1 */}
            <UmlClass
              name="car1 : Car"
              attrs={['color = "Red"', 'speed = 80 km/h']}
              x={60}
              y={305}
              w={240}
              size="md"
              variant="instance"
              delay={0.85}
            />

            {/* Object 2: Car #2 */}
            <UmlClass
              name="car2 : Car"
              attrs={['color = "Blue"', 'speed = 60 km/h']}
              x={460}
              y={305}
              w={240}
              size="md"
              variant="instance"
              delay={0.95}
            />
          </Diagram>
        </div>

        {/* Right Column: Clean Definitions Grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '16px',
            minWidth: 0,
          }}
        >
          {definitions.map((def, i) => (
            <Reveal key={def.title} delay={0.5 + i * 0.12} y={15}>
              <div
                style={{
                  padding: '18px 24px',
                  borderRadius: '18px',
                  background: 'var(--card-glass)',
                  backdropFilter: 'blur(14px)',
                  border: '1.5px solid var(--card-border)',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'transform 0.3s var(--ease-spring), box-shadow 0.3s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 800, color: 'var(--ember)' }}>
                      {def.title}
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--muted)' }}>
                      {def.subtitle}
                    </span>
                  </div>
                  <p style={{ marginTop: '4px', fontSize: '15px', color: 'var(--ink-2)' }}>{def.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

export const slide11Notes =
  "A common rookie mistake is conflating classes with objects. A Class is merely the structural blueprint or mold—it occupies no live state. An Object is an instantiated entity created from that blueprint. One Car class can spawn Car #1 (Red, travelling at 80 km/h) and Car #2 (Blue, travelling at 60 km/h).";
