import { SlideLayout, Diagram, Connector, DBox } from '../components';

export function Slide13() {
  return (
    <SlideLayout
      eyebrow="System Modeling Standards · UML"
      title="UML — A Common Language for *Software Design*"
      lede="Unified Modeling Language: A standard visual language for specifying, visualizing, constructing, and documenting software systems."
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <Diagram
          width={1360}
          height={480}
          lines={
            <>
              {/* Root drop down to split */}
              <Connector points={[[680, 80], [680, 140]]} width={3} delay={0.5} />
              {/* Horizontal crossbar */}
              <Connector points={[[340, 140], [1020, 140]]} width={3} delay={0.6} />
              {/* Drops into Structural & Behavioral */}
              <Connector points={[[340, 140], [340, 190]]} arrow="end" width={3} delay={0.7} />
              <Connector points={[[1020, 140], [1020, 190]]} arrow="end" width={3} delay={0.7} />

              {/* Structural -> Class Diagram */}
              <Connector points={[[340, 260], [340, 340]]} arrow="end" width={3} delay={0.9} />

              {/* Behavioral -> 3 sub-diagrams */}
              <Connector points={[[1020, 260], [1020, 310]]} width={3} delay={0.9} />
              <Connector points={[[780, 310], [1260, 310]]} width={3} delay={1.0} />
              <Connector points={[[780, 310], [780, 360]]} arrow="end" width={3} delay={1.1} />
              <Connector points={[[1020, 310], [1020, 360]]} arrow="end" width={3} delay={1.1} />
              <Connector points={[[1260, 310], [1260, 360]]} arrow="end" width={3} delay={1.1} />
            </>
          }
        >
          {/* Root UML Node */}
          <DBox x={540} y={20} w={280} h={60} variant="solid" delay={0.3}>
            <span style={{ letterSpacing: '0.15em', fontWeight: 800 }}>UML</span>
          </DBox>

          {/* Left Branch: Structural */}
          <DBox x={200} y={190} w={280} h={70} variant="ember" delay={0.65}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: 700 }}>STRUCTURAL</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.9 }}>STATIC ARCHITECTURE</span>
            </div>
          </DBox>

          {/* Right Branch: Behavioral */}
          <DBox x={880} y={190} w={280} h={70} variant="brown" delay={0.65}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: 700 }}>BEHAVIORAL</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.9 }}>DYNAMIC EXECUTION</span>
            </div>
          </DBox>

          {/* Structural leaf: Class Diagram */}
          <DBox x={190} y={340} w={300} h={80} variant="outline" delay={0.95}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: 700 }}>Class Diagram</span>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Classes, Attributes, Methods</span>
            </div>
          </DBox>

          {/* Behavioral leaf 1: Use Case Diagram */}
          <DBox x={660} y={360} w={240} h={80} variant="soft" delay={1.15}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: 700 }}>Use Case Diagram</span>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>User goals & system boundaries</span>
            </div>
          </DBox>

          {/* Behavioral leaf 2: Sequence Diagram */}
          <DBox x={900} y={360} w={240} h={80} variant="soft" delay={1.2}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: 700 }}>Sequence Diagram</span>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Interactions over time</span>
            </div>
          </DBox>

          {/* Behavioral leaf 3: Activity Diagram */}
          <DBox x={1140} y={360} w={240} h={80} variant="soft" delay={1.25}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: 700 }}>Activity Diagram</span>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Workflow step sequencing</span>
            </div>
          </DBox>
        </Diagram>
      </div>
    </SlideLayout>
  );
}

export const slide13Notes =
  "UML (Unified Modeling Language) is the industry standard for software engineering design. The lecture emphasizes its two main branches: Structural diagrams (such as Class Diagrams) modeling static blueprints, and Behavioral diagrams (Use Case, Sequence, Activity) capturing dynamic user flows, timing, and operational logic.";
