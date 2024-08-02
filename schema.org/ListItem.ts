// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** An list item, e.g. a step in a checklist or how-to description. */
export interface ClassListItem extends ClassIntangible {
  /** An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists'). */
  item: Array<{ "@id": string }>;
  /** A link to the ListItem that follows the current one. */
  nextItem: Array<{ "@id": string }>;
  /** The position of an item in a series or sequence of items. */
  position: Array<string | { "@id": string }>;
  /** A link to the ListItem that precedes the current one. */
  previousItem: Array<{ "@id": string }>;
}
