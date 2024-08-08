// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Country } from "./SchemaOrg_Country.ts";
import type { SchemaOrg_PostalCodeRangeSpecification } from "./SchemaOrg_PostalCodeRangeSpecification.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A DefinedRegion is a geographic area defined by potentially arbitrary (rather than political, administrative or natural geographical) criteria. Properties are provided for defining a region by reference to sets of postal codes.
 *
 * Examples: a delivery destination when shopping. Region where regional pricing is configured.
 *
 * Requirement 1:
 * Country: US
 * States: "NY", "CA"
 *
 * Requirement 2:
 * Country: US
 * PostalCode Set: { [94000-94585], [97000, 97999], [13000, 13599]}
 * { [12345, 12345], [78945, 78945], }
 * Region = state, canton, prefecture, autonomous community...
 * @see https://schema.org/DefinedRegion
 */
export const SCHEMA_ORG_DefinedRegion = "https://schema.org/DefinedRegion" as const;

/**
 * A DefinedRegion is a geographic area defined by potentially arbitrary (rather than political, administrative or natural geographical) criteria. Properties are provided for defining a region by reference to sets of postal codes.
 *
 * Examples: a delivery destination when shopping. Region where regional pricing is configured.
 *
 * Requirement 1:
 * Country: US
 * States: "NY", "CA"
 *
 * Requirement 2:
 * Country: US
 * PostalCode Set: { [94000-94585], [97000, 97999], [13000, 13599]}
 * { [12345, 12345], [78945, 78945], }
 * Region = state, canton, prefecture, autonomous community...
 * @see https://schema.org/DefinedRegion
 */
export interface SchemaOrg_DefinedRegion extends SchemaOrg_StructuredValue {
    /**
     * The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
     * @see https://schema.org/addressCountry
     */
    addressCountry?: Array<SchemaOrg_Country | SchemaOrg_Text>;
    /**
     * The region in which the locality is, and which is in the country. For example, California or another appropriate first-level [Administrative division](https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country).
     * @see https://schema.org/addressRegion
     */
    addressRegion?: Array<SchemaOrg_Text>;
    /**
     * The postal code. For example, 94043.
     * @see https://schema.org/postalCode
     */
    postalCode?: Array<SchemaOrg_Text>;
    /**
     * A defined range of postal codes indicated by a common textual prefix. Used for non-numeric systems such as UK.
     * @see https://schema.org/postalCodePrefix
     */
    postalCodePrefix?: Array<SchemaOrg_Text>;
    /**
     * A defined range of postal codes.
     * @see https://schema.org/postalCodeRange
     */
    postalCodeRange?: Array<SchemaOrg_PostalCodeRangeSpecification>;
}
