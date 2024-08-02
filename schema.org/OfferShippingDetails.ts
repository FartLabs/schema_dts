// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/**
 * OfferShippingDetails represents information about shipping destinations.
 *
 * Multiple of these entities can be used to represent different shipping rates for different destinations:
 *
 * One entity for Alaska/Hawaii. A different one for continental US. A different one for all France.
 *
 * Multiple of these entities can be used to represent different shipping costs and delivery times.
 *
 * Two entities that are identical but differ in rate and time:
 *
 * E.g. Cheaper and slower: $5 in 5-7 days
 * or Fast and expensive: $15 in 1-2 days.
 */
export interface ClassOfferShippingDetails extends ClassStructuredValue {
  /** The total delay between the receipt of the order and the goods reaching the final customer. */
  deliveryTime: Array<{ "@id": string }>;
  /** The depth of the item. */
  depth: Array<{ "@id": string }>;
  /** Indicates when shipping to a particular [[shippingDestination]] is not available. */
  doesNotShip: Array<boolean>;
  /** The height of the item. */
  height: Array<{ "@id": string }>;
  /** indicates (possibly multiple) shipping destinations. These can be defined in several ways, e.g. postalCode ranges. */
  shippingDestination: Array<{ "@id": string }>;
  /** Label to match an [[OfferShippingDetails]] with a [[ShippingRateSettings]] (within the context of a [[shippingSettingsLink]] cross-reference). */
  shippingLabel: Array<string>;
  /** Indicates the origin of a shipment, i.e. where it should be coming from. */
  shippingOrigin: Array<{ "@id": string }>;
  /** The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the [[MonetaryAmount]]) are most appropriate. */
  shippingRate: Array<{ "@id": string }>;
  /** Link to a page containing [[ShippingRateSettings]] and [[DeliveryTimeSettings]] details. */
  shippingSettingsLink: Array<{ "@id": string }>;
  /** Label to match an [[OfferShippingDetails]] with a [[DeliveryTimeSettings]] (within the context of a [[shippingSettingsLink]] cross-reference). */
  transitTimeLabel: Array<string>;
  /** The weight of the product or person. */
  weight: Array<{ "@id": string }>;
  /** The width of the item. */
  width: Array<{ "@id": string }>;
}
