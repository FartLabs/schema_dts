// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** A structured value providing information about when a certain organization or person owned a certain product. */
export interface ClassOwnershipInfo extends ClassStructuredValue {
  /** The organization or person from which the product was acquired. */
  acquiredFrom: Array<{ "@id": string }>;
  /** The date and time of obtaining the product. */
  ownedFrom: Array<string>;
  /** The date and time of giving up ownership on the product. */
  ownedThrough: Array<string>;
  /** The product that this structured value is referring to. */
  typeOfGood: Array<{ "@id": string }>;
}
