// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassThing } from "./Thing.ts";

/** The most generic type of entity related to health and the practice of medicine. */
export interface ClassMedicalEntity extends ClassThing {
  /** A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc. */
  code: Array<{ "@id": string }>;
  /** A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]]. */
  funding: Array<{ "@id": string }>;
  /** A medical guideline related to this entity. */
  guideline: Array<{ "@id": string }>;
  /** The drug or supplement's legal status, including any controlled substance schedules that apply. */
  legalStatus: Array<string | { "@id": string }>;
  /** The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc. */
  medicineSystem: Array<{ "@id": string }>;
  /** If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine. */
  recognizingAuthority: Array<{ "@id": string }>;
  /** If applicable, a medical specialty in which this entity is relevant. */
  relevantSpecialty: Array<{ "@id": string }>;
  /** A medical study or trial related to this entity. */
  study: Array<{ "@id": string }>;
}
