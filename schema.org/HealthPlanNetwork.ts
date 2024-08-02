// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A US-style health insurance plan network. */
export interface ClassHealthPlanNetwork extends ClassIntangible {
  /** The costs to the patient for services under this network or formulary. */
  healthPlanCostSharing: Array<boolean>;
  /** Name or unique ID of network. (Networks are often reused across different insurance plans.) */
  healthPlanNetworkId: Array<string>;
  /** The tier(s) for this network. */
  healthPlanNetworkTier: Array<string>;
}
