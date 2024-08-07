// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Country } from "labs/SchemaOrg_Country.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_PostalAddress } from "labs/SchemaOrg_PostalAddress.ts";
import type { SchemaOrg_StructuredValue } from "labs/SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * The geographic coordinates of a place or event.
 * @see https://schema.org/GeoCoordinates
 */
export const SCHEMA_ORG_GeoCoordinates = "https://schema.org/GeoCoordinates" as const;

/**
 * The geographic coordinates of a place or event.
 * @see https://schema.org/GeoCoordinates
 */
export interface SchemaOrg_GeoCoordinates extends SchemaOrg_StructuredValue {
    /**
     * Physical address of the item.
     * @see https://schema.org/address
     */
    address: Array<SchemaOrg_PostalAddress | SchemaOrg_Text>;
    /**
     * The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
     * @see https://schema.org/addressCountry
     */
    addressCountry: Array<SchemaOrg_Country | SchemaOrg_Text>;
    /**
     * The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). Values may be of the form 'NUMBER UNIT\_OF\_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.
     * @see https://schema.org/elevation
     */
    elevation: Array<SchemaOrg_Text | SchemaOrg_Number>;
    /**
     * The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
     * @see https://schema.org/latitude
     */
    latitude: Array<SchemaOrg_Text | SchemaOrg_Number>;
    /**
     * The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
     * @see https://schema.org/longitude
     */
    longitude: Array<SchemaOrg_Text | SchemaOrg_Number>;
    /**
     * The postal code. For example, 94043.
     * @see https://schema.org/postalCode
     */
    postalCode: Array<SchemaOrg_Text>;
}
