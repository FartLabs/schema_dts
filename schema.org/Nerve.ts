// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAnatomicalStructure } from "./AnatomicalStructure.ts";

/** A common pathway for the electrochemical nerve impulses that are transmitted along each of the axons. */
export interface ClassNerve extends ClassAnatomicalStructure {
  /** The branches that delineate from the nerve bundle. Not to be confused with [[branchOf]]. */
  branch: Array<{ "@id": string }>;
  /** The neurological pathway extension that involves muscle control. */
  nerveMotor: Array<{ "@id": string }>;
  /** The neurological pathway extension that inputs and sends information to the brain or spinal cord. */
  sensoryUnit: Array<{ "@id": string }>;
  /** The neurological pathway that originates the neurons. */
  sourcedFrom: Array<{ "@id": string }>;
}
