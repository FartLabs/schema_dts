// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalEntity } from "./MedicalEntity.ts";

/** A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc. */
export interface ClassDrugClass extends ClassMedicalEntity {
  /** Specifying a drug or medicine used in a medication procedure. */
  drug: Array<{ "@id": string }>;
}
