// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAnatomicalStructure } from "./AnatomicalStructure.ts";

/** The anatomical location at which two or more bones make contact. */
export interface ClassJoint extends ClassAnatomicalStructure {
  /** The biomechanical properties of the bone. */
  biomechnicalClass: Array<string>;
  /** The degree of mobility the joint allows. */
  functionalClass: Array<string | { "@id": string }>;
  /** The name given to how bone physically connects to each other. */
  structuralClass: Array<string>;
}
