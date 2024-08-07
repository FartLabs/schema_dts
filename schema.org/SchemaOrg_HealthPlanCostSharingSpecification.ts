// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_PriceSpecification } from "labs/SchemaOrg_PriceSpecification.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A description of costs to the patient under a given network or formulary.
 * @see https://schema.org/HealthPlanCostSharingSpecification
 */
export const SCHEMA_ORG_HealthPlanCostSharingSpecification = "https://schema.org/HealthPlanCostSharingSpecification" as const;

/**
 * A description of costs to the patient under a given network or formulary.
 * @see https://schema.org/HealthPlanCostSharingSpecification
 */
export interface SchemaOrg_HealthPlanCostSharingSpecification extends SchemaOrg_Intangible {
    /**
     * Whether the coinsurance applies before or after deductible, etc. TODO: Is this a closed set?
     * @see https://schema.org/healthPlanCoinsuranceOption
     */
    healthPlanCoinsuranceOption: Array<SchemaOrg_Text>;
    /**
     * The rate of coinsurance expressed as a number between 0.0 and 1.0.
     * @see https://schema.org/healthPlanCoinsuranceRate
     */
    healthPlanCoinsuranceRate: Array<SchemaOrg_Number>;
    /**
     * The copay amount.
     * @see https://schema.org/healthPlanCopay
     */
    healthPlanCopay: Array<SchemaOrg_PriceSpecification>;
    /**
     * Whether the copay is before or after deductible, etc. TODO: Is this a closed set?
     * @see https://schema.org/healthPlanCopayOption
     */
    healthPlanCopayOption: Array<SchemaOrg_Text>;
    /**
     * The category or type of pharmacy associated with this cost sharing.
     * @see https://schema.org/healthPlanPharmacyCategory
     */
    healthPlanPharmacyCategory: Array<SchemaOrg_Text>;
}
