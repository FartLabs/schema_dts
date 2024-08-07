// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_Integer } from "labs/SchemaOrg_Integer.ts";
import type { SchemaOrg_ItemListOrderType } from "labs/SchemaOrg_ItemListOrderType.ts";
import type { SchemaOrg_ListItem } from "labs/SchemaOrg_ListItem.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "labs/SchemaOrg_Thing.ts";

/**
 * A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.
 * @see https://schema.org/ItemList
 */
export const SCHEMA_ORG_ItemList = "https://schema.org/ItemList" as const;

/**
 * A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.
 * @see https://schema.org/ItemList
 */
export interface SchemaOrg_ItemList extends SchemaOrg_Intangible {
    /**
     * For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.\n\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\n\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.
     * @see https://schema.org/itemListElement
     */
    itemListElement: Array<SchemaOrg_Thing | SchemaOrg_Text | SchemaOrg_ListItem>;
    /**
     * Type of ordering (e.g. Ascending, Descending, Unordered).
     * @see https://schema.org/itemListOrder
     */
    itemListOrder: Array<SchemaOrg_ItemListOrderType | SchemaOrg_Text>;
    /**
     * The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.
     * @see https://schema.org/numberOfItems
     */
    numberOfItems: Array<SchemaOrg_Integer>;
}
