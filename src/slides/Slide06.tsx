import { SlideLayout, Diagram, Connector, EntityBox, Reveal } from '../components';

export function Slide06() {
  return (
    <SlideLayout
      eyebrow="Data Modeling · Entity Relationship Diagram"
      title="ERD — *Mapping Data Relationships*"
      titleSize="md"
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <Diagram
          width={1420}
          height={490}
          lines={
            <>
              {/* CUSTOMER -> ORDER */}
              <Connector
                points={[[370, 150], [560, 150]]}
                arrow="end"
                delay={0.5}
                label={{ text: 'places', x: 465, y: 135 }}
                flow
              />

              {/* ORDER -> ORDER LINE */}
              <Connector
                points={[[690, 266], [690, 330]]}
                arrow="end"
                delay={0.7}
                label={{ text: 'contains', x: 735, y: 300, anchor: 'start' }}
                flow
              />

              {/* ORDER LINE -> PIZZA */}
              <Connector
                points={[[560, 400], [370, 400]]}
                arrow="end"
                delay={0.9}
                label={{ text: 'refers to', x: 465, y: 385 }}
                flow
              />

              {/* ORDER -> PAYMENT */}
              <Connector
                points={[[820, 150], [1020, 150]]}
                arrow="end"
                delay={0.8}
                label={{ text: 'settles', x: 920, y: 135 }}
                flow
              />

              {/* ORDER -> DELIVERY */}
              <Connector
                points={[[820, 190], [920, 190], [920, 390], [1020, 390]]}
                arrow="end"
                delay={1.0}
                label={{ text: 'dispatches', x: 970, y: 375 }}
                flow
              />
            </>
          }
        >
          {/* CUSTOMER */}
          <EntityBox
            name="CUSTOMER"
            attrs={[
              { name: 'customer_id', key: 'PK' },
              { name: 'full_name' },
              { name: 'phone' },
              { name: 'address' },
            ]}
            x={130}
            y={40}
            w={240}
            delay={0.3}
          />

          {/* ORDER */}
          <EntityBox
            name="ORDER"
            attrs={[
              { name: 'order_id', key: 'PK' },
              { name: 'customer_id', key: 'FK' },
              { name: 'order_time' },
              { name: 'total_amount' },
            ]}
            x={560}
            y={40}
            w={260}
            accent
            delay={0.45}
          />

          {/* ORDER LINE */}
          <EntityBox
            name="ORDER_LINE"
            attrs={[
              { name: 'line_id', key: 'PK' },
              { name: 'order_id', key: 'FK' },
              { name: 'pizza_id', key: 'FK' },
              { name: 'quantity' },
            ]}
            x={560}
            y={330}
            w={260}
            delay={0.65}
          />

          {/* PIZZA */}
          <EntityBox
            name="PIZZA"
            attrs={[
              { name: 'pizza_id', key: 'PK' },
              { name: 'pizza_name' },
              { name: 'size' },
              { name: 'base_price' },
            ]}
            x={130}
            y={290}
            w={240}
            delay={0.8}
          />

          {/* PAYMENT */}
          <EntityBox
            name="PAYMENT"
            attrs={[
              { name: 'payment_id', key: 'PK' },
              { name: 'order_id', key: 'FK' },
              { name: 'amount' },
              { name: 'status' },
            ]}
            x={1020}
            y={40}
            w={250}
            delay={0.6}
          />

          {/* DELIVERY */}
          <EntityBox
            name="DELIVERY"
            attrs={[
              { name: 'delivery_id', key: 'PK' },
              { name: 'order_id', key: 'FK' },
              { name: 'driver_name' },
              { name: 'status' },
            ]}
            x={1020}
            y={280}
            w={250}
            delay={0.85}
          />
        </Diagram>

        {/* 3 Core ERD Definitions */}
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
          <Reveal delay={1.1} y={10}>
            <div
              style={{
                padding: '12px 26px',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(12px)',
                border: '1.5px solid var(--card-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--ember)' }}>Entity</span>
              <span style={{ color: 'var(--muted)' }}>→</span>
              <span style={{ fontSize: '16px', color: 'var(--ink)' }}>Something with an identity</span>
            </div>
          </Reveal>

          <Reveal delay={1.2} y={10}>
            <div
              style={{
                padding: '12px 26px',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(12px)',
                border: '1.5px solid var(--card-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--ember)' }}>Attribute</span>
              <span style={{ color: 'var(--muted)' }}>→</span>
              <span style={{ fontSize: '16px', color: 'var(--ink)' }}>Property of an entity</span>
            </div>
          </Reveal>

          <Reveal delay={1.3} y={10}>
            <div
              style={{
                padding: '12px 26px',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(12px)',
                border: '1.5px solid var(--card-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--ember)' }}>Relationship</span>
              <span style={{ color: 'var(--muted)' }}>→</span>
              <span style={{ fontSize: '16px', color: 'var(--ink)' }}>Connection between entities</span>
            </div>
          </Reveal>
        </div>
      </div>
    </SlideLayout>
  );
}

export const slide06Notes =
  "An Entity-Relationship Diagram (ERD) visually maps out our database tables and connections. In our pizza domain: Customer places Orders, which break into Order Lines pointing to Pizzas, while Orders link to Payment and Delivery. The lecture establishes three core pillars here: Entities (things with identity), Attributes (their properties), and Relationships (the associations between them).";
