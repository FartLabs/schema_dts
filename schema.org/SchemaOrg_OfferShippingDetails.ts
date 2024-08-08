// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_DefinedRegion } from "./SchemaOrg_DefinedRegion.ts";
import type { SchemaOrg_Distance } from "./SchemaOrg_Distance.ts";
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_ShippingDeliveryTime } from "./SchemaOrg_ShippingDeliveryTime.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

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
 * @see https://schema.org/OfferShippingDetails
 */
export const SCHEMA_ORG_OfferShippingDetails = "https://schema.org/OfferShippingDetails" as const;

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
 * @see https://schema.org/OfferShippingDetails
 */
export interface SchemaOrg_OfferShippingDetails extends SchemaOrg_StructuredValue {
    /**
     * The total delay between the receipt of the order and the goods reaching the final customer.
     * @see https://schema.org/deliveryTime
     */
    deliveryTime?: Array<SchemaOrg_ShippingDeliveryTime>;
    /**
     * The depth of the item.
     * @see https://schema.org/depth
     */
    depth?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Distance>;
    /**
     * Indicates when shipping to a particular [[shippingDestination]] is not available.
     * @see https://schema.org/doesNotShip
     */
    doesNotShip?: Array<SchemaOrg_Boolean>;
    /**
     * The height of the item.
     * @see https://schema.org/height
     */
    height?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Distance>;
    /**
     * indicates (possibly multiple) shipping destinations. These can be defined in several ways, e.g. postalCode ranges.
     * @see https://schema.org/shippingDestination
     */
    shippingDestination?: Array<SchemaOrg_DefinedRegion>;
    /**
     * Label to match an [[OfferShippingDetails]] with a [[ShippingRateSettings]] (within the context of a [[shippingSettingsLink]] cross-reference).
     * @see https://schema.org/shippingLabel
     */
    shippingLabel?: Array<SchemaOrg_Text>;
    /**
     * Indicates the origin of a shipment, i.e. where it should be coming from.
     * @see https://schema.org/shippingOrigin
     */
    shippingOrigin?: Array<SchemaOrg_DefinedRegion>;
    /**
     * The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the [[MonetaryAmount]]) are most appropriate.
     * @see https://schema.org/shippingRate
     */
    shippingRate?: Array<SchemaOrg_MonetaryAmount>;
    /**
     * Link to a page containing [[ShippingRateSettings]] and [[DeliveryTimeSettings]] details.
     * @see https://schema.org/shippingSettingsLink
     */
    shippingSettingsLink?: Array<SchemaOrg_URL>;
    /**
     * Label to match an [[OfferShippingDetails]] with a [[DeliveryTimeSettings]] (within the context of a [[shippingSettingsLink]] cross-reference).
     * @see https://schema.org/transitTimeLabel
     */
    transitTimeLabel?: Array<SchemaOrg_Text>;
    /**
     * The weight of the product or person.
     * @see https://schema.org/weight
     */
    weight?: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The width of the item.
     * @see https://schema.org/width
     */
    width?: Array<SchemaOrg_Distance | SchemaOrg_QuantitativeValue>;
}
