import { User, FileText, CreditCard, Pizza, Bike } from 'lucide-react';
import { SlideLayout, Diagram, Connector, DBox, Reveal } from '../components';

export function Slide02() {
  return (
    <SlideLayout
      eyebrow="System Breakdown"
      title="It Looks Simple. *What's Happening* Behind the Screen?"
      titleSize="md"
      footer="The more complex the system becomes, the harder it is to understand without a model."
      footerDelay={1.4}
    >
      <Diagram
        width={1400}
        height={560}
        lines={
          <>
            {/* Trunk line from PIZZA ORDER down to branch fork */}
            <Connector points={[[700, 100], [700, 150]]} delay={0.4} width={3} flow />
            {/* Horizontal distribution bar */}
            <Connector points={[[250, 150], [1150, 150]]} delay={0.5} width={3} />
            {/* Drop lines to Level 1 nodes */}
            <Connector points={[[250, 150], [250, 200]]} arrow="end" delay={0.6} width={3} flow={{ dur: 2.4, r: 5 }} />
            <Connector points={[[700, 150], [700, 200]]} arrow="end" delay={0.6} width={3} flow={{ dur: 2.4, r: 5 }} />
            <Connector points={[[1150, 150], [1150, 200]]} arrow="end" delay={0.6} width={3} flow={{ dur: 2.4, r: 5 }} />

            {/* Sub-trunk from ORDER down to second branch fork */}
            <Connector points={[[700, 280], [700, 330]]} delay={0.8} width={3} flow />
            {/* Horizontal sub-bar */}
            <Connector points={[[520, 330], [880, 330]]} delay={0.9} width={3} />
            {/* Drop lines to Level 2 nodes */}
            <Connector points={[[520, 330], [520, 380]]} arrow="end" delay={1.0} width={3} flow={{ dur: 2.2, r: 5 }} />
            <Connector points={[[880, 330], [880, 380]]} arrow="end" delay={1.0} width={3} flow={{ dur: 2.2, r: 5 }} />
          </>
        }
      >
        {/* Root: PIZZA ORDER */}
        <DBox
          x={560}
          y={35}
          w={280}
          h={65}
          variant="solid"
          delay={0.2}
          style={{ letterSpacing: '0.12em' }}
        >
          PIZZA ORDER
        </DBox>

        {/* Level 1: CUSTOMER, ORDER, PAYMENT */}
        <DBox x={135} y={200} w={230} h={80} variant="outline" delay={0.55}>
          <User size={26} color="var(--ember)" />
          <span>Customer</span>
        </DBox>

        <DBox x={585} y={200} w={230} h={80} variant="outline" delay={0.65}>
          <FileText size={26} color="var(--ember)" />
          <span>Order</span>
        </DBox>

        <DBox x={1035} y={200} w={230} h={80} variant="outline" delay={0.75}>
          <CreditCard size={26} color="var(--ember)" />
          <span>Payment</span>
        </DBox>

        {/* Level 2: PIZZA, DELIVERY */}
        <DBox x={415} y={380} w={210} h={75} variant="soft" delay={0.95}>
          <Pizza size={24} color="var(--brown)" />
          <span>Pizza</span>
        </DBox>

        <DBox x={775} y={380} w={210} h={75} variant="soft" delay={1.05}>
          <Bike size={24} color="var(--brown)" />
          <span>Delivery</span>
        </DBox>

        {/* Relationships Badge */}
        <Reveal delay={1.2} x={0} y={10} style={{ position: 'absolute', left: 605, top: 485 }}>
          <div
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              background: 'var(--ember-soft)',
              color: 'var(--ember-deep)',
              border: '1.5px solid var(--ember)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '15px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Relationships
          </div>
        </Reveal>
      </Diagram>
    </SlideLayout>
  );
}

export const slide02Notes =
  "When we look beneath the interface, a simple order breaks down into distinct components: Customers, Orders, Pizzas, Payment gateways, Delivery fulfillment, and the web of rules binding them together. The more complex the system becomes, the harder it is to understand without a formal model.";
