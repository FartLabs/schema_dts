// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalStudy } from "./MedicalStudy.ts";

/** A medical trial is a type of medical study that uses a scientific process to compare the safety and efficacy of medical therapies or medical procedures. In general, medical trials are controlled and subjects are allocated at random to the different treatment and/or control groups. */
export interface ClassMedicalTrial extends ClassMedicalStudy {
  /** Specifics about the trial design (enumerated). */
  trialDesign: Array<{ "@id": string }>;
}
