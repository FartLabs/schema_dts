// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalContraindication } from "./SchemaOrg_MedicalContraindication.ts";
import type { SchemaOrg_MedicalEntity } from "./SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_MedicalTherapy } from "./SchemaOrg_MedicalTherapy.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_TherapeuticProcedure } from "./SchemaOrg_TherapeuticProcedure.ts";

/**
 * Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both curative and palliative therapies. Medical therapies are typically processes of care relying upon pharmacotherapy, behavioral therapy, supportive therapy (with fluid or nutrition for example), or detoxification (e.g. hemodialysis) aimed at improving or preventing a health condition.
 * @see https://schema.org/MedicalTherapy
 */
export const SCHEMA_ORG_MedicalTherapy = "https://schema.org/MedicalTherapy" as const;

/**
 * Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both curative and palliative therapies. Medical therapies are typically processes of care relying upon pharmacotherapy, behavioral therapy, supportive therapy (with fluid or nutrition for example), or detoxification (e.g. hemodialysis) aimed at improving or preventing a health condition.
 * @see https://schema.org/MedicalTherapy
 */
export interface SchemaOrg_MedicalTherapy extends SchemaOrg_TherapeuticProcedure {
    /**
     * A contraindication for this therapy.
     * @see https://schema.org/contraindication
     */
    contraindication?: Array<SchemaOrg_Text | SchemaOrg_MedicalContraindication>;
    /**
     * A therapy that duplicates or overlaps this one.
     * @see https://schema.org/duplicateTherapy
     */
    duplicateTherapy?: Array<SchemaOrg_MedicalTherapy>;
    /**
     * A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.
     * @see https://schema.org/seriousAdverseOutcome
     */
    seriousAdverseOutcome?: Array<SchemaOrg_MedicalEntity>;
}
