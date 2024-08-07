// DO NOT EDIT: This file is generated.
import type { SchemaOrg_EventStatusType } from "labs/SchemaOrg_EventStatusType.ts";
import type { SchemaOrg_MedicalEntity } from "labs/SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_MedicalProcedureType } from "labs/SchemaOrg_MedicalProcedureType.ts";
import type { SchemaOrg_MedicalStudyStatus } from "labs/SchemaOrg_MedicalStudyStatus.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (surgical), non-invasive, or other techniques.
 * @see https://schema.org/MedicalProcedure
 */
export const SCHEMA_ORG_MedicalProcedure = "https://schema.org/MedicalProcedure" as const;

/**
 * A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (surgical), non-invasive, or other techniques.
 * @see https://schema.org/MedicalProcedure
 */
export interface SchemaOrg_MedicalProcedure extends SchemaOrg_MedicalEntity {
    /**
     * Location in the body of the anatomical structure.
     * @see https://schema.org/bodyLocation
     */
    bodyLocation: Array<SchemaOrg_Text>;
    /**
     * Typical or recommended followup care after the procedure is performed.
     * @see https://schema.org/followup
     */
    followup: Array<SchemaOrg_Text>;
    /**
     * How the procedure is performed.
     * @see https://schema.org/howPerformed
     */
    howPerformed: Array<SchemaOrg_Text>;
    /**
     * Typical preparation that a patient must undergo before having the procedure performed.
     * @see https://schema.org/preparation
     */
    preparation: Array<SchemaOrg_Text | SchemaOrg_MedicalEntity>;
    /**
     * The type of procedure, for example Surgical, Noninvasive, or Percutaneous.
     * @see https://schema.org/procedureType
     */
    procedureType: Array<SchemaOrg_MedicalProcedureType>;
    /**
     * The status of the study (enumerated).
     * @see https://schema.org/status
     */
    status: Array<SchemaOrg_Text | SchemaOrg_MedicalStudyStatus | SchemaOrg_EventStatusType>;
}
