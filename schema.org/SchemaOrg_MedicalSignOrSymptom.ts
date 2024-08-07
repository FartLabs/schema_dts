// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalCondition } from "labs/SchemaOrg_MedicalCondition.ts";
import type { SchemaOrg_MedicalTherapy } from "labs/SchemaOrg_MedicalTherapy.ts";

/**
 * Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is objective.
 * @see https://schema.org/MedicalSignOrSymptom
 */
export const SCHEMA_ORG_MedicalSignOrSymptom = "https://schema.org/MedicalSignOrSymptom" as const;

/**
 * Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is objective.
 * @see https://schema.org/MedicalSignOrSymptom
 */
export interface SchemaOrg_MedicalSignOrSymptom extends SchemaOrg_MedicalCondition {
    /**
     * A possible treatment to address this condition, sign or symptom.
     * @see https://schema.org/possibleTreatment
     */
    possibleTreatment: Array<SchemaOrg_MedicalTherapy>;
}
