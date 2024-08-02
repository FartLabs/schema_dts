// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalRiskEstimator } from "./MedicalRiskEstimator.ts";

/** A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e.g. CHAD score, TIMI risk score. */
export interface ClassMedicalRiskScore extends ClassMedicalRiskEstimator {
  /** The algorithm or rules to follow to compute the score. */
  algorithm: Array<string>;
}
