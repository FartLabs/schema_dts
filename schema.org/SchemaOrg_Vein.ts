// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AnatomicalStructure } from "./SchemaOrg_AnatomicalStructure.ts";
import type { SchemaOrg_AnatomicalSystem } from "./SchemaOrg_AnatomicalSystem.ts";
import type { SchemaOrg_Vessel } from "./SchemaOrg_Vessel.ts";

/**
 * A type of blood vessel that specifically carries blood to the heart.
 * @see https://schema.org/Vein
 */
export const SCHEMA_ORG_Vein = "https://schema.org/Vein" as const;

/**
 * A type of blood vessel that specifically carries blood to the heart.
 * @see https://schema.org/Vein
 */
export interface SchemaOrg_Vein extends SchemaOrg_Vessel {
  /**
   * The vasculature that the vein drains into.
   * @see https://schema.org/drainsTo
   */
  drainsTo?: Array<SchemaOrg_Vessel>;
  /**
   * The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ.
   * @see https://schema.org/regionDrained
   */
  regionDrained?: Array<
    SchemaOrg_AnatomicalStructure | SchemaOrg_AnatomicalSystem
  >;
  /**
   * The anatomical or organ system that the vein flows into; a larger structure that the vein connects to.
   * @see https://schema.org/tributary
   */
  tributary?: Array<SchemaOrg_AnatomicalStructure>;
}
