// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Distance } from "./SchemaOrg_Distance.ts";
import type { SchemaOrg_MoveAction } from "./SchemaOrg_MoveAction.ts";

/**
 * The act of traveling from a fromLocation to a destination by a specified mode of transport, optionally with participants.
 * @see https://schema.org/TravelAction
 */
export const SCHEMA_ORG_TravelAction = "https://schema.org/TravelAction" as const;

/**
 * The act of traveling from a fromLocation to a destination by a specified mode of transport, optionally with participants.
 * @see https://schema.org/TravelAction
 */
export interface SchemaOrg_TravelAction extends SchemaOrg_MoveAction {
    /**
     * The distance travelled, e.g. exercising or travelling.
     * @see https://schema.org/distance
     */
    distance?: Array<SchemaOrg_Distance>;
}
