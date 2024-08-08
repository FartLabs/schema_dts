// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "./SchemaOrg_Audience.ts";
import type { SchemaOrg_ContactPoint } from "./SchemaOrg_ContactPoint.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_TransferAction } from "./SchemaOrg_TransferAction.ts";

/**
 * The act of returning to the origin that which was previously received (concrete objects) or taken (ownership).
 * @see https://schema.org/ReturnAction
 */
export const SCHEMA_ORG_ReturnAction =
  "https://schema.org/ReturnAction" as const;

/**
 * The act of returning to the origin that which was previously received (concrete objects) or taken (ownership).
 * @see https://schema.org/ReturnAction
 */
export interface SchemaOrg_ReturnAction extends SchemaOrg_TransferAction {
  /**
   * A sub property of participant. The participant who is at the receiving end of the action.
   * @see https://schema.org/recipient
   */
  recipient?: Array<
    | SchemaOrg_Audience
    | SchemaOrg_Organization
    | SchemaOrg_Person
    | SchemaOrg_ContactPoint
  >;
}
