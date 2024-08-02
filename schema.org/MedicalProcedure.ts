// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalEntity } from "./MedicalEntity.ts";

/** A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (surgical), non-invasive, or other techniques. */
export interface ClassMedicalProcedure extends ClassMedicalEntity {
  /** Location in the body of the anatomical structure. */
  bodyLocation: Array<string>;
  /** Typical or recommended followup care after the procedure is performed. */
  followup: Array<string>;
  /** How the procedure is performed. */
  howPerformed: Array<string>;
  /** Typical preparation that a patient must undergo before having the procedure performed. */
  preparation: Array<string | { "@id": string }>;
  /** The type of procedure, for example Surgical, Noninvasive, or Percutaneous. */
  procedureType: Array<{ "@id": string }>;
  /** The status of the study (enumerated). */
  status: Array<string | { "@id": string }>;
}
