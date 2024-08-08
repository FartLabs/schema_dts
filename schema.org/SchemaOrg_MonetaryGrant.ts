// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Grant } from "./SchemaOrg_Grant.ts";
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";

/**
 * A monetary grant.
 * @see https://schema.org/MonetaryGrant
 */
export const SCHEMA_ORG_MonetaryGrant =
  "https://schema.org/MonetaryGrant" as const;

/**
 * A monetary grant.
 * @see https://schema.org/MonetaryGrant
 */
export interface SchemaOrg_MonetaryGrant extends SchemaOrg_Grant {
  /**
   * The amount of money.
   * @see https://schema.org/amount
   */
  amount?: Array<SchemaOrg_MonetaryAmount | SchemaOrg_Number>;
  /**
   * A person or organization that supports (sponsors) something through some kind of financial contribution.
   * @see https://schema.org/funder
   */
  funder?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
}
