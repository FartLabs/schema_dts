// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalEntity } from "./MedicalEntity.ts";

/** A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID. */
export interface ClassMedicalStudy extends ClassMedicalEntity {
  /** Specifying the health condition(s) of a patient, medical study, or other target audience. */
  healthCondition: Array<{ "@id": string }>;
  /** A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
  sponsor: Array<{ "@id": string }>;
  /** The status of the study (enumerated). */
  status: Array<string | { "@id": string }>;
  /** The location in which the study is taking/took place. */
  studyLocation: Array<{ "@id": string }>;
  /** A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study. */
  studySubject: Array<{ "@id": string }>;
}
