// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "labs/SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_EventStatusType } from "labs/SchemaOrg_EventStatusType.ts";
import type { SchemaOrg_MedicalCondition } from "labs/SchemaOrg_MedicalCondition.ts";
import type { SchemaOrg_MedicalEntity } from "labs/SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_MedicalStudyStatus } from "labs/SchemaOrg_MedicalStudyStatus.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID.
 * @see https://schema.org/MedicalStudy
 */
export const SCHEMA_ORG_MedicalStudy = "https://schema.org/MedicalStudy" as const;

/**
 * A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID.
 * @see https://schema.org/MedicalStudy
 */
export interface SchemaOrg_MedicalStudy extends SchemaOrg_MedicalEntity {
    /**
     * Specifying the health condition(s) of a patient, medical study, or other target audience.
     * @see https://schema.org/healthCondition
     */
    healthCondition: Array<SchemaOrg_MedicalCondition>;
    /**
     * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     * @see https://schema.org/sponsor
     */
    sponsor: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The status of the study (enumerated).
     * @see https://schema.org/status
     */
    status: Array<SchemaOrg_Text | SchemaOrg_MedicalStudyStatus | SchemaOrg_EventStatusType>;
    /**
     * The location in which the study is taking/took place.
     * @see https://schema.org/studyLocation
     */
    studyLocation: Array<SchemaOrg_AdministrativeArea>;
    /**
     * A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study.
     * @see https://schema.org/studySubject
     */
    studySubject: Array<SchemaOrg_MedicalEntity>;
}
