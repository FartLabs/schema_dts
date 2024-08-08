// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_MenuItem } from "./SchemaOrg_MenuItem.ts";
import type { SchemaOrg_MenuSection } from "./SchemaOrg_MenuSection.ts";

/**
 * A structured representation of food or drink items available from a FoodEstablishment.
 * @see https://schema.org/Menu
 */
export const SCHEMA_ORG_Menu = "https://schema.org/Menu" as const;

/**
 * A structured representation of food or drink items available from a FoodEstablishment.
 * @see https://schema.org/Menu
 */
export interface SchemaOrg_Menu extends SchemaOrg_CreativeWork {
  /**
   * A food or drink item contained in a menu or menu section.
   * @see https://schema.org/hasMenuItem
   */
  hasMenuItem?: Array<SchemaOrg_MenuItem>;
  /**
   * A subgrouping of the menu (by dishes, course, serving time period, etc.).
   * @see https://schema.org/hasMenuSection
   */
  hasMenuSection?: Array<SchemaOrg_MenuSection>;
}
