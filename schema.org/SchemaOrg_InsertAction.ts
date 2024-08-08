// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AddAction } from "./SchemaOrg_AddAction.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";

/**
 * The act of adding at a specific location in an ordered collection.
 * @see https://schema.org/InsertAction
 */
export const SCHEMA_ORG_InsertAction =
  "https://schema.org/InsertAction" as const;

/**
 * The act of adding at a specific location in an ordered collection.
 * @see https://schema.org/InsertAction
 */
export interface SchemaOrg_InsertAction extends SchemaOrg_AddAction {
  /**
   * A sub property of location. The final location of the object or the agent after the action.
   * @see https://schema.org/toLocation
   */
  toLocation?: Array<SchemaOrg_Place>;
}
