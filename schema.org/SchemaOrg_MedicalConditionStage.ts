// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalIntangible } from "./SchemaOrg_MedicalIntangible.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A stage of a medical condition, such as 'Stage IIIa'.
 * @see https://schema.org/MedicalConditionStage
 */
export const SCHEMA_ORG_MedicalConditionStage =
  "https://schema.org/MedicalConditionStage" as const;

/**
 * A stage of a medical condition, such as 'Stage IIIa'.
 * @see https://schema.org/MedicalConditionStage
 */
export interface SchemaOrg_MedicalConditionStage
  extends SchemaOrg_MedicalIntangible {
  /**
   * The stage represented as a number, e.g. 3.
   * @see https://schema.org/stageAsNumber
   */
  stageAsNumber?: Array<SchemaOrg_Number>;
  /**
   * The substage, e.g. 'a' for Stage IIIa.
   * @see https://schema.org/subStageSuffix
   */
  subStageSuffix?: Array<SchemaOrg_Text>;
}
