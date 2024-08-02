// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassEnumeration } from "./Enumeration.ts";

/** A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'. */
export interface ClassQualitativeValue extends ClassEnumeration {
  /**
   * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   */
  additionalProperty: Array<{ "@id": string }>;
  /** This ordering relation for qualitative values indicates that the subject is equal to the object. */
  equal: Array<{ "@id": string }>;
  /** This ordering relation for qualitative values indicates that the subject is greater than the object. */
  greater: Array<{ "@id": string }>;
  /** This ordering relation for qualitative values indicates that the subject is greater than or equal to the object. */
  greaterOrEqual: Array<{ "@id": string }>;
  /** This ordering relation for qualitative values indicates that the subject is lesser than the object. */
  lesser: Array<{ "@id": string }>;
  /** This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object. */
  lesserOrEqual: Array<{ "@id": string }>;
  /** This ordering relation for qualitative values indicates that the subject is not equal to the object. */
  nonEqual: Array<{ "@id": string }>;
  /** A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement. */
  valueReference: Array<string | { "@id": string }>;
}
