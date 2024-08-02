// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalEntity } from "./MedicalEntity.ts";

/** Any rule set or interactive tool for estimating the risk of developing a complication or condition. */
export interface ClassMedicalRiskEstimator extends ClassMedicalEntity {
  /** The condition, complication, or symptom whose risk is being estimated. */
  estimatesRiskOf: Array<{ "@id": string }>;
  /** A modifiable or non-modifiable risk factor included in the calculation, e.g. age, coexisting condition. */
  includedRiskFactor: Array<{ "@id": string }>;
}
