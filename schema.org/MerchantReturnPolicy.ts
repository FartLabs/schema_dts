// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A MerchantReturnPolicy provides information about product return policies associated with an [[Organization]], [[Product]], or [[Offer]]. */
export interface ClassMerchantReturnPolicy extends ClassIntangible {
  /**
   * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   */
  additionalProperty: Array<{ "@id": string }>;
  /** A country where a particular merchant return policy applies to, for example the two-letter ISO 3166-1 alpha-2 country code. */
  applicableCountry: Array<string | { "@id": string }>;
  /** The type of return fees if the product is returned due to customer remorse. */
  customerRemorseReturnFees: Array<{ "@id": string }>;
  /** The method (from an enumeration) by which the customer obtains a return shipping label for a product returned due to customer remorse. */
  customerRemorseReturnLabelSource: Array<{ "@id": string }>;
  /** The amount of shipping costs if a product is returned due to customer remorse. Applicable when property [[customerRemorseReturnFees]] equals [[ReturnShippingFees]]. */
  customerRemorseReturnShippingFeesAmount: Array<{ "@id": string }>;
  /** Are in-store returns offered? (For more advanced return methods use the [[returnMethod]] property.) */
  inStoreReturnsOffered: Array<boolean>;
  /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns. */
  itemCondition: Array<{ "@id": string }>;
  /** The type of return fees for returns of defect products. */
  itemDefectReturnFees: Array<{ "@id": string }>;
  /** The method (from an enumeration) by which the customer obtains a return shipping label for a defect product. */
  itemDefectReturnLabelSource: Array<{ "@id": string }>;
  /** Amount of shipping costs for defect product returns. Applicable when property [[itemDefectReturnFees]] equals [[ReturnShippingFees]]. */
  itemDefectReturnShippingFeesAmount: Array<{ "@id": string }>;
  /** Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the [[returnPolicyCategory]] property is specified as [[MerchantReturnFiniteReturnWindow]]. */
  merchantReturnDays: Array<string | { "@id": string }>;
  /** Specifies a Web page or service by URL, for product returns. */
  merchantReturnLink: Array<{ "@id": string }>;
  /** A refund type, from an enumerated list. */
  refundType: Array<{ "@id": string }>;
  /** Use [[MonetaryAmount]] to specify a fixed restocking fee for product returns, or use [[Number]] to specify a percentage of the product price paid by the customer. */
  restockingFee: Array<number | { "@id": string }>;
  /** The type of return fees for purchased products (for any return reason). */
  returnFees: Array<{ "@id": string }>;
  /** The method (from an enumeration) by which the customer obtains a return shipping label for a product returned for any reason. */
  returnLabelSource: Array<{ "@id": string }>;
  /** The type of return method offered, specified from an enumeration. */
  returnMethod: Array<{ "@id": string }>;
  /** Specifies an applicable return policy (from an enumeration). */
  returnPolicyCategory: Array<{ "@id": string }>;
  /** The country where the product has to be sent to for returns, for example "Ireland" using the [[name]] property of [[Country]]. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1). Note that this can be different from the country where the product was originally shipped from or sent to. */
  returnPolicyCountry: Array<string | { "@id": string }>;
  /** Seasonal override of a return policy. */
  returnPolicySeasonalOverride: Array<{ "@id": string }>;
  /** Amount of shipping costs for product returns (for any reason). Applicable when property [[returnFees]] equals [[ReturnShippingFees]]. */
  returnShippingFeesAmount: Array<{ "@id": string }>;
}
