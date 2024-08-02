// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassPropertyValue } from "./PropertyValue.ts";

/** Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality. */
export interface ClassLocationFeatureSpecification extends ClassPropertyValue {
  /** The hours during which this service or contact is available. */
  hoursAvailable: Array<{ "@id": string }>;
  /** The date when the item becomes valid. */
  validFrom: Array<string>;
  /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
  validThrough: Array<string>;
}
