// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalIntangible } from "./MedicalIntangible.ts";

/** The legal availability status of a medical drug. */
export interface ClassDrugLegalStatus extends ClassMedicalIntangible {
  /** The location in which the status applies. */
  applicableLocation: Array<{ "@id": string }>;
}
