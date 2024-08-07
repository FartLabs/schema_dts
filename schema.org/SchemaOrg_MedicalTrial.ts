// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalStudy } from "labs/SchemaOrg_MedicalStudy.ts";
import type { SchemaOrg_MedicalTrialDesign } from "labs/SchemaOrg_MedicalTrialDesign.ts";

/**
 * A medical trial is a type of medical study that uses a scientific process to compare the safety and efficacy of medical therapies or medical procedures. In general, medical trials are controlled and subjects are allocated at random to the different treatment and/or control groups.
 * @see https://schema.org/MedicalTrial
 */
export const SCHEMA_ORG_MedicalTrial = "https://schema.org/MedicalTrial" as const;

/**
 * A medical trial is a type of medical study that uses a scientific process to compare the safety and efficacy of medical therapies or medical procedures. In general, medical trials are controlled and subjects are allocated at random to the different treatment and/or control groups.
 * @see https://schema.org/MedicalTrial
 */
export interface SchemaOrg_MedicalTrial extends SchemaOrg_MedicalStudy {
    /**
     * Specifics about the trial design (enumerated).
     * @see https://schema.org/trialDesign
     */
    trialDesign: Array<SchemaOrg_MedicalTrialDesign>;
}
