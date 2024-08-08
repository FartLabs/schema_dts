// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_LifestyleModification } from "./SchemaOrg_LifestyleModification.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A strategy of regulating the intake of food to achieve or maintain a specific health-related goal.
 * @see https://schema.org/Diet
 */
export const SCHEMA_ORG_Diet = "https://schema.org/Diet" as const;

/**
 * A strategy of regulating the intake of food to achieve or maintain a specific health-related goal.
 * @see https://schema.org/Diet
 */
export interface SchemaOrg_Diet extends SchemaOrg_LifestyleModification, SchemaOrg_CreativeWork {
    /**
     * Nutritional information specific to the dietary plan. May include dietary recommendations on what foods to avoid, what foods to consume, and specific alterations/deviations from the USDA or other regulatory body's approved dietary guidelines.
     * @see https://schema.org/dietFeatures
     */
    dietFeatures?: Array<SchemaOrg_Text>;
    /**
     * People or organizations that endorse the plan.
     * @see https://schema.org/endorsers
     */
    endorsers?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * Medical expert advice related to the plan.
     * @see https://schema.org/expertConsiderations
     */
    expertConsiderations?: Array<SchemaOrg_Text>;
    /**
     * Specific physiologic benefits associated to the plan.
     * @see https://schema.org/physiologicalBenefits
     */
    physiologicalBenefits?: Array<SchemaOrg_Text>;
    /**
     * Specific physiologic risks associated to the diet plan.
     * @see https://schema.org/risks
     */
    risks?: Array<SchemaOrg_Text>;
}
