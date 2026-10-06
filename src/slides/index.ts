import type { SlideDefinition } from '../deck/types';

import { Slide01, slide01Notes } from './Slide01';
import { Slide02, slide02Notes } from './Slide02';
import { Slide03, slide03Notes } from './Slide03';
import { Slide04, slide04Notes } from './Slide04';
import { Slide05, slide05Notes } from './Slide05';
import { Slide06, slide06Notes } from './Slide06';
import { Slide07, slide07Notes } from './Slide07';
import { Slide08, slide08Notes } from './Slide08';
import { Slide09, slide09Notes } from './Slide09';
import { Slide10, slide10Notes } from './Slide10';
import { Slide11, slide11Notes } from './Slide11';
import { Slide12, slide12Notes } from './Slide12';
import { Slide13, slide13Notes } from './Slide13';
import { Slide14, slide14Notes } from './Slide14';
import { Slide15, slide15Notes } from './Slide15';
import { Slide16, slide16Notes } from './Slide16';
import { Slide17, slide17Notes } from './Slide17';

export const slides: readonly SlideDefinition[] = [
  {
    id: 'slide-01',
    title: 'A Simple Pizza Order',
    section: 'Introduction · Scenario',
    notes: slide01Notes,
    Component: Slide01,
  },
  {
    id: 'slide-02',
    title: 'What Happens Behind the Screen?',
    section: 'System Breakdown',
    notes: slide02Notes,
    Component: Slide02,
  },
  {
    id: 'slide-03',
    title: 'What Is System Modeling?',
    section: 'Foundations · Definition',
    notes: slide03Notes,
    Component: Slide03,
  },
  {
    id: 'slide-04',
    title: 'Data Modeling vs. OO Modeling',
    section: 'Architectural Lenses',
    notes: slide04Notes,
    Component: Slide04,
  },
  {
    id: 'slide-05',
    title: 'Three Levels of Data Modeling',
    section: 'Data Modeling · Abstraction',
    notes: slide05Notes,
    Component: Slide05,
  },
  {
    id: 'slide-06',
    title: 'ERD — Mapping Data Relationships',
    section: 'Data Modeling · ERD',
    notes: slide06Notes,
    Component: Slide06,
  },
  {
    id: 'slide-07',
    title: 'How Many? — Cardinality',
    section: 'Data Modeling · Cardinality',
    notes: slide07Notes,
    Component: Slide07,
  },
  {
    id: 'slide-08',
    title: 'DFD — Tracking Data Movement',
    section: 'Data Flow · Architecture',
    notes: slide08Notes,
    Component: Slide08,
  },
  {
    id: 'slide-09',
    title: 'Normalization — Cleaning Messy Data',
    section: 'Data Integrity · Normalization',
    notes: slide09Notes,
    Component: Slide09,
  },
  {
    id: 'slide-10',
    title: 'Object-Oriented Modeling',
    section: 'Object-Oriented Paradigm',
    notes: slide10Notes,
    Component: Slide10,
  },
  {
    id: 'slide-11',
    title: 'Class ≠ Object',
    section: 'Core OOP Concepts',
    notes: slide11Notes,
    Component: Slide11,
  },
  {
    id: 'slide-12',
    title: 'The Four Pillars of OOP',
    section: 'Object-Oriented Design',
    notes: slide12Notes,
    Component: Slide12,
  },
  {
    id: 'slide-13',
    title: 'UML — Common Language for Design',
    section: 'System Modeling Standards',
    notes: slide13Notes,
    Component: Slide13,
  },
  {
    id: 'slide-14',
    title: 'Behavioral UML Diagrams',
    section: 'Dynamic Modeling · UML',
    notes: slide14Notes,
    Component: Slide14,
  },
  {
    id: 'slide-15',
    title: 'Class Diagram — Structural Backbone',
    section: 'Structural UML',
    notes: slide15Notes,
    Component: Slide15,
  },
  {
    id: 'slide-16',
    title: 'ERD vs. Class Diagram',
    section: 'Comparative Synthesis',
    notes: slide16Notes,
    Component: Slide16,
  },
  {
    id: 'slide-17',
    title: 'From Real World to Working Software',
    section: 'Grand Synthesis · Conclusion',
    notes: slide17Notes,
    Component: Slide17,
  },
];
