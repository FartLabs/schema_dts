// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "labs/SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_MedicalIntangible } from "labs/SchemaOrg_MedicalIntangible.ts";

/**
 * The legal availability status of a medical drug.
 * @see https://schema.org/DrugLegalStatus
 */
export const SCHEMA_ORG_DrugLegalStatus = "https://schema.org/DrugLegalStatus" as const;

/**
 * The legal availability status of a medical drug.
 * @see https://schema.org/DrugLegalStatus
 */
export interface SchemaOrg_DrugLegalStatus extends SchemaOrg_MedicalIntangible {
    /**
     * The location in which the status applies.
     * @see https://schema.org/applicableLocation
     */
    applicableLocation: Array<SchemaOrg_AdministrativeArea>;
}
