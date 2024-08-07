// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CategoryCode } from "labs/SchemaOrg_CategoryCode.ts";
import type { SchemaOrg_Hospital } from "labs/SchemaOrg_Hospital.ts";
import type { SchemaOrg_MedicalBusiness } from "labs/SchemaOrg_MedicalBusiness.ts";
import type { SchemaOrg_MedicalOrganization } from "labs/SchemaOrg_MedicalOrganization.ts";
import type { SchemaOrg_MedicalProcedure } from "labs/SchemaOrg_MedicalProcedure.ts";
import type { SchemaOrg_MedicalSpecialty } from "labs/SchemaOrg_MedicalSpecialty.ts";
import type { SchemaOrg_MedicalTest } from "labs/SchemaOrg_MedicalTest.ts";
import type { SchemaOrg_MedicalTherapy } from "labs/SchemaOrg_MedicalTherapy.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * An individual physician or a physician's office considered as a [[MedicalOrganization]].
 * @see https://schema.org/Physician
 */
export const SCHEMA_ORG_Physician = "https://schema.org/Physician" as const;

/**
 * An individual physician or a physician's office considered as a [[MedicalOrganization]].
 * @see https://schema.org/Physician
 */
export interface SchemaOrg_Physician extends SchemaOrg_MedicalBusiness, SchemaOrg_MedicalOrganization {
    /**
     * A medical service available from this provider.
     * @see https://schema.org/availableService
     */
    availableService: Array<SchemaOrg_MedicalTest | SchemaOrg_MedicalTherapy | SchemaOrg_MedicalProcedure>;
    /**
     * A hospital with which the physician or office is affiliated.
     * @see https://schema.org/hospitalAffiliation
     */
    hospitalAffiliation: Array<SchemaOrg_Hospital>;
    /**
     * A medical specialty of the provider.
     * @see https://schema.org/medicalSpecialty
     */
    medicalSpecialty: Array<SchemaOrg_MedicalSpecialty>;
    /**
     * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
     * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
     * @see https://schema.org/occupationalCategory
     */
    occupationalCategory: Array<SchemaOrg_CategoryCode | SchemaOrg_Text>;
    /**
     * A <a href="https://en.wikipedia.org/wiki/National_Provider_Identifier">National Provider Identifier</a> (NPI) 
     *     is a unique 10-digit identification number issued to health care providers in the United States by the Centers for Medicare and Medicaid Services.
     * @see https://schema.org/usNPI
     */
    usNPI: Array<SchemaOrg_Text>;
}
