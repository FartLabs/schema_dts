// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points. */
export interface ClassGeoShape extends ClassStructuredValue {
  /** Physical address of the item. */
  address: Array<string | { "@id": string }>;
  /** The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1). */
  addressCountry: Array<string | { "@id": string }>;
  /** A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character. */
  box: Array<string>;
  /** A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters. */
  circle: Array<string>;
  /** The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). Values may be of the form 'NUMBER UNIT\_OF\_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters. */
  elevation: Array<number | string>;
  /** A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space. */
  line: Array<string>;
  /** A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical. */
  polygon: Array<string>;
  /** The postal code. For example, 94043. */
  postalCode: Array<string>;
}
