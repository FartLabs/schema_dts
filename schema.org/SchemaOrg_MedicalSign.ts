// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalSignOrSymptom } from "labs/SchemaOrg_MedicalSignOrSymptom.ts";
import type { SchemaOrg_MedicalTest } from "labs/SchemaOrg_MedicalTest.ts";
import type { SchemaOrg_PhysicalExam } from "labs/SchemaOrg_PhysicalExam.ts";

/**
 * Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examination.
 * @see https://schema.org/MedicalSign
 */
export const SCHEMA_ORG_MedicalSign = "https://schema.org/MedicalSign" as const;

/**
 * Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examination.
 * @see https://schema.org/MedicalSign
 */
export interface SchemaOrg_MedicalSign extends SchemaOrg_MedicalSignOrSymptom {
    /**
     * A physical examination that can identify this sign.
     * @see https://schema.org/identifyingExam
     */
    identifyingExam: Array<SchemaOrg_PhysicalExam>;
    /**
     * A diagnostic test that can identify this sign.
     * @see https://schema.org/identifyingTest
     */
    identifyingTest: Array<SchemaOrg_MedicalTest>;
}
