// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "labs/SchemaOrg_Boolean.ts";
import type { SchemaOrg_MedicalSpecialty } from "labs/SchemaOrg_MedicalSpecialty.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A medical organization (physical or not), such as hospital, institution or clinic.
 * @see https://schema.org/MedicalOrganization
 */
export const SCHEMA_ORG_MedicalOrganization = "https://schema.org/MedicalOrganization" as const;

/**
 * A medical organization (physical or not), such as hospital, institution or clinic.
 * @see https://schema.org/MedicalOrganization
 */
export interface SchemaOrg_MedicalOrganization extends SchemaOrg_Organization {
    /**
     * Name or unique ID of network. (Networks are often reused across different insurance plans.)
     * @see https://schema.org/healthPlanNetworkId
     */
    healthPlanNetworkId: Array<SchemaOrg_Text>;
    /**
     * Whether the provider is accepting new patients.
     * @see https://schema.org/isAcceptingNewPatients
     */
    isAcceptingNewPatients: Array<SchemaOrg_Boolean>;
    /**
     * A medical specialty of the provider.
     * @see https://schema.org/medicalSpecialty
     */
    medicalSpecialty: Array<SchemaOrg_MedicalSpecialty>;
}
