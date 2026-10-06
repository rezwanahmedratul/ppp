import { SlideLayout, Diagram, Connector, DBox, Reveal } from '../components';

export function Slide08() {
  return (
    <SlideLayout
      eyebrow="Data Flow · Architecture"
      title="ERD Shows Relationships. *DFD Shows Movement.*"
      footer="ERD = structure of data  ·  DFD = movement of data"
      footerDelay={1.4}
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <Diagram
          width={1400}
          height={480}
          lines={
            <>
              {/* Customer -> Process Order */}
              <Connector
                points={[[330, 95], [520, 95], [520, 160], [580, 160]]}
                arrow="end"
                delay={0.5}
                label={{ text: 'Order details', x: 440, y: 80 }}
                flow={{ dur: 2.2, r: 6 }}
              />

              {/* Process Order -> Order Database */}
              <Connector
                points={[[780, 160], [920, 160], [920, 95], [1010, 95]]}
                arrow="end"
                delay={0.7}
                label={{ text: 'Save order record', x: 890, y: 80 }}
              />

              {/* Process Order -> Payment Service */}
              <Connector
                points={[[780, 180], [920, 180], [920, 230], [1010, 230]]}
                arrow="end"
                delay={0.8}
                label={{ text: 'Payment payload', x: 890, y: 215 }}
              />

              {/* Process Order -> Delivery System */}
              <Connector
                points={[[680, 230], [680, 340]]}
                arrow="end"
                delay={0.9}
                label={{ text: 'Dispatch ticket', x: 740, y: 290, anchor: 'start' }}
              />

              {/* Delivery System -> Customer */}
              <Connector
                points={[[580, 385], [330, 385]]}
                arrow="end"
                delay={1.1}
                label={{ text: 'Hot pizza delivered', x: 450, y: 370 }}
                flow={{ dur: 2.5, r: 6 }}
              />
            </>
          }
        >
          {/* Top Left: Customer [External Entity] */}
          <DBox x={120} y={60} w={210} h={70} variant="solid" delay={0.3}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: 700 }}>[ Customer ]</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.8, letterSpacing: '0.1em' }}>EXTERNAL ENTITY</span>
            </div>
          </DBox>

          {/* Center: ( Process Order ) */}
          <DBox
            x={580}
            y={120}
            w={200}
            h={100}
            variant="ember"
            shape="pill"
            delay={0.45}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: 700 }}>( Process Order )</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.9, letterSpacing: '0.1em' }}>CORE PROCESS</span>
            </div>
          </DBox>

          {/* Top Right: [ Order Database ] (Data Store open parallel lines) */}
          <DBox
            x={1010}
            y={60}
            w={240}
            h={70}
            variant="ghost"
            delay={0.65}
            style={{ borderLeft: 'none', borderRight: 'none', background: 'var(--sand)' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '19px', fontWeight: 700, color: 'var(--brown-deep)' }}>D1 : Order Database</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--brown)', letterSpacing: '0.1em' }}>DATA STORE</span>
            </div>
          </DBox>

          {/* Mid Right: [ Payment Service ] */}
          <DBox x={1010} y={195} w={240} h={70} variant="soft" delay={0.75}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '19px', fontWeight: 700 }}>[ Payment Gateway ]</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--muted)', letterSpacing: '0.1em' }}>EXTERNAL SERVICE</span>
            </div>
          </DBox>

          {/* Bottom Center: [ Delivery System ] */}
          <DBox x={580} y={350} w={200} h={70} variant="soft" delay={0.85}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '19px', fontWeight: 700 }}>[ Delivery Fleet ]</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--muted)', letterSpacing: '0.1em' }}>FULFILLMENT</span>
            </div>
          </DBox>

          {/* Bottom Left: Customer */}
          <DBox x={120} y={350} w={210} h={70} variant="solid" delay={1.0}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: 700 }}>[ Customer ]</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', opacity: 0.8, letterSpacing: '0.1em' }}>FULFILLED SINK</span>
            </div>
          </DBox>
        </Diagram>

        {/* 4 DFD Core Components Legend */}
        <Reveal delay={1.25} y={10}>
          <div className="dfd-legend-grid">
            <div className="dfd-legend-item">
              <span className="dfd-shape-preview" />
              <span>External Entity</span>
            </div>
            <div className="dfd-legend-item">
              <span className="dfd-shape-preview dfd-shape-process" />
              <span>Process</span>
            </div>
            <div className="dfd-legend-item">
              <span style={{ color: 'var(--ember)', fontWeight: 800 }}>──→</span>
              <span>Data Flow</span>
            </div>
            <div className="dfd-legend-item">
              <span className="dfd-shape-preview dfd-shape-store" />
              <span>Data Store</span>
            </div>
          </div>
        </Reveal>
      </div>
    </SlideLayout>
  );
}

export const slide08Notes =
  "While an ERD freezes time to show the static structure and relationships of data, a Data Flow Diagram (DFD) brings the system alive by tracking how data travels. Notice our four classic DFD symbols: External Entities (Customer, Payment), Processes (Process Order), Data Flows (Order details, dispatch ticket), and Data Stores (Order Database).";
