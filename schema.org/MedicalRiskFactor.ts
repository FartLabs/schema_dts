// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalEntity } from "./MedicalEntity.ts";

/** A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition, or complication. */
export interface ClassMedicalRiskFactor extends ClassMedicalEntity {
  /** The condition, complication, etc. influenced by this factor. */
  increasesRiskOf: Array<{ "@id": string }>;
}
