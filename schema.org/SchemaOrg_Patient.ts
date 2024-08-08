// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Drug } from "./SchemaOrg_Drug.ts";
import type { SchemaOrg_MedicalAudience } from "./SchemaOrg_MedicalAudience.ts";
import type { SchemaOrg_MedicalCondition } from "./SchemaOrg_MedicalCondition.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";

/**
 * A patient is any person recipient of health care services.
 * @see https://schema.org/Patient
 */
export const SCHEMA_ORG_Patient = "https://schema.org/Patient" as const;

/**
 * A patient is any person recipient of health care services.
 * @see https://schema.org/Patient
 */
export interface SchemaOrg_Patient extends SchemaOrg_MedicalAudience, SchemaOrg_Person {
    /**
     * One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process.
     * @see https://schema.org/diagnosis
     */
    diagnosis?: Array<SchemaOrg_MedicalCondition>;
    /**
     * Specifying a drug or medicine used in a medication procedure.
     * @see https://schema.org/drug
     */
    drug?: Array<SchemaOrg_Drug>;
    /**
     * Specifying the health condition(s) of a patient, medical study, or other target audience.
     * @see https://schema.org/healthCondition
     */
    healthCondition?: Array<SchemaOrg_MedicalCondition>;
}
