// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCollection } from "./Collection.ts";
import type { ClassProduct } from "./Product.ts";

/** A set of products (either [[ProductGroup]]s or specific variants) that are listed together e.g. in an [[Offer]]. */
export interface ClassProductCollection extends ClassCollection, ClassProduct {
  /** This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]]. */
  includesObject: Array<{ "@id": string }>;
}
