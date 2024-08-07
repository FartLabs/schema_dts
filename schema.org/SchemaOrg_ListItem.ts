// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_Integer } from "labs/SchemaOrg_Integer.ts";
import type { SchemaOrg_ListItem } from "labs/SchemaOrg_ListItem.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "labs/SchemaOrg_Thing.ts";

/**
 * An list item, e.g. a step in a checklist or how-to description.
 * @see https://schema.org/ListItem
 */
export const SCHEMA_ORG_ListItem = "https://schema.org/ListItem" as const;

/**
 * An list item, e.g. a step in a checklist or how-to description.
 * @see https://schema.org/ListItem
 */
export interface SchemaOrg_ListItem extends SchemaOrg_Intangible {
    /**
     * An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').
     * @see https://schema.org/item
     */
    item: Array<SchemaOrg_Thing>;
    /**
     * A link to the ListItem that follows the current one.
     * @see https://schema.org/nextItem
     */
    nextItem: Array<SchemaOrg_ListItem>;
    /**
     * The position of an item in a series or sequence of items.
     * @see https://schema.org/position
     */
    position: Array<SchemaOrg_Integer | SchemaOrg_Text>;
    /**
     * A link to the ListItem that precedes the current one.
     * @see https://schema.org/previousItem
     */
    previousItem: Array<SchemaOrg_ListItem>;
}
