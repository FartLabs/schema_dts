// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalProcedure } from "./MedicalProcedure.ts";

/** A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition. */
export interface ClassTherapeuticProcedure extends ClassMedicalProcedure {
  /** A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or otherwise life-threatening or requiring immediate medical attention), tag it as a seriousAdverseOutcome instead. */
  adverseOutcome: Array<{ "@id": string }>;
  /** A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used. */
  doseSchedule: Array<{ "@id": string }>;
  /** Specifying a drug or medicine used in a medication procedure. */
  drug: Array<{ "@id": string }>;
}
