// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalEntity } from "./MedicalEntity.ts";

/** Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical. */
export interface ClassSubstance extends ClassMedicalEntity {
  /** An active ingredient, typically chemical compounds and/or biologic substances. */
  activeIngredient: Array<string>;
  /** Recommended intake of this supplement for a given population as defined by a specific recommending authority. */
  maximumIntake: Array<{ "@id": string }>;
}
