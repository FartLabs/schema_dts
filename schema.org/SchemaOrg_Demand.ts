// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "labs/SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_AggregateOffer } from "labs/SchemaOrg_AggregateOffer.ts";
import type { SchemaOrg_BusinessEntityType } from "labs/SchemaOrg_BusinessEntityType.ts";
import type { SchemaOrg_BusinessFunction } from "labs/SchemaOrg_BusinessFunction.ts";
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_DeliveryMethod } from "labs/SchemaOrg_DeliveryMethod.ts";
import type { SchemaOrg_Event } from "labs/SchemaOrg_Event.ts";
import type { SchemaOrg_GeoShape } from "labs/SchemaOrg_GeoShape.ts";
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_ItemAvailability } from "labs/SchemaOrg_ItemAvailability.ts";
import type { SchemaOrg_LoanOrCredit } from "labs/SchemaOrg_LoanOrCredit.ts";
import type { SchemaOrg_MenuItem } from "labs/SchemaOrg_MenuItem.ts";
import type { SchemaOrg_OfferItemCondition } from "labs/SchemaOrg_OfferItemCondition.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_PaymentMethod } from "labs/SchemaOrg_PaymentMethod.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_Place } from "labs/SchemaOrg_Place.ts";
import type { SchemaOrg_PriceSpecification } from "labs/SchemaOrg_PriceSpecification.ts";
import type { SchemaOrg_Product } from "labs/SchemaOrg_Product.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Service } from "labs/SchemaOrg_Service.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_Time } from "labs/SchemaOrg_Time.ts";
import type { SchemaOrg_Trip } from "labs/SchemaOrg_Trip.ts";
import type { SchemaOrg_TypeAndQuantityNode } from "labs/SchemaOrg_TypeAndQuantityNode.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";
import type { SchemaOrg_WarrantyPromise } from "labs/SchemaOrg_WarrantyPromise.ts";

/**
 * A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.
 * @see https://schema.org/Demand
 */
export const SCHEMA_ORG_Demand = "https://schema.org/Demand" as const;

/**
 * A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.
 * @see https://schema.org/Demand
 */
export interface SchemaOrg_Demand extends SchemaOrg_Intangible {
    /**
     * The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.
     * @see https://schema.org/acceptedPaymentMethod
     */
    acceptedPaymentMethod: Array<SchemaOrg_PaymentMethod | SchemaOrg_LoanOrCredit>;
    /**
     * The amount of time that is required between accepting the offer and the actual usage of the resource or service.
     * @see https://schema.org/advanceBookingRequirement
     */
    advanceBookingRequirement: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The geographic area where a service or offered item is provided.
     * @see https://schema.org/areaServed
     */
    areaServed: Array<SchemaOrg_Place | SchemaOrg_AdministrativeArea | SchemaOrg_GeoShape | SchemaOrg_Text>;
    /**
     * An Amazon Standard Identification Number (ASIN) is a 10-character alphanumeric unique identifier assigned by Amazon.com and its partners for product identification within the Amazon organization (summary from [Wikipedia](https://en.wikipedia.org/wiki/Amazon_Standard_Identification_Number)'s article).
     *
     * Note also that this is a definition for how to include ASINs in Schema.org data, and not a definition of ASINs in general - see documentation from Amazon for authoritative details.
     * ASINs are most commonly encoded as text strings, but the [asin] property supports URL/URI as potential values too.
     * @see https://schema.org/asin
     */
    asin: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.
     * @see https://schema.org/availability
     */
    availability: Array<SchemaOrg_ItemAvailability>;
    /**
     * The end of the availability of the product or service included in the offer.
     * @see https://schema.org/availabilityEnds
     */
    availabilityEnds: Array<SchemaOrg_DateTime | SchemaOrg_Time | SchemaOrg_Date>;
    /**
     * The beginning of the availability of the product or service included in the offer.
     * @see https://schema.org/availabilityStarts
     */
    availabilityStarts: Array<SchemaOrg_Date | SchemaOrg_DateTime | SchemaOrg_Time>;
    /**
     * The place(s) from which the offer can be obtained (e.g. store locations).
     * @see https://schema.org/availableAtOrFrom
     */
    availableAtOrFrom: Array<SchemaOrg_Place>;
    /**
     * The delivery method(s) available for this offer.
     * @see https://schema.org/availableDeliveryMethod
     */
    availableDeliveryMethod: Array<SchemaOrg_DeliveryMethod>;
    /**
     * The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
     * @see https://schema.org/businessFunction
     */
    businessFunction: Array<SchemaOrg_BusinessFunction>;
    /**
     * The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.
     * @see https://schema.org/deliveryLeadTime
     */
    deliveryLeadTime: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The type(s) of customers for which the given offer is valid.
     * @see https://schema.org/eligibleCustomerType
     */
    eligibleCustomerType: Array<SchemaOrg_BusinessEntityType>;
    /**
     * The duration for which the given offer is valid.
     * @see https://schema.org/eligibleDuration
     */
    eligibleDuration: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
     * @see https://schema.org/eligibleQuantity
     */
    eligibleQuantity: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
     * @see https://schema.org/eligibleRegion
     */
    eligibleRegion: Array<SchemaOrg_GeoShape | SchemaOrg_Text | SchemaOrg_Place>;
    /**
     * The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
     * @see https://schema.org/eligibleTransactionVolume
     */
    eligibleTransactionVolume: Array<SchemaOrg_PriceSpecification>;
    /**
     * A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes.
     *
     * A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties.
     *
     * The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) expresses GTINs as URLs (URIs, IRIs, etc.).
     * Digital Links should be populated into the [[hasGS1DigitalLink]] attribute.
     *
     * Note also that this is a definition for how to include GTINs in Schema.org data, and not a definition of GTINs in general - see the GS1 documentation for authoritative details.
     * @see https://schema.org/gtin
     */
    gtin: Array<SchemaOrg_Text | SchemaOrg_URL>;
    /**
     * The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
     * @see https://schema.org/gtin12
     */
    gtin12: Array<SchemaOrg_Text>;
    /**
     * The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
     * @see https://schema.org/gtin13
     */
    gtin13: Array<SchemaOrg_Text>;
    /**
     * The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
     * @see https://schema.org/gtin14
     */
    gtin14: Array<SchemaOrg_Text>;
    /**
     * The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
     * @see https://schema.org/gtin8
     */
    gtin8: Array<SchemaOrg_Text>;
    /**
     * This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].
     * @see https://schema.org/includesObject
     */
    includesObject: Array<SchemaOrg_TypeAndQuantityNode>;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
     * @see https://schema.org/ineligibleRegion
     */
    ineligibleRegion: Array<SchemaOrg_GeoShape | SchemaOrg_Text | SchemaOrg_Place>;
    /**
     * The current approximate inventory level for the item or items.
     * @see https://schema.org/inventoryLevel
     */
    inventoryLevel: Array<SchemaOrg_QuantitativeValue>;
    /**
     * A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns.
     * @see https://schema.org/itemCondition
     */
    itemCondition: Array<SchemaOrg_OfferItemCondition>;
    /**
     * An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
     * @see https://schema.org/itemOffered
     */
    itemOffered: Array<SchemaOrg_MenuItem | SchemaOrg_Product | SchemaOrg_Event | SchemaOrg_Service | SchemaOrg_Trip | SchemaOrg_AggregateOffer | SchemaOrg_CreativeWork>;
    /**
     * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
     * @see https://schema.org/mpn
     */
    mpn: Array<SchemaOrg_Text>;
    /**
     * One or more detailed price specifications, indicating the unit price and delivery or payment charges.
     * @see https://schema.org/priceSpecification
     */
    priceSpecification: Array<SchemaOrg_PriceSpecification>;
    /**
     * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
     * @see https://schema.org/seller
     */
    seller: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
     * @see https://schema.org/serialNumber
     */
    serialNumber: Array<SchemaOrg_Text>;
    /**
     * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
     * @see https://schema.org/sku
     */
    sku: Array<SchemaOrg_Text>;
    /**
     * The date when the item becomes valid.
     * @see https://schema.org/validFrom
     */
    validFrom: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
    /**
     * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     * @see https://schema.org/validThrough
     */
    validThrough: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * The warranty promise(s) included in the offer.
     * @see https://schema.org/warranty
     */
    warranty: Array<SchemaOrg_WarrantyPromise>;
}
