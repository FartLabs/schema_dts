// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassPhysician } from "./Physician.ts";

/**
 * An individual medical practitioner. For their official address use [[address]], for affiliations to hospitals use [[hospitalAffiliation]].
 * The [[practicesAt]] property can be used to indicate [[MedicalOrganization]] hospitals, clinics, pharmacies etc. where this physician practices.
 */
export interface ClassIndividualPhysician extends ClassPhysician {
  /** A [[MedicalOrganization]] where the [[IndividualPhysician]] practices. */
  practicesAt: Array<{ "@id": string }>;
}
