// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalBusiness } from "./MedicalBusiness.ts";
import type { ClassMedicalOrganization } from "./MedicalOrganization.ts";

/** A facility, often associated with a hospital or medical school, that is devoted to the specific diagnosis and/or healthcare. Previously limited to outpatients but with evolution it may be open to inpatients as well. */
export interface ClassMedicalClinic
  extends ClassMedicalBusiness, ClassMedicalOrganization {
  /** A medical service available from this provider. */
  availableService: Array<{ "@id": string }>;
  /** A medical specialty of the provider. */
  medicalSpecialty: Array<{ "@id": string }>;
}
