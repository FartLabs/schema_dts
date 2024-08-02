// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply. */
export interface ClassDemand extends ClassIntangible {
  /** The payment method(s) that are accepted in general by an organization, or for some specific demand or offer. */
  acceptedPaymentMethod: Array<{ "@id": string }>;
  /** The amount of time that is required between accepting the offer and the actual usage of the resource or service. */
  advanceBookingRequirement: Array<{ "@id": string }>;
  /** The geographic area where a service or offered item is provided. */
  areaServed: Array<string | { "@id": string }>;
  /**
   * An Amazon Standard Identification Number (ASIN) is a 10-character alphanumeric unique identifier assigned by Amazon.com and its partners for product identification within the Amazon organization (summary from [Wikipedia](https://en.wikipedia.org/wiki/Amazon_Standard_Identification_Number)'s article).
   *
   * Note also that this is a definition for how to include ASINs in Schema.org data, and not a definition of ASINs in general - see documentation from Amazon for authoritative details.
   * ASINs are most commonly encoded as text strings, but the [asin] property supports URL/URI as potential values too.
   */
  asin: Array<string | { "@id": string }>;
  /** The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc. */
  availability: Array<{ "@id": string }>;
  /** The end of the availability of the product or service included in the offer. */
  availabilityEnds: Array<string>;
  /** The beginning of the availability of the product or service included in the offer. */
  availabilityStarts: Array<string>;
  /** The place(s) from which the offer can be obtained (e.g. store locations). */
  availableAtOrFrom: Array<{ "@id": string }>;
  /** The delivery method(s) available for this offer. */
  availableDeliveryMethod: Array<{ "@id": string }>;
  /** The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell. */
  businessFunction: Array<{ "@id": string }>;
  /** The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup. */
  deliveryLeadTime: Array<{ "@id": string }>;
  /** The type(s) of customers for which the given offer is valid. */
  eligibleCustomerType: Array<{ "@id": string }>;
  /** The duration for which the given offer is valid. */
  eligibleDuration: Array<{ "@id": string }>;
  /** The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity. */
  eligibleQuantity: Array<{ "@id": string }>;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
   */
  eligibleRegion: Array<string | { "@id": string }>;
  /** The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount. */
  eligibleTransactionVolume: Array<{ "@id": string }>;
  /**
   * A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes.
   *
   * A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties.
   *
   * The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) expresses GTINs as URLs (URIs, IRIs, etc.).
   * Digital Links should be populated into the [[hasGS1DigitalLink]] attribute.
   *
   * Note also that this is a definition for how to include GTINs in Schema.org data, and not a definition of GTINs in general - see the GS1 documentation for authoritative details.
   */
  gtin: Array<string | { "@id": string }>;
  /** The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. */
  gtin12: Array<string>;
  /** The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. */
  gtin13: Array<string>;
  /** The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. */
  gtin14: Array<string>;
  /** The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. */
  gtin8: Array<string>;
  /** This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]]. */
  includesObject: Array<{ "@id": string }>;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
   */
  ineligibleRegion: Array<string | { "@id": string }>;
  /** The current approximate inventory level for the item or items. */
  inventoryLevel: Array<{ "@id": string }>;
  /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns. */
  itemCondition: Array<{ "@id": string }>;
  /** An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
  itemOffered: Array<{ "@id": string }>;
  /** The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers. */
  mpn: Array<string>;
  /** One or more detailed price specifications, indicating the unit price and delivery or payment charges. */
  priceSpecification: Array<{ "@id": string }>;
  /** An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider. */
  seller: Array<{ "@id": string }>;
  /** The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer. */
  serialNumber: Array<string>;
  /** The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. */
  sku: Array<string>;
  /** The date when the item becomes valid. */
  validFrom: Array<string>;
  /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
  validThrough: Array<string>;
  /** The warranty promise(s) included in the offer. */
  warranty: Array<{ "@id": string }>;
}
