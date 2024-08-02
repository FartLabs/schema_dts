// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassContactPoint } from "./ContactPoint.ts";

/** The mailing address. */
export interface ClassPostalAddress extends ClassContactPoint {
  /** The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1). */
  addressCountry: Array<string | { "@id": string }>;
  /** The locality in which the street address is, and which is in the region. For example, Mountain View. */
  addressLocality: Array<string>;
  /** The region in which the locality is, and which is in the country. For example, California or another appropriate first-level [Administrative division](https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country). */
  addressRegion: Array<string>;
  /** The post office box number for PO box addresses. */
  postOfficeBoxNumber: Array<string>;
  /** The postal code. For example, 94043. */
  postalCode: Array<string>;
  /** The street address. For example, 1600 Amphitheatre Pkwy. */
  streetAddress: Array<string>;
}
