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
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '48px', height: '100%', alignItems: 'center' }}>
        {/* Left: Visual Class -> creates -> Objects */}
        <Diagram
          width={760}
          height={500}
          lines={
            <>
              {/* Connector from Class bottom to fork */}
              <Connector points={[[380, 200], [380, 260]]} width={3} delay={0.6} />
              {/* Horizontal fork */}
              <Connector points={[[180, 260], [580, 260]]} width={3} delay={0.7} />
              {/* Drop to Car #1 & Car #2 */}
              <Connector
                points={[[180, 260], [180, 310]]}
                arrow="end"
                width={3}
                delay={0.8}
                label={{ text: 'creates', x: 260, y: 280 }}
              />
              <Connector
                points={[[580, 260], [580, 310]]}
                arrow="end"
                width={3}
                delay={0.8}
                label={{ text: 'creates', x: 500, y: 280 }}
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
            y={310}
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
            y={310}
            w={240}
            size="md"
            variant="instance"
            delay={0.95}
          />
        </Diagram>

        {/* Right: Clean Definitions Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {definitions.map((def, i) => (
            <Reveal key={def.title} delay={0.5 + i * 0.12} y={15}>
              <div
                style={{
                  padding: '20px 24px',
                  borderRadius: '18px',
                  background: '#ffffff',
                  border: '1.5px solid var(--line)',
                  boxShadow: 'var(--shadow-1)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
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
