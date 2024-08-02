// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalEntity } from "./MedicalEntity.ts";

/** Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures. */
export interface ClassAnatomicalStructure extends ClassMedicalEntity {
  /** If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system. */
  associatedPathophysiology: Array<string>;
  /** Location in the body of the anatomical structure. */
  bodyLocation: Array<string>;
  /** Other anatomical structures to which this structure is connected. */
  connectedTo: Array<{ "@id": string }>;
  /** An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures. */
  diagram: Array<{ "@id": string }>;
  /** The anatomical or organ system that this structure is part of. */
  partOfSystem: Array<{ "@id": string }>;
  /** A medical condition associated with this anatomy. */
  relatedCondition: Array<{ "@id": string }>;
  /** A medical therapy related to this anatomy. */
  relatedTherapy: Array<{ "@id": string }>;
  /** Component (sub-)structure(s) that comprise this anatomical structure. */
  subStructure: Array<{ "@id": string }>;
}
