// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassVessel } from "./Vessel.ts";

/** A type of blood vessel that specifically carries lymph fluid unidirectionally toward the heart. */
export interface ClassLymphaticVessel extends ClassVessel {
  /** The vasculature the lymphatic structure originates, or afferents, from. */
  originatesFrom: Array<{ "@id": string }>;
  /** The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ. */
  regionDrained: Array<{ "@id": string }>;
  /** The vasculature the lymphatic structure runs, or efferents, to. */
  runsTo: Array<{ "@id": string }>;
}
