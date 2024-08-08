// DO NOT EDIT: This file is generated.
import type { SchemaOrg_HowToItem } from "./SchemaOrg_HowToItem.ts";
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A supply consumed when performing the instructions for how to achieve a result.
 * @see https://schema.org/HowToSupply
 */
export const SCHEMA_ORG_HowToSupply = "https://schema.org/HowToSupply" as const;

/**
 * A supply consumed when performing the instructions for how to achieve a result.
 * @see https://schema.org/HowToSupply
 */
export interface SchemaOrg_HowToSupply extends SchemaOrg_HowToItem {
  /**
   * The estimated cost of the supply or supplies consumed when performing instructions.
   * @see https://schema.org/estimatedCost
   */
  estimatedCost?: Array<SchemaOrg_Text | SchemaOrg_MonetaryAmount>;
}
