// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A US-style health insurance plan, including PPOs, EPOs, and HMOs. */
export interface ClassHealthInsurancePlan extends ClassIntangible {
  /** The URL that goes directly to the summary of benefits and coverage for the specific standard plan or plan variation. */
  benefitsSummaryUrl: Array<{ "@id": string }>;
  /** A contact point for a person or organization. */
  contactPoint: Array<{ "@id": string }>;
  /** TODO. */
  healthPlanDrugOption: Array<string>;
  /** The tier(s) of drugs offered by this formulary or insurance plan. */
  healthPlanDrugTier: Array<string>;
  /** The 14-character, HIOS-generated Plan ID number. (Plan IDs must be unique, even across different markets.) */
  healthPlanId: Array<string>;
  /** The URL that goes directly to the plan brochure for the specific standard plan or plan variation. */
  healthPlanMarketingUrl: Array<{ "@id": string }>;
  /** Formularies covered by this plan. */
  includesHealthPlanFormulary: Array<{ "@id": string }>;
  /** Networks covered by this plan. */
  includesHealthPlanNetwork: Array<{ "@id": string }>;
  /** The standard for interpreting the Plan ID. The preferred is "HIOS". See the Centers for Medicare & Medicaid Services for more details. */
  usesHealthPlanIdStandard: Array<string | { "@id": string }>;
}
