// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalSignOrSymptom } from "./MedicalSignOrSymptom.ts";

/** Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examination. */
export interface ClassMedicalSign extends ClassMedicalSignOrSymptom {
  /** A physical examination that can identify this sign. */
  identifyingExam: Array<{ "@id": string }>;
  /** A diagnostic test that can identify this sign. */
  identifyingTest: Array<{ "@id": string }>;
}
