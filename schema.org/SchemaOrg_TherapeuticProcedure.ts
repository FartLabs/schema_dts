// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DoseSchedule } from "./SchemaOrg_DoseSchedule.ts";
import type { SchemaOrg_Drug } from "./SchemaOrg_Drug.ts";
import type { SchemaOrg_MedicalEntity } from "./SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_MedicalProcedure } from "./SchemaOrg_MedicalProcedure.ts";

/**
 * A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition.
 * @see https://schema.org/TherapeuticProcedure
 */
export const SCHEMA_ORG_TherapeuticProcedure = "https://schema.org/TherapeuticProcedure" as const;

/**
 * A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition.
 * @see https://schema.org/TherapeuticProcedure
 */
export interface SchemaOrg_TherapeuticProcedure extends SchemaOrg_MedicalProcedure {
    /**
     * A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or otherwise life-threatening or requiring immediate medical attention), tag it as a seriousAdverseOutcome instead.
     * @see https://schema.org/adverseOutcome
     */
    adverseOutcome?: Array<SchemaOrg_MedicalEntity>;
    /**
     * A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
     * @see https://schema.org/doseSchedule
     */
    doseSchedule?: Array<SchemaOrg_DoseSchedule>;
    /**
     * Specifying a drug or medicine used in a medication procedure.
     * @see https://schema.org/drug
     */
    drug?: Array<SchemaOrg_Drug>;
}
