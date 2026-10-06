# Data and Object-Oriented System Design Principles
### Apple Keynote-Style Presentation Web Application

An animated, keynote-style interactive web presentation covering **Data and Object-Oriented System Design Principles** through the opening narrative of ordering a pizza on a food delivery app.

---

## 🎨 Design System & Aesthetics
- **Theme**: Warm whitish paper background (`#F8F4EE`), ember orange-red (`#E04E1F`), rich earth browns (`#7A4A2E`), and dark ink (`#16110E`).
- **Typography**: Variable fonts loaded locally via Fontsource:
  - **Display / Headers**: *Fraunces Variable* (editorial serif with italics)
  - **Body / Interface**: *Inter Tight Variable* (clean sans-serif)
  - **Code / Metrics**: *JetBrains Mono Variable* (monospaced)
- **Keynote Mechanics**:
  - Word-by-word masked text entry animations.
  - Self-drawing vector connectors with animated SVG data flow pulses.
  - Dynamic ambient background glow that glides across slides like Apple Magic Move.
  - Directional dissolve-and-push slide transitions with Gaussian de-blur.
  - Dynamic stage scaling preserving a 16:9 (1920×1080) layout across all monitor sizes.

---

## ⌨️ Navigation & Controls

| Key / Action | Function |
|---|---|
| <kbd>→</kbd> / <kbd>Space</kbd> / <kbd>PageDown</kbd> / <kbd>Enter</kbd> | Next Slide |
| <kbd>←</kbd> / <kbd>PageUp</kbd> / <kbd>Backspace</kbd> | Previous Slide |
| <kbd>Home</kbd> / <kbd>End</kbd> | Jump to First / Last Slide |
| <kbd>N</kbd> | Toggle Speaker Notes Drawer |
| <kbd>F</kbd> | Toggle Fullscreen Mode |
| **Progress Ticks** | Click any dot in the bottom bar to jump to that slide |
| **Swipe (Touch)** | Swipe left/right on mobile or touchscreen |

---

## 📂 Slide Directory (Modular Architecture)

Each slide is isolated in its own TypeScript component under `src/slides/`:

1. [Slide 01](file:///root/ppp/src/slides/Slide01.tsx): **Opening Scenario** — *A Simple Pizza Order* (Customer → Phone/App → Restaurant → Payment → Delivery)
2. [Slide 02](file:///root/ppp/src/slides/Slide02.tsx): **System Breakdown** — *What's Happening Behind the Screen?* (Hierarchical component decomposition tree)
3. [Slide 03](file:///root/ppp/src/slides/Slide03.tsx): **Foundations** — *What Is System Modeling?* (Real World → Model → Software System, Simplify/Communicate/Validate)
4. [Slide 04](file:///root/ppp/src/slides/Slide04.tsx): **Architectural Lenses** — *Data Modeling vs. Object-Oriented Modeling* (Complementary perspectives)
5. [Slide 05](file:///root/ppp/src/slides/Slide05.tsx): **Abstraction Levels** — *From Business Idea to Database* (Conceptual, Logical, Physical)
6. [Slide 06](file:///root/ppp/src/slides/Slide06.tsx): **Data Modeling** — *ERD: Mapping Data Relationships* (Customer, Order, Order Line, Pizza, Payment, Delivery)
7. [Slide 07](file:///root/ppp/src/slides/Slide07.tsx): **Cardinality** — *How Many?* (1:1, 1:N, N:M with Crow's Foot notation)
8. [Slide 08](file:///root/ppp/src/slides/Slide08.tsx): **Data Movement** — *ERD Shows Relationships. DFD Shows Movement.* (Gane-Sarson / Yourdon DFD symbols)
9. [Slide 09](file:///root/ppp/src/slides/Slide09.tsx): **Data Integrity** — *What Happens When Data Gets Messy?* (Normalization: 1NF, 2NF, 3NF)
10. [Slide 10](file:///root/ppp/src/slides/Slide10.tsx): **OO Paradigm** — *But Data Isn't the Whole Story* (Customer object: State + Behavior = Object)
11. [Slide 11](file:///root/ppp/src/slides/Slide11.tsx): **Core Concepts** — *Class ≠ Object* (Blueprint vs runtime instances)
12. [Slide 12](file:///root/ppp/src/slides/Slide12.tsx): **Four Pillars** — *The Four Pillars of Object-Oriented Design* (Encapsulation, Inheritance, Polymorphism, Reusability)
13. [Slide 13](file:///root/ppp/src/slides/Slide13.tsx): **Design Language** — *UML: A Common Language for Software Design* (Structural vs Behavioral hierarchy)
14. [Slide 14](file:///root/ppp/src/slides/Slide14.tsx): **Dynamic Modeling** — *How Does the System Behave?* (Use Case, Sequence with lifelines, Activity flows)
15. [Slide 15](file:///root/ppp/src/slides/Slide15.tsx): **Structural UML** — *Class Diagram: The Structural Backbone* (Customer, Order, ShippingInfo, Payment)
16. [Slide 16](file:///root/ppp/src/slides/Slide16.tsx): **Comparative Synthesis** — *ERD vs. Class Diagram* (Side-by-side comparison & dimension matrix)
17. [Slide 17](file:///root/ppp/src/slides/Slide17.tsx): **Grand Synthesis** — *From Real World → Working Software* (Full horizontal pipeline, inspiring conclusion & thank you)

---

## 🚀 Running Locally

```bash
# Start development server with Hot Module Replacement
npm run dev

# Run TypeScript compiler verification
npx tsc -b

# Build optimized production bundle
npm run build
```
