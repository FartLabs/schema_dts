// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Distance } from "labs/SchemaOrg_Distance.ts";
import type { SchemaOrg_GeoCoordinates } from "labs/SchemaOrg_GeoCoordinates.ts";
import type { SchemaOrg_GeoShape } from "labs/SchemaOrg_GeoShape.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape
 *           it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius.
 *           The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'.
 * @see https://schema.org/GeoCircle
 */
export const SCHEMA_ORG_GeoCircle = "https://schema.org/GeoCircle" as const;

/**
 * A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape
 *           it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius.
 *           The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'.
 * @see https://schema.org/GeoCircle
 */
export interface SchemaOrg_GeoCircle extends SchemaOrg_GeoShape {
    /**
     * Indicates the GeoCoordinates at the centre of a GeoShape, e.g. GeoCircle.
     * @see https://schema.org/geoMidpoint
     */
    geoMidpoint: Array<SchemaOrg_GeoCoordinates>;
    /**
     * Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation).
     * @see https://schema.org/geoRadius
     */
    geoRadius: Array<SchemaOrg_Text | SchemaOrg_Number | SchemaOrg_Distance>;
}
