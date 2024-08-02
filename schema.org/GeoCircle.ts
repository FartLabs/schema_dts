// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassGeoShape } from "./GeoShape.ts";

/**
 * A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape
 *           it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius.
 *           The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'.
 */
export interface ClassGeoCircle extends ClassGeoShape {
  /** Indicates the GeoCoordinates at the centre of a GeoShape, e.g. GeoCircle. */
  geoMidpoint: Array<{ "@id": string }>;
  /** Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation). */
  geoRadius: Array<number | string | { "@id": string }>;
}
