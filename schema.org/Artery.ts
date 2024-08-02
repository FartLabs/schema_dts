// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassVessel } from "./Vessel.ts";

/** A type of blood vessel that specifically carries blood away from the heart. */
export interface ClassArtery extends ClassVessel {
  /** The branches that comprise the arterial structure. */
  arterialBranch: Array<{ "@id": string }>;
  /** The area to which the artery supplies blood. */
  supplyTo: Array<{ "@id": string }>;
}
