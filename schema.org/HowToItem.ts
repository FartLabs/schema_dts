// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassListItem } from "./ListItem.ts";

/** An item used as either a tool or supply when performing the instructions for how to achieve a result. */
export interface ClassHowToItem extends ClassListItem {
  /** The required quantity of the item(s). */
  requiredQuantity: Array<number | string | { "@id": string }>;
}
