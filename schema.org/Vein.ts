// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassVessel } from "./Vessel.ts";

/** A type of blood vessel that specifically carries blood to the heart. */
export interface ClassVein extends ClassVessel {
  /** The vasculature that the vein drains into. */
  drainsTo: Array<{ "@id": string }>;
  /** The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ. */
  regionDrained: Array<{ "@id": string }>;
  /** The anatomical or organ system that the vein flows into; a larger structure that the vein connects to. */
  tributary: Array<{ "@id": string }>;
}
