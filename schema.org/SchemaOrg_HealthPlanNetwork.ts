// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "labs/SchemaOrg_Boolean.ts";
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A US-style health insurance plan network.
 * @see https://schema.org/HealthPlanNetwork
 */
export const SCHEMA_ORG_HealthPlanNetwork = "https://schema.org/HealthPlanNetwork" as const;

/**
 * A US-style health insurance plan network.
 * @see https://schema.org/HealthPlanNetwork
 */
export interface SchemaOrg_HealthPlanNetwork extends SchemaOrg_Intangible {
    /**
     * The costs to the patient for services under this network or formulary.
     * @see https://schema.org/healthPlanCostSharing
     */
    healthPlanCostSharing: Array<SchemaOrg_Boolean>;
    /**
     * Name or unique ID of network. (Networks are often reused across different insurance plans.)
     * @see https://schema.org/healthPlanNetworkId
     */
    healthPlanNetworkId: Array<SchemaOrg_Text>;
    /**
     * The tier(s) for this network.
     * @see https://schema.org/healthPlanNetworkTier
     */
    healthPlanNetworkTier: Array<SchemaOrg_Text>;
}
