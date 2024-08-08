// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalRiskEstimator } from "./SchemaOrg_MedicalRiskEstimator.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e.g. CHAD score, TIMI risk score.
 * @see https://schema.org/MedicalRiskScore
 */
export const SCHEMA_ORG_MedicalRiskScore =
  "https://schema.org/MedicalRiskScore" as const;

/**
 * A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e.g. CHAD score, TIMI risk score.
 * @see https://schema.org/MedicalRiskScore
 */
export interface SchemaOrg_MedicalRiskScore
  extends SchemaOrg_MedicalRiskEstimator {
  /**
   * The algorithm or rules to follow to compute the score.
   * @see https://schema.org/algorithm
   */
  algorithm?: Array<SchemaOrg_Text>;
}
