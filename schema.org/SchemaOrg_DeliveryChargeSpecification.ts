// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "./SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_DeliveryMethod } from "./SchemaOrg_DeliveryMethod.ts";
import type { SchemaOrg_GeoShape } from "./SchemaOrg_GeoShape.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_PriceSpecification } from "./SchemaOrg_PriceSpecification.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * The price for the delivery of an offer using a particular delivery method.
 * @see https://schema.org/DeliveryChargeSpecification
 */
export const SCHEMA_ORG_DeliveryChargeSpecification =
  "https://schema.org/DeliveryChargeSpecification" as const;

/**
 * The price for the delivery of an offer using a particular delivery method.
 * @see https://schema.org/DeliveryChargeSpecification
 */
export interface SchemaOrg_DeliveryChargeSpecification
  extends SchemaOrg_PriceSpecification {
  /**
   * The delivery method(s) to which the delivery charge or payment charge specification applies.
   * @see https://schema.org/appliesToDeliveryMethod
   */
  appliesToDeliveryMethod?: Array<SchemaOrg_DeliveryMethod>;
  /**
   * The geographic area where a service or offered item is provided.
   * @see https://schema.org/areaServed
   */
  areaServed?: Array<
    | SchemaOrg_Place
    | SchemaOrg_AdministrativeArea
    | SchemaOrg_GeoShape
    | SchemaOrg_Text
  >;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
   * @see https://schema.org/eligibleRegion
   */
  eligibleRegion?: Array<SchemaOrg_GeoShape | SchemaOrg_Text | SchemaOrg_Place>;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
   * @see https://schema.org/ineligibleRegion
   */
  ineligibleRegion?: Array<
    SchemaOrg_GeoShape | SchemaOrg_Text | SchemaOrg_Place
  >;
}
