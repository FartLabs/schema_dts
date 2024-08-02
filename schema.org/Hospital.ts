// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCivicStructure } from "./CivicStructure.ts";
import type { ClassMedicalOrganization } from "./MedicalOrganization.ts";
import type { ClassEmergencyService } from "./EmergencyService.ts";

/** A hospital. */
export interface ClassHospital
  extends ClassCivicStructure, ClassMedicalOrganization, ClassEmergencyService {
  /** A medical service available from this provider. */
  availableService: Array<{ "@id": string }>;
  /** Indicates data describing a hospital, e.g. a CDC [[CDCPMDRecord]] or as some kind of [[Dataset]]. */
  healthcareReportingData: Array<{ "@id": string }>;
  /** A medical specialty of the provider. */
  medicalSpecialty: Array<{ "@id": string }>;
}
