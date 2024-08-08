// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Action } from "./SchemaOrg_Action.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";

/**
 * The act of managing by changing/editing the state of the object.
 * @see https://schema.org/UpdateAction
 */
export const SCHEMA_ORG_UpdateAction =
  "https://schema.org/UpdateAction" as const;

/**
 * The act of managing by changing/editing the state of the object.
 * @see https://schema.org/UpdateAction
 */
export interface SchemaOrg_UpdateAction extends SchemaOrg_Action {
  /**
   * A sub property of object. The collection target of the action.
   * @see https://schema.org/collection
   */
  collection?: Array<SchemaOrg_Thing>;
  /**
   * A sub property of object. The collection target of the action.
   * @see https://schema.org/targetCollection
   */
  targetCollection?: Array<SchemaOrg_Thing>;
}
