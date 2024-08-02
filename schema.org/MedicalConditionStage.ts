// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalIntangible } from "./MedicalIntangible.ts";

/** A stage of a medical condition, such as 'Stage IIIa'. */
export interface ClassMedicalConditionStage extends ClassMedicalIntangible {
  /** The stage represented as a number, e.g. 3. */
  stageAsNumber: Array<number>;
  /** The substage, e.g. 'a' for Stage IIIa. */
  subStageSuffix: Array<string>;
}
