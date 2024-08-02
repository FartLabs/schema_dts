// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalAudience } from "./MedicalAudience.ts";
import type { ClassPerson } from "./Person.ts";

/** A patient is any person recipient of health care services. */
export interface ClassPatient extends ClassMedicalAudience, ClassPerson {
  /** One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process. */
  diagnosis: Array<{ "@id": string }>;
  /** Specifying a drug or medicine used in a medication procedure. */
  drug: Array<{ "@id": string }>;
  /** Specifying the health condition(s) of a patient, medical study, or other target audience. */
  healthCondition: Array<{ "@id": string }>;
}
