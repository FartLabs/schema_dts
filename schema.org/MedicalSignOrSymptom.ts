// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalCondition } from "./MedicalCondition.ts";

/** Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is objective. */
export interface ClassMedicalSignOrSymptom extends ClassMedicalCondition {
  /** A possible treatment to address this condition, sign or symptom. */
  possibleTreatment: Array<{ "@id": string }>;
}
