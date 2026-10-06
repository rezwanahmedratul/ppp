# System Modeling Presentation

## Slide 1 — A Simple Pizza Order

**Stage direction:** Ratul walks to the front. The other members stand slightly to the side.

**Ratul:**
> "Imagine this."
>
> "You're sitting at home. You're hungry. So you open a food delivery app and order a pizza."
>
> "You select your pizza..."
>
> "You place the order..."
>
> "You make the payment..."
>
> "And finally, the pizza arrives at your door."
>
> "Seems pretty simple, right?"

**Pause.**

> "But behind that one simple pizza order, there is actually a lot happening."

---

## Slide 2 — It Looks Simple. But What's Happening Behind the Screen?

**Ratul:**
> "The system needs to know who ordered the pizza."
>
> "It needs to know what pizza was ordered, how many were ordered, how much the customer has to pay, and where the pizza needs to be delivered."
>
> "And these pieces of information aren't independent."
>
> "The customer places an order. The order contains one or more items. Those items refer to pizzas. The order is connected to a payment and a delivery."
>
> "So, even though the customer sees one simple action—ordering a pizza—the software behind it is dealing with many entities and many relationships."

**Pause.**

> "So how do software engineers make sense of all this complexity before actually building the system?"

**Action:** Click to Slide 3.

> "That's where system modeling comes in."

---

## Slide 3 — System Modeling

**Ratul:**
> "System modeling is basically a way of representing a complex system in a simpler, visual form."
>
> "Instead of trying to understand the entire system at once, we break it down into understandable parts."
>
> "There are three important reasons we use modeling."
>
> "First, simplification—we can break a complicated system into smaller and easier pieces."
>
> "Second, communication—developers, analysts, and other stakeholders can use the model to develop a shared understanding of the system."
>
> "And third, validation—we can identify problems in the design before we start implementing the actual software."

**Action:** Point toward the next slide.

> "And when we model a system, we can look at it from different perspectives."

---

## Slide 4 — Data Modeling vs Object-Oriented Modeling

**Ratul:**
> "The two major perspectives we'll discuss today are data modeling and object-oriented modeling."
>
> "Data modeling mainly focuses on the data—what information exists, how it is stored, and how different pieces of data are related."
>
> "Object-oriented modeling focuses more on objects and their behavior—what the objects contain and what they can do."
>
> "So we can think of it this way:"
>
> "Data modeling asks: what information does the system need?"
>
> "And..."
>
> "Object-oriented modeling asks: what are the objects in the system, and how do they behave?"

> "Let's first look at the data side of the system."

---

## Slide 5 — From Business Idea to Database

**Member 2:**
> "When we design data, we don't immediately jump into creating database tables."
>
> "Instead, data modeling normally progresses through three levels: conceptual, logical, and physical."
>
> "The conceptual model gives us a high-level view. We identify important business concepts, entities, and relationships."
>
> "Then comes the logical model. Here we become more precise. We identify attributes, primary keys, foreign keys, and cardinalities."
>
> "Finally, we have the physical model."
>
> "This is where the design becomes specific to an actual database implementation—tables, data types, constraints, indexes, and so on."
>
> "So, in a simple way:"
>
> "Conceptual asks: What exists?"
>
> "Logical asks: How is it structured?"
>
> "Physical asks: How will it actually be stored?"

---

## Slide 6 — ERD

**Shila:**
> "Now let's talk about one of the most important tools for data modeling: the Entity-Relationship Diagram, or ERD."
>
> "An ERD helps us visualize the entities in a system and the relationships between them."
>
> "For our pizza example, we can have entities such as Customer, Order, Order Line, Pizza, Payment, and Delivery."
>
> "A customer places an order."
>
> "An order contains order lines."
>
> "An order line refers to a particular pizza."
>
> "And the order can also be connected to payment and delivery."
>
> "So an ERD gives us a visual picture of how the data in our system is connected."

---

## Slide 7 — Cardinality

**Shila:**
> "But simply knowing that two entities are related isn't enough."
>
> "We also need to know how many instances of one entity can be related to another."
>
> "This is called cardinality."
>
> "There are three common types."
>
> "One-to-one, or 1 to 1, means one instance is associated with one instance."
>
> "One-to-many, or 1 to N, means one instance can be associated with many instances."
>
> "For example, one customer can place many orders."
>
> "And finally, many-to-many, or N to M, means many instances on one side can be associated with many instances on the other side."
>
> "Cardinality therefore tells us how many instances can participate in a relationship."

---

## Slide 8 — DFD

**Shila:**
> "Now, there's another question."
>
> "An ERD tells us how our data is structured and related."
>
> "But what if we want to know how data moves through the system?"
>
> "That's where a Data Flow Diagram, or DFD, comes in."
>
> "A DFD represents how data moves between processes, external entities, and data stores."
>
> "For example, a customer sends an order to the system."
>
> "The system processes that order and stores the relevant information."
>
> "The order may then interact with a payment service and a delivery system."
>
> "So, a simple way to remember the difference is:"
>
> "ERD shows the structure of data. DFD shows the movement of data."

---

## Slide 9 — Normalization

**Shila:**
> "Now imagine that instead of organizing our pizza data properly, we put everything into one huge table."
>
> "Customer information might be repeated. Pizza information might be repeated. And we might even have columns like Pizza 1, Pizza 2, Pizza 3."
>
> "This creates redundancy and can cause problems when we insert, update, or delete data."
>
> "To solve this, we use database normalization."
>
> "The lecture discusses three important normal forms."
>
> "First Normal Form, or 1NF, requires atomic values and removes repeating groups."
>
> "Second Normal Form, or 2NF, removes partial dependencies."
>
> "And Third Normal Form, or 3NF, removes transitive dependencies."
>
> "The overall goal is to reduce redundancy and maintain data integrity."

**Handoff to Maruf:**
> "So far, we've looked at what data the system has, how that data is related, how it moves, and how we organize it."
>
> "But there's something missing."
>
> "We've talked a lot about data—but what about behavior?"

---

## Slide 10 — But Data Isn't the Whole Story

**Maruf:**
> "Exactly. A software system isn't just a collection of data."
>
> "Objects also perform actions."
>
> "For example, in our pizza system, a customer doesn't just have a name and an email."
>
> "The customer can place an order, view an order, or make a payment."
>
> "This is the idea behind Object-Oriented Modeling."
>
> "Object-oriented modeling represents real-world elements as objects that combine both state and behavior."
>
> "The state is represented through attributes."
>
> "And the behavior is represented through methods."

**Action:** Point to the object on screen.

> "So instead of only asking, 'What data does a customer have?' we can also ask, 'What can a customer do?'"

---

## Slide 11 — Class vs Object

**Maruf:**
> "To understand object-oriented modeling, we need to distinguish between a class and an object."
>
> "A class is like a blueprint."
>
> "It defines what attributes and methods something should have."
>
> "An object is an actual instance created from that class."
>
> "For example, we could have a class called Car."
>
> "The class might define attributes such as color and speed, and a method such as drive."
>
> "From that class, we can create different objects—perhaps one red car and another blue car."
>
> "So the easiest way to remember it is:"
>
> "Class is the blueprint. Object is the actual instance."

---

## Slide 12 — Four Pillars of Object-Oriented Design

**Maruf:**
> "Now let's look at some important concepts in object-oriented design."
>
> "First is encapsulation."
>
> "Encapsulation means hiding internal implementation details and exposing functionality through controlled interfaces."
>
> "Next is inheritance."
>
> "Inheritance allows a child class to inherit attributes and methods from a parent class, which helps avoid unnecessary code duplication."
>
> "Then we have polymorphism."
>
> "Polymorphism allows different objects to respond differently to the same operation depending on the context."
>
> "And finally, one of the major benefits of object-oriented modeling is reusability."
>
> "Instead of creating everything from scratch, modular components can be reused across different parts of a system."

**Handoff to Rabbi:**
> "So now we know how to model both data and objects."
>
> "But how do software engineers communicate all these designs in a standard visual language?"

---

## Slide 13 — UML

**Rabbi:**
> "This is where UML, or Unified Modeling Language, comes in."
>
> "UML is a standard language used to visualize, specify, construct, and document software systems."
>
> "UML diagrams can broadly be divided into two groups."
>
> "Structural diagrams describe what the system is made of."
>
> "For example, class diagrams."
>
> "Behavioral diagrams describe how the system behaves."
>
> "Examples include use case diagrams, sequence diagrams, and activity diagrams."

---

## Slide 14 — Behavioral UML

**Rabbi:**
> "Let's quickly look at three important behavioral diagrams."
>
> "First, the Use Case Diagram."
>
> "It looks at the system from the user's perspective."
>
> "For example, a customer might log in, view products, make a purchase, and complete checkout."
>
> "Next is the Sequence Diagram."
>
> "It shows how objects interact with each other over time."
>
> "For example, a customer might request a book reservation, the system checks availability, creates the reservation, and then sends a confirmation."
>
> "Finally, we have the Activity Diagram."
>
> "It represents a workflow step by step, including decisions and different possible paths."
>
> "So:"
>
> "Use Case — what the user wants."
>
> "Sequence — how interactions happen over time."
>
> "Activity — how a process flows."

---

## Slide 15 — Class Diagram

**Rabbi:**
> "Now we come to the Class Diagram."
>
> "A class diagram represents the static structure of an object-oriented system."
>
> "It shows classes, their attributes, their methods, and their relationships."
>
> "For example, in an e-commerce system, we might have a Customer class, an Order class, a Payment class, and a ShippingInfo class."
>
> "A Customer can place an Order."
>
> "An Order can have ShippingInfo."
>
> "And the Customer can make a Payment."
>
> "So unlike a simple database table, a class diagram can represent both data and behavior through attributes and methods."

---

## Slide 16 — ERD vs Class Diagram

**Rabbi:**
> "At this point, we might notice something interesting."
>
> "ERDs and class diagrams can look somewhat similar."
>
> "Both can show things like names, attributes, and relationships."
>
> "But their purposes are different."
>
> "An ERD is primarily data-centric. It is used to represent relational data and database structures."
>
> "A class diagram is object-oriented. It can represent attributes as well as behavior through methods."
>
> "So the simplest distinction is:"
>
> "ERD tells us about the data."
>
> "Class diagrams tell us about objects, their structure, and their behavior."

**Pause.**

> "And modern software systems can use both perspectives together."

**Handoff to Ratul**

---

## Slide 17 — From Real World to Working Software

**Member 4:**
> "And that brings us back to where we started."
>
> "We began with something that looked very simple—a customer ordering a pizza."
>
> "But behind that simple action, there is a complete system."
>
> "We can use data modeling to understand what information exists and how it is related."
>
> "We can use ERDs to represent those relationships."
>
> "We can use DFDs to understand how data moves."
>
> "We can use normalization to organize that data efficiently."
>
> "Then, through object-oriented modeling, we can represent objects and their behavior."
>
> "And finally, UML gives us a standard way to visualize different aspects of the software."

**Slow down here.**

> "So, good system modeling takes something complex..."

**Pause.**

> "...and turns it into something we can understand, communicate, and build."

**Then:**
> "Thank you."

---

## Closing Note

This presentation shows how a simple pizza-ordering example connects to real software design concepts such as data modeling, ERDs, DFDs, normalization, object-oriented modeling, and UML.
