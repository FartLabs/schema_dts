// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalObservationalStudyDesign } from "labs/SchemaOrg_MedicalObservationalStudyDesign.ts";
import type { SchemaOrg_MedicalStudy } from "labs/SchemaOrg_MedicalStudy.ts";

/**
 * An observational study is a type of medical study that attempts to infer the possible effect of a treatment through observation of a cohort of subjects over a period of time. In an observational study, the assignment of subjects into treatment groups versus control groups is outside the control of the investigator. This is in contrast with controlled studies, such as the randomized controlled trials represented by MedicalTrial, where each subject is randomly assigned to a treatment group or a control group before the start of the treatment.
 * @see https://schema.org/MedicalObservationalStudy
 */
export const SCHEMA_ORG_MedicalObservationalStudy = "https://schema.org/MedicalObservationalStudy" as const;

/**
 * An observational study is a type of medical study that attempts to infer the possible effect of a treatment through observation of a cohort of subjects over a period of time. In an observational study, the assignment of subjects into treatment groups versus control groups is outside the control of the investigator. This is in contrast with controlled studies, such as the randomized controlled trials represented by MedicalTrial, where each subject is randomly assigned to a treatment group or a control group before the start of the treatment.
 * @see https://schema.org/MedicalObservationalStudy
 */
export interface SchemaOrg_MedicalObservationalStudy extends SchemaOrg_MedicalStudy {
    /**
     * Specifics about the observational study design (enumerated).
     * @see https://schema.org/studyDesign
     */
    studyDesign: Array<SchemaOrg_MedicalObservationalStudyDesign>;
}
