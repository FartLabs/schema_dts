// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AnatomicalStructure } from "./SchemaOrg_AnatomicalStructure.ts";
import type { SchemaOrg_AnatomicalSystem } from "./SchemaOrg_AnatomicalSystem.ts";
import type { SchemaOrg_Vessel } from "./SchemaOrg_Vessel.ts";

/**
 * A type of blood vessel that specifically carries lymph fluid unidirectionally toward the heart.
 * @see https://schema.org/LymphaticVessel
 */
export const SCHEMA_ORG_LymphaticVessel =
  "https://schema.org/LymphaticVessel" as const;

/**
 * A type of blood vessel that specifically carries lymph fluid unidirectionally toward the heart.
 * @see https://schema.org/LymphaticVessel
 */
export interface SchemaOrg_LymphaticVessel extends SchemaOrg_Vessel {
  /**
   * The vasculature the lymphatic structure originates, or afferents, from.
   * @see https://schema.org/originatesFrom
   */
  originatesFrom?: Array<SchemaOrg_Vessel>;
  /**
   * The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ.
   * @see https://schema.org/regionDrained
   */
  regionDrained?: Array<
    SchemaOrg_AnatomicalStructure | SchemaOrg_AnatomicalSystem
  >;
  /**
   * The vasculature the lymphatic structure runs, or efferents, to.
   * @see https://schema.org/runsTo
   */
  runsTo?: Array<SchemaOrg_Vessel>;
}
