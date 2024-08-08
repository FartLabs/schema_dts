// DO NOT EDIT: This file is generated.
import type { SchemaOrg_ContactPoint } from "./SchemaOrg_ContactPoint.ts";
import type { SchemaOrg_Country } from "./SchemaOrg_Country.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * The mailing address.
 * @see https://schema.org/PostalAddress
 */
export const SCHEMA_ORG_PostalAddress =
  "https://schema.org/PostalAddress" as const;

/**
 * The mailing address.
 * @see https://schema.org/PostalAddress
 */
export interface SchemaOrg_PostalAddress extends SchemaOrg_ContactPoint {
  /**
   * The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
   * @see https://schema.org/addressCountry
   */
  addressCountry?: Array<SchemaOrg_Country | SchemaOrg_Text>;
  /**
   * The locality in which the street address is, and which is in the region. For example, Mountain View.
   * @see https://schema.org/addressLocality
   */
  addressLocality?: Array<SchemaOrg_Text>;
  /**
   * The region in which the locality is, and which is in the country. For example, California or another appropriate first-level [Administrative division](https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country).
   * @see https://schema.org/addressRegion
   */
  addressRegion?: Array<SchemaOrg_Text>;
  /**
   * The post office box number for PO box addresses.
   * @see https://schema.org/postOfficeBoxNumber
   */
  postOfficeBoxNumber?: Array<SchemaOrg_Text>;
  /**
   * The postal code. For example, 94043.
   * @see https://schema.org/postalCode
   */
  postalCode?: Array<SchemaOrg_Text>;
  /**
   * The street address. For example, 1600 Amphitheatre Pkwy.
   * @see https://schema.org/streetAddress
   */
  streetAddress?: Array<SchemaOrg_Text>;
}
