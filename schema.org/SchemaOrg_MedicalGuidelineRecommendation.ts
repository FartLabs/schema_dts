// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalGuideline } from "labs/SchemaOrg_MedicalGuideline.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation is sound.
 * @see https://schema.org/MedicalGuidelineRecommendation
 */
export const SCHEMA_ORG_MedicalGuidelineRecommendation = "https://schema.org/MedicalGuidelineRecommendation" as const;

/**
 * A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation is sound.
 * @see https://schema.org/MedicalGuidelineRecommendation
 */
export interface SchemaOrg_MedicalGuidelineRecommendation extends SchemaOrg_MedicalGuideline {
    /**
     * Strength of the guideline's recommendation (e.g. 'class I').
     * @see https://schema.org/recommendationStrength
     */
    recommendationStrength: Array<SchemaOrg_Text>;
}
