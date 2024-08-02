// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalIntangible } from "./MedicalIntangible.ts";

/** A specific strength in which a medical drug is available in a specific country. */
export interface ClassDrugStrength extends ClassMedicalIntangible {
  /** An active ingredient, typically chemical compounds and/or biologic substances. */
  activeIngredient: Array<string>;
  /** The location in which the strength is available. */
  availableIn: Array<{ "@id": string }>;
  /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
  maximumIntake: Array<{ "@id": string }>;
  /** The units of an active ingredient's strength, e.g. mg. */
  strengthUnit: Array<string>;
  /** The value of an active ingredient's strength, e.g. 325. */
  strengthValue: Array<number>;
}
