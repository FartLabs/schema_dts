// DO NOT EDIT: This file is generated.
import type { SchemaOrg_FloorPlan } from "./SchemaOrg_FloorPlan.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";

/**
 * The place where a person lives.
 * @see https://schema.org/Residence
 */
export const SCHEMA_ORG_Residence = "https://schema.org/Residence" as const;

/**
 * The place where a person lives.
 * @see https://schema.org/Residence
 */
export interface SchemaOrg_Residence extends SchemaOrg_Place {
    /**
     * A floorplan of some [[Accommodation]].
     * @see https://schema.org/accommodationFloorPlan
     */
    accommodationFloorPlan?: Array<SchemaOrg_FloorPlan>;
}
