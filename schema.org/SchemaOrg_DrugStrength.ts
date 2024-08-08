// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "./SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_MaximumDoseSchedule } from "./SchemaOrg_MaximumDoseSchedule.ts";
import type { SchemaOrg_MedicalIntangible } from "./SchemaOrg_MedicalIntangible.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A specific strength in which a medical drug is available in a specific country.
 * @see https://schema.org/DrugStrength
 */
export const SCHEMA_ORG_DrugStrength =
  "https://schema.org/DrugStrength" as const;

/**
 * A specific strength in which a medical drug is available in a specific country.
 * @see https://schema.org/DrugStrength
 */
export interface SchemaOrg_DrugStrength extends SchemaOrg_MedicalIntangible {
  /**
   * An active ingredient, typically chemical compounds and/or biologic substances.
   * @see https://schema.org/activeIngredient
   */
  activeIngredient?: Array<SchemaOrg_Text>;
  /**
   * The location in which the strength is available.
   * @see https://schema.org/availableIn
   */
  availableIn?: Array<SchemaOrg_AdministrativeArea>;
  /**
   * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
   * @see https://schema.org/maximumIntake
   */
  maximumIntake?: Array<SchemaOrg_MaximumDoseSchedule>;
  /**
   * The units of an active ingredient's strength, e.g. mg.
   * @see https://schema.org/strengthUnit
   */
  strengthUnit?: Array<SchemaOrg_Text>;
  /**
   * The value of an active ingredient's strength, e.g. 325.
   * @see https://schema.org/strengthValue
   */
  strengthValue?: Array<SchemaOrg_Number>;
}
