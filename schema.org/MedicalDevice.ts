// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalEntity } from "./MedicalEntity.ts";

/** Any object used in a medical capacity, such as to diagnose or treat a patient. */
export interface ClassMedicalDevice extends ClassMedicalEntity {
  /** A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or otherwise life-threatening or requiring immediate medical attention), tag it as a seriousAdverseOutcome instead. */
  adverseOutcome: Array<{ "@id": string }>;
  /** A contraindication for this therapy. */
  contraindication: Array<string | { "@id": string }>;
  /** A description of the postoperative procedures, care, and/or followups for this device. */
  postOp: Array<string>;
  /** A description of the workup, testing, and other preparations required before implanting this device. */
  preOp: Array<string>;
  /** A description of the procedure involved in setting up, using, and/or installing the device. */
  procedure: Array<string>;
  /** A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition. */
  seriousAdverseOutcome: Array<{ "@id": string }>;
}
