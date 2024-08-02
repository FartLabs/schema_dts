// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassMedicalEntity } from "./MedicalEntity.ts";

/** Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity. */
export interface ClassMedicalGuideline extends ClassMedicalEntity {
  /** Strength of evidence of the data used to formulate the guideline (enumerated). */
  evidenceLevel: Array<{ "@id": string }>;
  /** Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc. */
  evidenceOrigin: Array<string>;
  /** Date on which this guideline's recommendation was made. */
  guidelineDate: Array<string>;
  /** The medical conditions, treatments, etc. that are the subject of the guideline. */
  guidelineSubject: Array<{ "@id": string }>;
}
