// DO NOT EDIT: This file is generated.
import type { SchemaOrg_ListItem } from "./SchemaOrg_ListItem.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * An item used as either a tool or supply when performing the instructions for how to achieve a result.
 * @see https://schema.org/HowToItem
 */
export const SCHEMA_ORG_HowToItem = "https://schema.org/HowToItem" as const;

/**
 * An item used as either a tool or supply when performing the instructions for how to achieve a result.
 * @see https://schema.org/HowToItem
 */
export interface SchemaOrg_HowToItem extends SchemaOrg_ListItem {
  /**
   * The required quantity of the item(s).
   * @see https://schema.org/requiredQuantity
   */
  requiredQuantity?: Array<
    SchemaOrg_Number | SchemaOrg_QuantitativeValue | SchemaOrg_Text
  >;
}
