// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassPriceSpecification } from "./PriceSpecification.ts";

/** The price for the delivery of an offer using a particular delivery method. */
export interface ClassDeliveryChargeSpecification
  extends ClassPriceSpecification {
  /** The delivery method(s) to which the delivery charge or payment charge specification applies. */
  appliesToDeliveryMethod: Array<{ "@id": string }>;
  /** The geographic area where a service or offered item is provided. */
  areaServed: Array<string | { "@id": string }>;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
   */
  eligibleRegion: Array<string | { "@id": string }>;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
   */
  ineligibleRegion: Array<string | { "@id": string }>;
}
