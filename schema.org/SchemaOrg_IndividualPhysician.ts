// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalOrganization } from "labs/SchemaOrg_MedicalOrganization.ts";
import type { SchemaOrg_Physician } from "labs/SchemaOrg_Physician.ts";

/**
 * An individual medical practitioner. For their official address use [[address]], for affiliations to hospitals use [[hospitalAffiliation]]. 
 * The [[practicesAt]] property can be used to indicate [[MedicalOrganization]] hospitals, clinics, pharmacies etc. where this physician practices.
 * @see https://schema.org/IndividualPhysician
 */
export const SCHEMA_ORG_IndividualPhysician = "https://schema.org/IndividualPhysician" as const;

/**
 * An individual medical practitioner. For their official address use [[address]], for affiliations to hospitals use [[hospitalAffiliation]]. 
 * The [[practicesAt]] property can be used to indicate [[MedicalOrganization]] hospitals, clinics, pharmacies etc. where this physician practices.
 * @see https://schema.org/IndividualPhysician
 */
export interface SchemaOrg_IndividualPhysician extends SchemaOrg_Physician {
    /**
     * A [[MedicalOrganization]] where the [[IndividualPhysician]] practices.
     * @see https://schema.org/practicesAt
     */
    practicesAt: Array<SchemaOrg_MedicalOrganization>;
}
