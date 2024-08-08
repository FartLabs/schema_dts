// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalEntity } from "./SchemaOrg_MedicalEntity.ts";

/**
 * A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition, or complication.
 * @see https://schema.org/MedicalRiskFactor
 */
export const SCHEMA_ORG_MedicalRiskFactor =
  "https://schema.org/MedicalRiskFactor" as const;

/**
 * A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition, or complication.
 * @see https://schema.org/MedicalRiskFactor
 */
export interface SchemaOrg_MedicalRiskFactor extends SchemaOrg_MedicalEntity {
  /**
   * The condition, complication, etc. influenced by this factor.
   * @see https://schema.org/increasesRiskOf
   */
  increasesRiskOf?: Array<SchemaOrg_MedicalEntity>;
}
