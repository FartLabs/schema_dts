// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalIntangible } from "./MedicalIntangible.ts";

/** A specific dosing schedule for a drug or supplement. */
export interface ClassDoseSchedule extends ClassMedicalIntangible {
  /** The unit of the dose, e.g. 'mg'. */
  doseUnit: Array<string>;
  /** The value of the dose, e.g. 500. */
  doseValue: Array<number | { "@id": string }>;
  /** How often the dose is taken, e.g. 'daily'. */
  frequency: Array<string>;
  /** Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'. */
  targetPopulation: Array<string>;
}
