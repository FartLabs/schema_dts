// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_MedicalEntity } from "./SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_MedicalEvidenceLevel } from "./SchemaOrg_MedicalEvidenceLevel.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity.
 * @see https://schema.org/MedicalGuideline
 */
export const SCHEMA_ORG_MedicalGuideline = "https://schema.org/MedicalGuideline" as const;

/**
 * Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity.
 * @see https://schema.org/MedicalGuideline
 */
export interface SchemaOrg_MedicalGuideline extends SchemaOrg_MedicalEntity {
    /**
     * Strength of evidence of the data used to formulate the guideline (enumerated).
     * @see https://schema.org/evidenceLevel
     */
    evidenceLevel?: Array<SchemaOrg_MedicalEvidenceLevel>;
    /**
     * Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc.
     * @see https://schema.org/evidenceOrigin
     */
    evidenceOrigin?: Array<SchemaOrg_Text>;
    /**
     * Date on which this guideline's recommendation was made.
     * @see https://schema.org/guidelineDate
     */
    guidelineDate?: Array<SchemaOrg_Date>;
    /**
     * The medical conditions, treatments, etc. that are the subject of the guideline.
     * @see https://schema.org/guidelineSubject
     */
    guidelineSubject?: Array<SchemaOrg_MedicalEntity>;
}
