// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A collection of items, e.g. creative works or products. */
export interface ClassCollection extends ClassCreativeWork {
  /** The number of items in the [[Collection]]. */
  collectionSize: Array<{ "@id": string }>;
}
