// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_MenuItem } from "labs/SchemaOrg_MenuItem.ts";
import type { SchemaOrg_MenuSection } from "labs/SchemaOrg_MenuSection.ts";

/**
 * A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider.
 * @see https://schema.org/MenuSection
 */
export const SCHEMA_ORG_MenuSection = "https://schema.org/MenuSection" as const;

/**
 * A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider.
 * @see https://schema.org/MenuSection
 */
export interface SchemaOrg_MenuSection extends SchemaOrg_CreativeWork {
    /**
     * A food or drink item contained in a menu or menu section.
     * @see https://schema.org/hasMenuItem
     */
    hasMenuItem: Array<SchemaOrg_MenuItem>;
    /**
     * A subgrouping of the menu (by dishes, course, serving time period, etc.).
     * @see https://schema.org/hasMenuSection
     */
    hasMenuSection: Array<SchemaOrg_MenuSection>;
}
