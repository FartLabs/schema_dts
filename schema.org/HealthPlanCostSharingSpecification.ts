// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A description of costs to the patient under a given network or formulary. */
export interface ClassHealthPlanCostSharingSpecification
  extends ClassIntangible {
  /** Whether the coinsurance applies before or after deductible, etc. TODO: Is this a closed set? */
  healthPlanCoinsuranceOption: Array<string>;
  /** The rate of coinsurance expressed as a number between 0.0 and 1.0. */
  healthPlanCoinsuranceRate: Array<number>;
  /** The copay amount. */
  healthPlanCopay: Array<{ "@id": string }>;
  /** Whether the copay is before or after deductible, etc. TODO: Is this a closed set? */
  healthPlanCopayOption: Array<string>;
  /** The category or type of pharmacy associated with this cost sharing. */
  healthPlanPharmacyCategory: Array<string>;
}
