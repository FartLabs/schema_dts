// DO NOT EDIT: This file is generated.
import type { SchemaOrg_ContactPoint } from "labs/SchemaOrg_ContactPoint.ts";
import type { SchemaOrg_HealthPlanFormulary } from "labs/SchemaOrg_HealthPlanFormulary.ts";
import type { SchemaOrg_HealthPlanNetwork } from "labs/SchemaOrg_HealthPlanNetwork.ts";
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * A US-style health insurance plan, including PPOs, EPOs, and HMOs.
 * @see https://schema.org/HealthInsurancePlan
 */
export const SCHEMA_ORG_HealthInsurancePlan = "https://schema.org/HealthInsurancePlan" as const;

/**
 * A US-style health insurance plan, including PPOs, EPOs, and HMOs.
 * @see https://schema.org/HealthInsurancePlan
 */
export interface SchemaOrg_HealthInsurancePlan extends SchemaOrg_Intangible {
    /**
     * The URL that goes directly to the summary of benefits and coverage for the specific standard plan or plan variation.
     * @see https://schema.org/benefitsSummaryUrl
     */
    benefitsSummaryUrl: Array<SchemaOrg_URL>;
    /**
     * A contact point for a person or organization.
     * @see https://schema.org/contactPoint
     */
    contactPoint: Array<SchemaOrg_ContactPoint>;
    /**
     * TODO.
     * @see https://schema.org/healthPlanDrugOption
     */
    healthPlanDrugOption: Array<SchemaOrg_Text>;
    /**
     * The tier(s) of drugs offered by this formulary or insurance plan.
     * @see https://schema.org/healthPlanDrugTier
     */
    healthPlanDrugTier: Array<SchemaOrg_Text>;
    /**
     * The 14-character, HIOS-generated Plan ID number. (Plan IDs must be unique, even across different markets.)
     * @see https://schema.org/healthPlanId
     */
    healthPlanId: Array<SchemaOrg_Text>;
    /**
     * The URL that goes directly to the plan brochure for the specific standard plan or plan variation.
     * @see https://schema.org/healthPlanMarketingUrl
     */
    healthPlanMarketingUrl: Array<SchemaOrg_URL>;
    /**
     * Formularies covered by this plan.
     * @see https://schema.org/includesHealthPlanFormulary
     */
    includesHealthPlanFormulary: Array<SchemaOrg_HealthPlanFormulary>;
    /**
     * Networks covered by this plan.
     * @see https://schema.org/includesHealthPlanNetwork
     */
    includesHealthPlanNetwork: Array<SchemaOrg_HealthPlanNetwork>;
    /**
     * The standard for interpreting the Plan ID. The preferred is "HIOS". See the Centers for Medicare & Medicaid Services for more details.
     * @see https://schema.org/usesHealthPlanIdStandard
     */
    usesHealthPlanIdStandard: Array<SchemaOrg_URL | SchemaOrg_Text>;
}
