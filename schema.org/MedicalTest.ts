// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalEntity } from "./MedicalEntity.ts";

/** Any medical test, typically performed for diagnostic purposes. */
export interface ClassMedicalTest extends ClassMedicalEntity {
  /** Drugs that affect the test's results. */
  affectedBy: Array<{ "@id": string }>;
  /** Range of acceptable values for a typical patient, when applicable. */
  normalRange: Array<string | { "@id": string }>;
  /** A sign detected by the test. */
  signDetected: Array<{ "@id": string }>;
  /** A condition the test is used to diagnose. */
  usedToDiagnose: Array<{ "@id": string }>;
  /** Device used to perform the test. */
  usesDevice: Array<{ "@id": string }>;
}
