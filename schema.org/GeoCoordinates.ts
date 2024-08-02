// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** The geographic coordinates of a place or event. */
export interface ClassGeoCoordinates extends ClassStructuredValue {
  /** Physical address of the item. */
  address: Array<string | { "@id": string }>;
  /** The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1). */
  addressCountry: Array<string | { "@id": string }>;
  /** The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). Values may be of the form 'NUMBER UNIT\_OF\_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters. */
  elevation: Array<number | string>;
  /** The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). */
  latitude: Array<number | string>;
  /** The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). */
  longitude: Array<number | string>;
  /** The postal code. For example, 94043. */
  postalCode: Array<string>;
}
