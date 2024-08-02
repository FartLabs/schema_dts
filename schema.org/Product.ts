// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassThing } from "./Thing.ts";

/** Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online. */
export interface ClassProduct extends ClassThing {
  /**
   * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   */
  additionalProperty: Array<{ "@id": string }>;
  /** The overall rating, based on a collection of reviews or ratings, of the item. */
  aggregateRating: Array<{ "@id": string }>;
  /**
   * An Amazon Standard Identification Number (ASIN) is a 10-character alphanumeric unique identifier assigned by Amazon.com and its partners for product identification within the Amazon organization (summary from [Wikipedia](https://en.wikipedia.org/wiki/Amazon_Standard_Identification_Number)'s article).
   *
   * Note also that this is a definition for how to include ASINs in Schema.org data, and not a definition of ASINs in general - see documentation from Amazon for authoritative details.
   * ASINs are most commonly encoded as text strings, but the [asin] property supports URL/URI as potential values too.
   */
  asin: Array<string | { "@id": string }>;
  /** An intended audience, i.e. a group for whom something was created. */
  audience: Array<{ "@id": string }>;
  /** An award won by or for this item. */
  award: Array<string>;
  /** Awards won by or for this item. */
  awards: Array<string>;
  /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. */
  brand: Array<{ "@id": string }>;
  /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
  category: Array<string | { "@id": string }>;
  /** The color of the product. */
  color: Array<string>;
  /** A color swatch image, visualizing the color of a [[Product]]. Should match the textual description specified in the [[color]] property. This can be a URL or a fully described ImageObject. */
  colorSwatch: Array<{ "@id": string }>;
  /** The place where the product was assembled. */
  countryOfAssembly: Array<string>;
  /** The place where the item (typically [[Product]]) was last processed and tested before importation. */
  countryOfLastProcessing: Array<string>;
  /**
   * The country of origin of something, including products as well as creative  works such as movie and TV content.
   *
   * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [[CreativeWork]] it is difficult to provide fully general guidance, and properties such as [[contentLocation]] and [[locationCreated]] may be more applicable.
   *
   * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
   */
  countryOfOrigin: Array<{ "@id": string }>;
  /** The depth of the item. */
  depth: Array<{ "@id": string }>;
  /** A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]]. */
  funding: Array<{ "@id": string }>;
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
  /** Used to tag an item to be intended or suitable for consumption or use by adults only. */
  hasAdultConsideration: Array<{ "@id": string }>;
  /** Certification information about a product, organization, service, place, or person. */
  hasCertification: Array<{ "@id": string }>;
  /** Defines the energy efficiency Category (also known as "class" or "rating") for a product according to an international energy efficiency standard. */
  hasEnergyConsumptionDetails: Array<{ "@id": string }>;
  /** The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProduct]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>)  should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly. */
  hasGS1DigitalLink: Array<{ "@id": string }>;
  /** A measurement of an item, For example, the inseam of pants, the wheel size of a bicycle, the gauge of a screw, or the carbon footprint measured for certification by an authority. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings. */
  hasMeasurement: Array<{ "@id": string }>;
  /** Specifies a MerchantReturnPolicy that may be applicable. */
  hasMerchantReturnPolicy: Array<{ "@id": string }>;
  /** The height of the item. */
  height: Array<{ "@id": string }>;
  /** Indicates the [[productGroupID]] for a [[ProductGroup]] that this product [[isVariantOf]]. */
  inProductGroupWithID: Array<string>;
  /** A pointer to another product (or multiple products) for which this product is an accessory or spare part. */
  isAccessoryOrSparePartFor: Array<{ "@id": string }>;
  /** A pointer to another product (or multiple products) for which this product is a consumable. */
  isConsumableFor: Array<{ "@id": string }>;
  /** Indicates whether this content is family friendly. */
  isFamilyFriendly: Array<boolean>;
  /** A pointer to another, somehow related product (or multiple products). */
  isRelatedTo: Array<{ "@id": string }>;
  /** A pointer to another, functionally similar product (or multiple products). */
  isSimilarTo: Array<{ "@id": string }>;
  /** Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group. */
  isVariantOf: Array<{ "@id": string }>;
  /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns. */
  itemCondition: Array<{ "@id": string }>;
  /** Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property. */
  keywords: Array<string | { "@id": string }>;
  /** An associated logo. */
  logo: Array<{ "@id": string }>;
  /** The manufacturer of the product. */
  manufacturer: Array<{ "@id": string }>;
  /** A material that something is made from, e.g. leather, wool, cotton, paper. */
  material: Array<string | { "@id": string }>;
  /**
   * The [[mobileUrl]] property is provided for specific situations in which data consumers need to determine whether one of several provided URLs is a dedicated 'mobile site'.
   *
   * To discourage over-use, and reflecting intial usecases, the property is expected only on [[Product]] and [[Offer]], rather than [[Thing]]. The general trend in web technology is towards [responsive design](https://en.wikipedia.org/wiki/Responsive_web_design) in which content can be flexibly adapted to a wide range of browsing environments. Pages and sites referenced with the long-established [[url]] property should ideally also be usable on a wide variety of devices, including mobile phones. In most cases, it would be pointless and counter productive to attempt to update all [[url]] markup to use [[mobileUrl]] for more mobile-oriented pages. The property is intended for the case when items (primarily [[Product]] and [[Offer]]) have extra URLs hosted on an additional "mobile site" alongside the main one. It should not be taken as an endorsement of this publication style.
   */
  mobileUrl: Array<string>;
  /** The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties. */
  model: Array<string | { "@id": string }>;
  /** The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers. */
  mpn: Array<string>;
  /**
   * Provides negative considerations regarding something, most typically in pro/con lists for reviews (alongside [[positiveNotes]]). For symmetry
   *
   * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described. Since product descriptions
   * tend to emphasise positive claims, it may be relatively unusual to find [[negativeNotes]] used in this way. Nevertheless for the sake of symmetry, [[negativeNotes]] can be used on [[Product]].
   *
   * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most negative is at the beginning of the list).
   */
  negativeNotes: Array<string | { "@id": string }>;
  /** Indicates the [NATO stock number](https://en.wikipedia.org/wiki/NATO_Stock_Number) (nsn) of a [[Product]]. */
  nsn: Array<string>;
  /**
   * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   */
  offers: Array<{ "@id": string }>;
  /** A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported. */
  pattern: Array<string | { "@id": string }>;
  /**
   * Provides positive considerations regarding something, for example product highlights or (alongside [[negativeNotes]]) pro/con lists for reviews.
   *
   * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described.
   *
   * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most positive is at the beginning of the list).
   */
  positiveNotes: Array<string | { "@id": string }>;
  /** The product identifier, such as ISBN. For example: ``` meta itemprop="productID" content="isbn:123-456-789" ```. */
  productID: Array<string>;
  /** The date of production of the item, e.g. vehicle. */
  productionDate: Array<string>;
  /** The date the item, e.g. vehicle, was purchased by the current owner. */
  purchaseDate: Array<string>;
  /** The release date of a product or product model. This can be used to distinguish the exact variant of a product. */
  releaseDate: Array<string>;
  /** A review of the item. */
  review: Array<{ "@id": string }>;
  /** Review of the item. */
  reviews: Array<{ "@id": string }>;
  /** A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable. */
  size: Array<string | { "@id": string }>;
  /** The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. */
  sku: Array<string>;
  /** A slogan or motto associated with the item. */
  slogan: Array<string>;
  /** The weight of the product or person. */
  weight: Array<{ "@id": string }>;
  /** The width of the item. */
  width: Array<{ "@id": string }>;
}
