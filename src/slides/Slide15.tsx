import { SlideLayout, Diagram, Connector, UmlClass } from '../components';

export function Slide15() {
  return (
    <SlideLayout
      eyebrow="Structural UML · Core Backbone"
      title="Class Diagram — The *Structural Backbone*"
      titleSize="md"
      footer="Classes  +  Attributes  +  Methods  +  Relationships"
      footerDelay={1.4}
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        <Diagram
          width={1420}
          height={500}
          lines={
            <>
              {/* Customer -> Order */}
              <Connector
                points={[[460, 150], [560, 150]]}
                arrow="end"
                delay={0.5}
                label={{ text: 'places', x: 510, y: 135 }}
                flow
              />

              {/* Order -> ShippingInfo */}
              <Connector
                points={[[880, 150], [980, 150]]}
                arrow="end"
                delay={0.7}
                label={{ text: 'has', x: 930, y: 135 }}
              />

              {/* Customer -> Payment */}
              <Connector
                points={[[280, 260], [280, 390], [560, 390]]}
                arrow="end"
                delay={0.9}
                label={{ text: 'submits', x: 420, y: 375 }}
              />

              {/* Order -> Payment */}
              <Connector
                points={[[720, 240], [720, 320]]}
                arrow="end"
                delay={0.8}
                label={{ text: 'settled by', x: 770, y: 285, anchor: 'start' }}
              />
            </>
          }
        >
          {/* Customer */}
          <UmlClass
            name="Customer"
            attrs={['- id : int', '- name : string', '- email : string']}
            methods={['+ viewItems() : List<Item>', '+ buyItems() : Order', '+ makePayment() : boolean']}
            x={120}
            y={30}
            w={340}
            size="md"
            delay={0.3}
          />

          {/* Order */}
          <UmlClass
            name="Order"
            attrs={['- orderId : int', '- date : Date', '- status : OrderStatus']}
            methods={['+ calculateTotal() : double', '+ cancel() : boolean']}
            x={560}
            y={30}
            w={320}
            size="md"
            variant="ember"
            delay={0.5}
          />

          {/* ShippingInfo */}
          <UmlClass
            name="ShippingInfo"
            attrs={['- shippingId : int', '- address : string', '- carrier : string']}
            methods={['+ trackShipment() : string']}
            x={980}
            y={45}
            w={310}
            size="md"
            delay={0.7}
          />

          {/* Payment */}
          <UmlClass
            name="Payment"
            attrs={['- paymentId : int', '- amount : double', '- status : string']}
            methods={['+ process() : boolean', '+ refund() : boolean']}
            x={560}
            y={320}
            w={320}
            size="md"
            delay={0.85}
          />
        </Diagram>
      </div>
    </SlideLayout>
  );
}

export const slide15Notes =
  "Class diagrams represent the static architectural backbone of any object-oriented application. Notice how each class explicitly partitions visibility (+ public, - private), attributes, and executable methods. The directed associations capture semantic relationships such as 'Customer places Order' and 'Order has ShippingInfo'.";
