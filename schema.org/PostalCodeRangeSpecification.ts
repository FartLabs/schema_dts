// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** Indicates a range of postal codes, usually defined as the set of valid codes between [[postalCodeBegin]] and [[postalCodeEnd]], inclusively. */
export interface ClassPostalCodeRangeSpecification
  extends ClassStructuredValue {
  /** First postal code in a range (included). */
  postalCodeBegin: Array<string>;
  /** Last postal code in the range (included). Needs to be after [[postalCodeBegin]]. */
  postalCodeEnd: Array<string>;
}
