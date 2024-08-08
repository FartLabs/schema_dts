// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MaximumDoseSchedule } from "./SchemaOrg_MaximumDoseSchedule.ts";
import type { SchemaOrg_MedicalEntity } from "./SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical.
 * @see https://schema.org/Substance
 */
export const SCHEMA_ORG_Substance = "https://schema.org/Substance" as const;

/**
 * Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical.
 * @see https://schema.org/Substance
 */
export interface SchemaOrg_Substance extends SchemaOrg_MedicalEntity {
  /**
   * An active ingredient, typically chemical compounds and/or biologic substances.
   * @see https://schema.org/activeIngredient
   */
  activeIngredient?: Array<SchemaOrg_Text>;
  /**
   * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
   * @see https://schema.org/maximumIntake
   */
  maximumIntake?: Array<SchemaOrg_MaximumDoseSchedule>;
}
