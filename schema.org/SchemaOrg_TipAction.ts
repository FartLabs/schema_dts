// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "./SchemaOrg_Audience.ts";
import type { SchemaOrg_ContactPoint } from "./SchemaOrg_ContactPoint.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_TradeAction } from "./SchemaOrg_TradeAction.ts";

/**
 * The act of giving money voluntarily to a beneficiary in recognition of services rendered.
 * @see https://schema.org/TipAction
 */
export const SCHEMA_ORG_TipAction = "https://schema.org/TipAction" as const;

/**
 * The act of giving money voluntarily to a beneficiary in recognition of services rendered.
 * @see https://schema.org/TipAction
 */
export interface SchemaOrg_TipAction extends SchemaOrg_TradeAction {
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
