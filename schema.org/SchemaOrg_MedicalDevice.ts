// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalContraindication } from "./SchemaOrg_MedicalContraindication.ts";
import type { SchemaOrg_MedicalEntity } from "./SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * Any object used in a medical capacity, such as to diagnose or treat a patient.
 * @see https://schema.org/MedicalDevice
 */
export const SCHEMA_ORG_MedicalDevice = "https://schema.org/MedicalDevice" as const;

/**
 * Any object used in a medical capacity, such as to diagnose or treat a patient.
 * @see https://schema.org/MedicalDevice
 */
export interface SchemaOrg_MedicalDevice extends SchemaOrg_MedicalEntity {
    /**
     * A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or otherwise life-threatening or requiring immediate medical attention), tag it as a seriousAdverseOutcome instead.
     * @see https://schema.org/adverseOutcome
     */
    adverseOutcome?: Array<SchemaOrg_MedicalEntity>;
    /**
     * A contraindication for this therapy.
     * @see https://schema.org/contraindication
     */
    contraindication?: Array<SchemaOrg_Text | SchemaOrg_MedicalContraindication>;
    /**
     * A description of the postoperative procedures, care, and/or followups for this device.
     * @see https://schema.org/postOp
     */
    postOp?: Array<SchemaOrg_Text>;
    /**
     * A description of the workup, testing, and other preparations required before implanting this device.
     * @see https://schema.org/preOp
     */
    preOp?: Array<SchemaOrg_Text>;
    /**
     * A description of the procedure involved in setting up, using, and/or installing the device.
     * @see https://schema.org/procedure
     */
    procedure?: Array<SchemaOrg_Text>;
    /**
     * A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.
     * @see https://schema.org/seriousAdverseOutcome
     */
    seriousAdverseOutcome?: Array<SchemaOrg_MedicalEntity>;
}
