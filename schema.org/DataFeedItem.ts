// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A single item within a larger data feed. */
export interface ClassDataFeedItem extends ClassIntangible {
  /** The date on which the CreativeWork was created or the item was added to a DataFeed. */
  dateCreated: Array<string>;
  /** The datetime the item was removed from the DataFeed. */
  dateDeleted: Array<string>;
  /** The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed. */
  dateModified: Array<string>;
  /** An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists'). */
  item: Array<{ "@id": string }>;
}
