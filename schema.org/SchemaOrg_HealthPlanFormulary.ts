// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * For a given health insurance plan, the specification for costs and coverage of prescription drugs.
 * @see https://schema.org/HealthPlanFormulary
 */
export const SCHEMA_ORG_HealthPlanFormulary =
  "https://schema.org/HealthPlanFormulary" as const;

/**
 * For a given health insurance plan, the specification for costs and coverage of prescription drugs.
 * @see https://schema.org/HealthPlanFormulary
 */
export interface SchemaOrg_HealthPlanFormulary extends SchemaOrg_Intangible {
  /**
   * The costs to the patient for services under this network or formulary.
   * @see https://schema.org/healthPlanCostSharing
   */
  healthPlanCostSharing?: Array<SchemaOrg_Boolean>;
  /**
   * The tier(s) of drugs offered by this formulary or insurance plan.
   * @see https://schema.org/healthPlanDrugTier
   */
  healthPlanDrugTier?: Array<SchemaOrg_Text>;
  /**
   * Whether prescriptions can be delivered by mail.
   * @see https://schema.org/offersPrescriptionByMail
   */
  offersPrescriptionByMail?: Array<SchemaOrg_Boolean>;
}
