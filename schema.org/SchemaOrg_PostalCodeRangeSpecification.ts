// DO NOT EDIT: This file is generated.
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * Indicates a range of postal codes, usually defined as the set of valid codes between [[postalCodeBegin]] and [[postalCodeEnd]], inclusively.
 * @see https://schema.org/PostalCodeRangeSpecification
 */
export const SCHEMA_ORG_PostalCodeRangeSpecification =
  "https://schema.org/PostalCodeRangeSpecification" as const;

/**
 * Indicates a range of postal codes, usually defined as the set of valid codes between [[postalCodeBegin]] and [[postalCodeEnd]], inclusively.
 * @see https://schema.org/PostalCodeRangeSpecification
 */
export interface SchemaOrg_PostalCodeRangeSpecification
  extends SchemaOrg_StructuredValue {
  /**
   * First postal code in a range (included).
   * @see https://schema.org/postalCodeBegin
   */
  postalCodeBegin?: Array<SchemaOrg_Text>;
  /**
   * Last postal code in the range (included). Needs to be after [[postalCodeBegin]].
   * @see https://schema.org/postalCodeEnd
   */
  postalCodeEnd?: Array<SchemaOrg_Text>;
}
