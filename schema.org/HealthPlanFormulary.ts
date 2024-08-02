// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** For a given health insurance plan, the specification for costs and coverage of prescription drugs. */
export interface ClassHealthPlanFormulary extends ClassIntangible {
  /** The costs to the patient for services under this network or formulary. */
  healthPlanCostSharing: Array<boolean>;
  /** The tier(s) of drugs offered by this formulary or insurance plan. */
  healthPlanDrugTier: Array<string>;
  /** Whether prescriptions can be delivered by mail. */
  offersPrescriptionByMail: Array<boolean>;
}
