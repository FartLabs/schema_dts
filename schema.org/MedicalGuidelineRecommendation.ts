// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalGuideline } from "./MedicalGuideline.ts";

/** A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation is sound. */
export interface ClassMedicalGuidelineRecommendation
  extends ClassMedicalGuideline {
  /** Strength of the guideline's recommendation (e.g. 'class I'). */
  recommendationStrength: Array<string>;
}
