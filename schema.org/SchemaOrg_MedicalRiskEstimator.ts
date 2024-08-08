// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalEntity } from "./SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_MedicalRiskFactor } from "./SchemaOrg_MedicalRiskFactor.ts";

/**
 * Any rule set or interactive tool for estimating the risk of developing a complication or condition.
 * @see https://schema.org/MedicalRiskEstimator
 */
export const SCHEMA_ORG_MedicalRiskEstimator = "https://schema.org/MedicalRiskEstimator" as const;

/**
 * Any rule set or interactive tool for estimating the risk of developing a complication or condition.
 * @see https://schema.org/MedicalRiskEstimator
 */
export interface SchemaOrg_MedicalRiskEstimator extends SchemaOrg_MedicalEntity {
    /**
     * The condition, complication, or symptom whose risk is being estimated.
     * @see https://schema.org/estimatesRiskOf
     */
    estimatesRiskOf?: Array<SchemaOrg_MedicalEntity>;
    /**
     * A modifiable or non-modifiable risk factor included in the calculation, e.g. age, coexisting condition.
     * @see https://schema.org/includedRiskFactor
     */
    includedRiskFactor?: Array<SchemaOrg_MedicalRiskFactor>;
}
