// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalBusiness } from "./MedicalBusiness.ts";
import type { ClassMedicalOrganization } from "./MedicalOrganization.ts";

/** An individual physician or a physician's office considered as a [[MedicalOrganization]]. */
export interface ClassPhysician
  extends ClassMedicalBusiness, ClassMedicalOrganization {
  /** A medical service available from this provider. */
  availableService: Array<{ "@id": string }>;
  /** A hospital with which the physician or office is affiliated. */
  hospitalAffiliation: Array<{ "@id": string }>;
  /** A medical specialty of the provider. */
  medicalSpecialty: Array<{ "@id": string }>;
  /**
   * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
   * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
   */
  occupationalCategory: Array<string | { "@id": string }>;
  /**
   * A <a href="https://en.wikipedia.org/wiki/National_Provider_Identifier">National Provider Identifier</a> (NPI)
   *     is a unique 10-digit identification number issued to health care providers in the United States by the Centers for Medicare and Medicaid Services.
   */
  usNPI: Array<string>;
}
