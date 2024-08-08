// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";

/**
 * A single item within a larger data feed.
 * @see https://schema.org/DataFeedItem
 */
export const SCHEMA_ORG_DataFeedItem =
  "https://schema.org/DataFeedItem" as const;

/**
 * A single item within a larger data feed.
 * @see https://schema.org/DataFeedItem
 */
export interface SchemaOrg_DataFeedItem extends SchemaOrg_Intangible {
  /**
   * The date on which the CreativeWork was created or the item was added to a DataFeed.
   * @see https://schema.org/dateCreated
   */
  dateCreated?: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
  /**
   * The datetime the item was removed from the DataFeed.
   * @see https://schema.org/dateDeleted
   */
  dateDeleted?: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
  /**
   * The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.
   * @see https://schema.org/dateModified
   */
  dateModified?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
  /**
   * An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists').
   * @see https://schema.org/item
   */
  item?: Array<SchemaOrg_Thing>;
}
