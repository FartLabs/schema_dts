// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Country } from "./SchemaOrg_Country.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_PostalAddress } from "./SchemaOrg_PostalAddress.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.
 * @see https://schema.org/GeoShape
 */
export const SCHEMA_ORG_GeoShape = "https://schema.org/GeoShape" as const;

/**
 * The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.
 * @see https://schema.org/GeoShape
 */
export interface SchemaOrg_GeoShape extends SchemaOrg_StructuredValue {
    /**
     * Physical address of the item.
     * @see https://schema.org/address
     */
    address?: Array<SchemaOrg_PostalAddress | SchemaOrg_Text>;
    /**
     * The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
     * @see https://schema.org/addressCountry
     */
    addressCountry?: Array<SchemaOrg_Country | SchemaOrg_Text>;
    /**
     * A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character.
     * @see https://schema.org/box
     */
    box?: Array<SchemaOrg_Text>;
    /**
     * A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.
     * @see https://schema.org/circle
     */
    circle?: Array<SchemaOrg_Text>;
    /**
     * The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). Values may be of the form 'NUMBER UNIT\_OF\_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.
     * @see https://schema.org/elevation
     */
    elevation?: Array<SchemaOrg_Text | SchemaOrg_Number>;
    /**
     * A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.
     * @see https://schema.org/line
     */
    line?: Array<SchemaOrg_Text>;
    /**
     * A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical.
     * @see https://schema.org/polygon
     */
    polygon?: Array<SchemaOrg_Text>;
    /**
     * The postal code. For example, 94043.
     * @see https://schema.org/postalCode
     */
    postalCode?: Array<SchemaOrg_Text>;
}
