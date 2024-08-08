// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalBusiness } from "./SchemaOrg_MedicalBusiness.ts";
import type { SchemaOrg_MedicalOrganization } from "./SchemaOrg_MedicalOrganization.ts";
import type { SchemaOrg_MedicalProcedure } from "./SchemaOrg_MedicalProcedure.ts";
import type { SchemaOrg_MedicalSpecialty } from "./SchemaOrg_MedicalSpecialty.ts";
import type { SchemaOrg_MedicalTest } from "./SchemaOrg_MedicalTest.ts";
import type { SchemaOrg_MedicalTherapy } from "./SchemaOrg_MedicalTherapy.ts";

/**
 * A facility, often associated with a hospital or medical school, that is devoted to the specific diagnosis and/or healthcare. Previously limited to outpatients but with evolution it may be open to inpatients as well.
 * @see https://schema.org/MedicalClinic
 */
export const SCHEMA_ORG_MedicalClinic = "https://schema.org/MedicalClinic" as const;

/**
 * A facility, often associated with a hospital or medical school, that is devoted to the specific diagnosis and/or healthcare. Previously limited to outpatients but with evolution it may be open to inpatients as well.
 * @see https://schema.org/MedicalClinic
 */
export interface SchemaOrg_MedicalClinic extends SchemaOrg_MedicalBusiness, SchemaOrg_MedicalOrganization {
    /**
     * A medical service available from this provider.
     * @see https://schema.org/availableService
     */
    availableService?: Array<SchemaOrg_MedicalTest | SchemaOrg_MedicalTherapy | SchemaOrg_MedicalProcedure>;
    /**
     * A medical specialty of the provider.
     * @see https://schema.org/medicalSpecialty
     */
    medicalSpecialty?: Array<SchemaOrg_MedicalSpecialty>;
}
