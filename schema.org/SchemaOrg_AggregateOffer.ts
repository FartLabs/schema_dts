// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Demand } from "labs/SchemaOrg_Demand.ts";
import type { SchemaOrg_Integer } from "labs/SchemaOrg_Integer.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_Offer } from "labs/SchemaOrg_Offer.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.\n\nNote: AggregateOffers are normally expected to associate multiple offers that all share the same defined [[businessFunction]] value, or default to http://purl.org/goodrelations/v1#Sell if businessFunction is not explicitly defined.
 * @see https://schema.org/AggregateOffer
 */
export const SCHEMA_ORG_AggregateOffer = "https://schema.org/AggregateOffer" as const;

/**
 * When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.\n\nNote: AggregateOffers are normally expected to associate multiple offers that all share the same defined [[businessFunction]] value, or default to http://purl.org/goodrelations/v1#Sell if businessFunction is not explicitly defined.
 * @see https://schema.org/AggregateOffer
 */
export interface SchemaOrg_AggregateOffer extends SchemaOrg_Offer {
    /**
     * The highest price of all offers available.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     * @see https://schema.org/highPrice
     */
    highPrice: Array<SchemaOrg_Text | SchemaOrg_Number>;
    /**
     * The lowest price of all offers available.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     * @see https://schema.org/lowPrice
     */
    lowPrice: Array<SchemaOrg_Text | SchemaOrg_Number>;
    /**
     * The number of offers for the product.
     * @see https://schema.org/offerCount
     */
    offerCount: Array<SchemaOrg_Integer>;
    /**
     * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
     * @see https://schema.org/offers
     */
    offers: Array<SchemaOrg_Demand | SchemaOrg_Offer>;
}
