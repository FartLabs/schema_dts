// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AdministrativeArea } from "./SchemaOrg_AdministrativeArea.ts";
import type { SchemaOrg_AdultOrientedEnumeration } from "./SchemaOrg_AdultOrientedEnumeration.ts";
import type { SchemaOrg_AggregateOffer } from "./SchemaOrg_AggregateOffer.ts";
import type { SchemaOrg_AggregateRating } from "./SchemaOrg_AggregateRating.ts";
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_BusinessEntityType } from "./SchemaOrg_BusinessEntityType.ts";
import type { SchemaOrg_BusinessFunction } from "./SchemaOrg_BusinessFunction.ts";
import type { SchemaOrg_CategoryCode } from "./SchemaOrg_CategoryCode.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_DeliveryMethod } from "./SchemaOrg_DeliveryMethod.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_Event } from "./SchemaOrg_Event.ts";
import type { SchemaOrg_GeoShape } from "./SchemaOrg_GeoShape.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_ItemAvailability } from "./SchemaOrg_ItemAvailability.ts";
import type { SchemaOrg_LoanOrCredit } from "./SchemaOrg_LoanOrCredit.ts";
import type { SchemaOrg_MenuItem } from "./SchemaOrg_MenuItem.ts";
import type { SchemaOrg_MerchantReturnPolicy } from "./SchemaOrg_MerchantReturnPolicy.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_Offer } from "./SchemaOrg_Offer.ts";
import type { SchemaOrg_OfferItemCondition } from "./SchemaOrg_OfferItemCondition.ts";
import type { SchemaOrg_OfferShippingDetails } from "./SchemaOrg_OfferShippingDetails.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_PaymentMethod } from "./SchemaOrg_PaymentMethod.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_PhysicalActivityCategory } from "./SchemaOrg_PhysicalActivityCategory.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_PriceSpecification } from "./SchemaOrg_PriceSpecification.ts";
import type { SchemaOrg_Product } from "./SchemaOrg_Product.ts";
import type { SchemaOrg_PropertyValue } from "./SchemaOrg_PropertyValue.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Review } from "./SchemaOrg_Review.ts";
import type { SchemaOrg_Service } from "./SchemaOrg_Service.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";
import type { SchemaOrg_Time } from "./SchemaOrg_Time.ts";
import type { SchemaOrg_Trip } from "./SchemaOrg_Trip.ts";
import type { SchemaOrg_TypeAndQuantityNode } from "./SchemaOrg_TypeAndQuantityNode.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";
import type { SchemaOrg_WarrantyPromise } from "./SchemaOrg_WarrantyPromise.ts";

/**
 * An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.\n\nNote: As the [[businessFunction]] property, which identifies the form of offer (e.g. sell, lease, repair, dispose), defaults to http://purl.org/goodrelations/v1#Sell; an Offer without a defined businessFunction value can be assumed to be an offer to sell.\n\nFor [GTIN](http://www.gs1.org/barcodes/technical/idkeys/gtin)-related fields, see [Check Digit calculator](http://www.gs1.org/barcodes/support/check_digit_calculator) and [validation guide](http://www.gs1us.org/resources/standards/gtin-validation-guide) from [GS1](http://www.gs1.org/).
 * @see https://schema.org/Offer
 */
export const SCHEMA_ORG_Offer = "https://schema.org/Offer" as const;

/**
 * An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.\n\nNote: As the [[businessFunction]] property, which identifies the form of offer (e.g. sell, lease, repair, dispose), defaults to http://purl.org/goodrelations/v1#Sell; an Offer without a defined businessFunction value can be assumed to be an offer to sell.\n\nFor [GTIN](http://www.gs1.org/barcodes/technical/idkeys/gtin)-related fields, see [Check Digit calculator](http://www.gs1.org/barcodes/support/check_digit_calculator) and [validation guide](http://www.gs1us.org/resources/standards/gtin-validation-guide) from [GS1](http://www.gs1.org/).
 * @see https://schema.org/Offer
 */
export interface SchemaOrg_Offer extends SchemaOrg_Intangible {
  /**
   * The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.
   * @see https://schema.org/acceptedPaymentMethod
   */
  acceptedPaymentMethod?: Array<
    SchemaOrg_PaymentMethod | SchemaOrg_LoanOrCredit
  >;
  /**
   * An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).
   * @see https://schema.org/addOn
   */
  addOn?: Array<SchemaOrg_Offer>;
  /**
   * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   * @see https://schema.org/additionalProperty
   */
  additionalProperty?: Array<SchemaOrg_PropertyValue>;
  /**
   * The amount of time that is required between accepting the offer and the actual usage of the resource or service.
   * @see https://schema.org/advanceBookingRequirement
   */
  advanceBookingRequirement?: Array<SchemaOrg_QuantitativeValue>;
  /**
   * The overall rating, based on a collection of reviews or ratings, of the item.
   * @see https://schema.org/aggregateRating
   */
  aggregateRating?: Array<SchemaOrg_AggregateRating>;
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
   * An Amazon Standard Identification Number (ASIN) is a 10-character alphanumeric unique identifier assigned by Amazon.com and its partners for product identification within the Amazon organization (summary from [Wikipedia](https://en.wikipedia.org/wiki/Amazon_Standard_Identification_Number)'s article).
   *
   * Note also that this is a definition for how to include ASINs in Schema.org data, and not a definition of ASINs in general - see documentation from Amazon for authoritative details.
   * ASINs are most commonly encoded as text strings, but the [asin] property supports URL/URI as potential values too.
   * @see https://schema.org/asin
   */
  asin?: Array<SchemaOrg_URL | SchemaOrg_Text>;
  /**
   * The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.
   * @see https://schema.org/availability
   */
  availability?: Array<SchemaOrg_ItemAvailability>;
  /**
   * The end of the availability of the product or service included in the offer.
   * @see https://schema.org/availabilityEnds
   */
  availabilityEnds?: Array<
    SchemaOrg_DateTime | SchemaOrg_Time | SchemaOrg_Date
  >;
  /**
   * The beginning of the availability of the product or service included in the offer.
   * @see https://schema.org/availabilityStarts
   */
  availabilityStarts?: Array<
    SchemaOrg_Date | SchemaOrg_DateTime | SchemaOrg_Time
  >;
  /**
   * The place(s) from which the offer can be obtained (e.g. store locations).
   * @see https://schema.org/availableAtOrFrom
   */
  availableAtOrFrom?: Array<SchemaOrg_Place>;
  /**
   * The delivery method(s) available for this offer.
   * @see https://schema.org/availableDeliveryMethod
   */
  availableDeliveryMethod?: Array<SchemaOrg_DeliveryMethod>;
  /**
   * The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
   * @see https://schema.org/businessFunction
   */
  businessFunction?: Array<SchemaOrg_BusinessFunction>;
  /**
   * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
   * @see https://schema.org/category
   */
  category?: Array<
    | SchemaOrg_URL
    | SchemaOrg_Thing
    | SchemaOrg_PhysicalActivityCategory
    | SchemaOrg_CategoryCode
    | SchemaOrg_Text
  >;
  /**
   * A URL template (RFC 6570) for a checkout page for an offer. This approach allows merchants to specify a URL for online checkout of the offered product, by interpolating parameters such as the logged in user ID, product ID, quantity, discount code etc. Parameter naming and standardization are not specified here.
   * @see https://schema.org/checkoutPageURLTemplate
   */
  checkoutPageURLTemplate?: Array<SchemaOrg_Text>;
  /**
   * The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.
   * @see https://schema.org/deliveryLeadTime
   */
  deliveryLeadTime?: Array<SchemaOrg_QuantitativeValue>;
  /**
   * The type(s) of customers for which the given offer is valid.
   * @see https://schema.org/eligibleCustomerType
   */
  eligibleCustomerType?: Array<SchemaOrg_BusinessEntityType>;
  /**
   * The duration for which the given offer is valid.
   * @see https://schema.org/eligibleDuration
   */
  eligibleDuration?: Array<SchemaOrg_QuantitativeValue>;
  /**
   * The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
   * @see https://schema.org/eligibleQuantity
   */
  eligibleQuantity?: Array<SchemaOrg_QuantitativeValue>;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
   * @see https://schema.org/eligibleRegion
   */
  eligibleRegion?: Array<SchemaOrg_GeoShape | SchemaOrg_Text | SchemaOrg_Place>;
  /**
   * The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
   * @see https://schema.org/eligibleTransactionVolume
   */
  eligibleTransactionVolume?: Array<SchemaOrg_PriceSpecification>;
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
  gtin?: Array<SchemaOrg_Text | SchemaOrg_URL>;
  /**
   * The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   * @see https://schema.org/gtin12
   */
  gtin12?: Array<SchemaOrg_Text>;
  /**
   * The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   * @see https://schema.org/gtin13
   */
  gtin13?: Array<SchemaOrg_Text>;
  /**
   * The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   * @see https://schema.org/gtin14
   */
  gtin14?: Array<SchemaOrg_Text>;
  /**
   * The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   * @see https://schema.org/gtin8
   */
  gtin8?: Array<SchemaOrg_Text>;
  /**
   * Used to tag an item to be intended or suitable for consumption or use by adults only.
   * @see https://schema.org/hasAdultConsideration
   */
  hasAdultConsideration?: Array<SchemaOrg_AdultOrientedEnumeration>;
  /**
   * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProduct]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>)  should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
   * @see https://schema.org/hasGS1DigitalLink
   */
  hasGS1DigitalLink?: Array<SchemaOrg_URL>;
  /**
   * A measurement of an item, For example, the inseam of pants, the wheel size of a bicycle, the gauge of a screw, or the carbon footprint measured for certification by an authority. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
   * @see https://schema.org/hasMeasurement
   */
  hasMeasurement?: Array<SchemaOrg_QuantitativeValue>;
  /**
   * Specifies a MerchantReturnPolicy that may be applicable.
   * @see https://schema.org/hasMerchantReturnPolicy
   */
  hasMerchantReturnPolicy?: Array<SchemaOrg_MerchantReturnPolicy>;
  /**
   * This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].
   * @see https://schema.org/includesObject
   */
  includesObject?: Array<SchemaOrg_TypeAndQuantityNode>;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
   * @see https://schema.org/ineligibleRegion
   */
  ineligibleRegion?: Array<
    SchemaOrg_GeoShape | SchemaOrg_Text | SchemaOrg_Place
  >;
  /**
   * The current approximate inventory level for the item or items.
   * @see https://schema.org/inventoryLevel
   */
  inventoryLevel?: Array<SchemaOrg_QuantitativeValue>;
  /**
   * Indicates whether this content is family friendly.
   * @see https://schema.org/isFamilyFriendly
   */
  isFamilyFriendly?: Array<SchemaOrg_Boolean>;
  /**
   * A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns.
   * @see https://schema.org/itemCondition
   */
  itemCondition?: Array<SchemaOrg_OfferItemCondition>;
  /**
   * An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   * @see https://schema.org/itemOffered
   */
  itemOffered?: Array<
    | SchemaOrg_MenuItem
    | SchemaOrg_Product
    | SchemaOrg_Event
    | SchemaOrg_Service
    | SchemaOrg_Trip
    | SchemaOrg_AggregateOffer
    | SchemaOrg_CreativeWork
  >;
  /**
   * Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.
   * @see https://schema.org/leaseLength
   */
  leaseLength?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Duration>;
  /**
   * The [[mobileUrl]] property is provided for specific situations in which data consumers need to determine whether one of several provided URLs is a dedicated 'mobile site'.
   *
   * To discourage over-use, and reflecting intial usecases, the property is expected only on [[Product]] and [[Offer]], rather than [[Thing]]. The general trend in web technology is towards [responsive design](https://en.wikipedia.org/wiki/Responsive_web_design) in which content can be flexibly adapted to a wide range of browsing environments. Pages and sites referenced with the long-established [[url]] property should ideally also be usable on a wide variety of devices, including mobile phones. In most cases, it would be pointless and counter productive to attempt to update all [[url]] markup to use [[mobileUrl]] for more mobile-oriented pages. The property is intended for the case when items (primarily [[Product]] and [[Offer]]) have extra URLs hosted on an additional "mobile site" alongside the main one. It should not be taken as an endorsement of this publication style.
   * @see https://schema.org/mobileUrl
   */
  mobileUrl?: Array<SchemaOrg_Text>;
  /**
   * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
   * @see https://schema.org/mpn
   */
  mpn?: Array<SchemaOrg_Text>;
  /**
   * A pointer to the organization or person making the offer.
   * @see https://schema.org/offeredBy
   */
  offeredBy?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.\n\nUsage guidelines:\n\n* Use the [[priceCurrency]] property (with standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR") instead of including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '$' in the value.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.
   * @see https://schema.org/price
   */
  price?: Array<SchemaOrg_Text | SchemaOrg_Number>;
  /**
   * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
   * @see https://schema.org/priceCurrency
   */
  priceCurrency?: Array<SchemaOrg_Text>;
  /**
   * One or more detailed price specifications, indicating the unit price and delivery or payment charges.
   * @see https://schema.org/priceSpecification
   */
  priceSpecification?: Array<SchemaOrg_PriceSpecification>;
  /**
   * The date after which the price is no longer available.
   * @see https://schema.org/priceValidUntil
   */
  priceValidUntil?: Array<SchemaOrg_Date>;
  /**
   * A review of the item.
   * @see https://schema.org/review
   */
  review?: Array<SchemaOrg_Review>;
  /**
   * Review of the item.
   * @see https://schema.org/reviews
   */
  reviews?: Array<SchemaOrg_Review>;
  /**
   * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
   * @see https://schema.org/seller
   */
  seller?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
   * @see https://schema.org/serialNumber
   */
  serialNumber?: Array<SchemaOrg_Text>;
  /**
   * Indicates information about the shipping policies and options associated with an [[Offer]].
   * @see https://schema.org/shippingDetails
   */
  shippingDetails?: Array<SchemaOrg_OfferShippingDetails>;
  /**
   * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
   * @see https://schema.org/sku
   */
  sku?: Array<SchemaOrg_Text>;
  /**
   * The date when the item becomes valid.
   * @see https://schema.org/validFrom
   */
  validFrom?: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
  /**
   * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
   * @see https://schema.org/validThrough
   */
  validThrough?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
  /**
   * The warranty promise(s) included in the offer.
   * @see https://schema.org/warranty
   */
  warranty?: Array<SchemaOrg_WarrantyPromise>;
}
