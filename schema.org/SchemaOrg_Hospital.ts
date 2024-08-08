// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CDCPMDRecord } from "./SchemaOrg_CDCPMDRecord.ts";
import type { SchemaOrg_CivicStructure } from "./SchemaOrg_CivicStructure.ts";
import type { SchemaOrg_Dataset } from "./SchemaOrg_Dataset.ts";
import type { SchemaOrg_EmergencyService } from "./SchemaOrg_EmergencyService.ts";
import type { SchemaOrg_MedicalOrganization } from "./SchemaOrg_MedicalOrganization.ts";
import type { SchemaOrg_MedicalProcedure } from "./SchemaOrg_MedicalProcedure.ts";
import type { SchemaOrg_MedicalSpecialty } from "./SchemaOrg_MedicalSpecialty.ts";
import type { SchemaOrg_MedicalTest } from "./SchemaOrg_MedicalTest.ts";
import type { SchemaOrg_MedicalTherapy } from "./SchemaOrg_MedicalTherapy.ts";

/**
 * A hospital.
 * @see https://schema.org/Hospital
 */
export const SCHEMA_ORG_Hospital = "https://schema.org/Hospital" as const;

/**
 * A hospital.
 * @see https://schema.org/Hospital
 */
export interface SchemaOrg_Hospital
  extends
    SchemaOrg_CivicStructure,
    SchemaOrg_MedicalOrganization,
    SchemaOrg_EmergencyService {
  /**
   * A medical service available from this provider.
   * @see https://schema.org/availableService
   */
  availableService?: Array<
    | SchemaOrg_MedicalTest
    | SchemaOrg_MedicalTherapy
    | SchemaOrg_MedicalProcedure
  >;
  /**
   * Indicates data describing a hospital, e.g. a CDC [[CDCPMDRecord]] or as some kind of [[Dataset]].
   * @see https://schema.org/healthcareReportingData
   */
  healthcareReportingData?: Array<SchemaOrg_Dataset | SchemaOrg_CDCPMDRecord>;
  /**
   * A medical specialty of the provider.
   * @see https://schema.org/medicalSpecialty
   */
  medicalSpecialty?: Array<SchemaOrg_MedicalSpecialty>;
}
