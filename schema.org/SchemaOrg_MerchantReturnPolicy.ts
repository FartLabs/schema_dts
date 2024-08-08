// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_Country } from "./SchemaOrg_Country.ts";
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_MerchantReturnEnumeration } from "./SchemaOrg_MerchantReturnEnumeration.ts";
import type { SchemaOrg_MerchantReturnPolicySeasonalOverride } from "./SchemaOrg_MerchantReturnPolicySeasonalOverride.ts";
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_OfferItemCondition } from "./SchemaOrg_OfferItemCondition.ts";
import type { SchemaOrg_PropertyValue } from "./SchemaOrg_PropertyValue.ts";
import type { SchemaOrg_RefundTypeEnumeration } from "./SchemaOrg_RefundTypeEnumeration.ts";
import type { SchemaOrg_ReturnFeesEnumeration } from "./SchemaOrg_ReturnFeesEnumeration.ts";
import type { SchemaOrg_ReturnLabelSourceEnumeration } from "./SchemaOrg_ReturnLabelSourceEnumeration.ts";
import type { SchemaOrg_ReturnMethodEnumeration } from "./SchemaOrg_ReturnMethodEnumeration.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A MerchantReturnPolicy provides information about product return policies associated with an [[Organization]], [[Product]], or [[Offer]].
 * @see https://schema.org/MerchantReturnPolicy
 */
export const SCHEMA_ORG_MerchantReturnPolicy =
  "https://schema.org/MerchantReturnPolicy" as const;

/**
 * A MerchantReturnPolicy provides information about product return policies associated with an [[Organization]], [[Product]], or [[Offer]].
 * @see https://schema.org/MerchantReturnPolicy
 */
export interface SchemaOrg_MerchantReturnPolicy extends SchemaOrg_Intangible {
  /**
   * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   * @see https://schema.org/additionalProperty
   */
  additionalProperty?: Array<SchemaOrg_PropertyValue>;
  /**
   * A country where a particular merchant return policy applies to, for example the two-letter ISO 3166-1 alpha-2 country code.
   * @see https://schema.org/applicableCountry
   */
  applicableCountry?: Array<SchemaOrg_Country | SchemaOrg_Text>;
  /**
   * The type of return fees if the product is returned due to customer remorse.
   * @see https://schema.org/customerRemorseReturnFees
   */
  customerRemorseReturnFees?: Array<SchemaOrg_ReturnFeesEnumeration>;
  /**
   * The method (from an enumeration) by which the customer obtains a return shipping label for a product returned due to customer remorse.
   * @see https://schema.org/customerRemorseReturnLabelSource
   */
  customerRemorseReturnLabelSource?: Array<
    SchemaOrg_ReturnLabelSourceEnumeration
  >;
  /**
   * The amount of shipping costs if a product is returned due to customer remorse. Applicable when property [[customerRemorseReturnFees]] equals [[ReturnShippingFees]].
   * @see https://schema.org/customerRemorseReturnShippingFeesAmount
   */
  customerRemorseReturnShippingFeesAmount?: Array<SchemaOrg_MonetaryAmount>;
  /**
   * Are in-store returns offered? (For more advanced return methods use the [[returnMethod]] property.)
   * @see https://schema.org/inStoreReturnsOffered
   */
  inStoreReturnsOffered?: Array<SchemaOrg_Boolean>;
  /**
   * A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns.
   * @see https://schema.org/itemCondition
   */
  itemCondition?: Array<SchemaOrg_OfferItemCondition>;
  /**
   * The type of return fees for returns of defect products.
   * @see https://schema.org/itemDefectReturnFees
   */
  itemDefectReturnFees?: Array<SchemaOrg_ReturnFeesEnumeration>;
  /**
   * The method (from an enumeration) by which the customer obtains a return shipping label for a defect product.
   * @see https://schema.org/itemDefectReturnLabelSource
   */
  itemDefectReturnLabelSource?: Array<SchemaOrg_ReturnLabelSourceEnumeration>;
  /**
   * Amount of shipping costs for defect product returns. Applicable when property [[itemDefectReturnFees]] equals [[ReturnShippingFees]].
   * @see https://schema.org/itemDefectReturnShippingFeesAmount
   */
  itemDefectReturnShippingFeesAmount?: Array<SchemaOrg_MonetaryAmount>;
  /**
   * Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the [[returnPolicyCategory]] property is specified as [[MerchantReturnFiniteReturnWindow]].
   * @see https://schema.org/merchantReturnDays
   */
  merchantReturnDays?: Array<
    SchemaOrg_DateTime | SchemaOrg_Date | SchemaOrg_Integer
  >;
  /**
   * Specifies a Web page or service by URL, for product returns.
   * @see https://schema.org/merchantReturnLink
   */
  merchantReturnLink?: Array<SchemaOrg_URL>;
  /**
   * A refund type, from an enumerated list.
   * @see https://schema.org/refundType
   */
  refundType?: Array<SchemaOrg_RefundTypeEnumeration>;
  /**
   * Use [[MonetaryAmount]] to specify a fixed restocking fee for product returns, or use [[Number]] to specify a percentage of the product price paid by the customer.
   * @see https://schema.org/restockingFee
   */
  restockingFee?: Array<SchemaOrg_MonetaryAmount | SchemaOrg_Number>;
  /**
   * The type of return fees for purchased products (for any return reason).
   * @see https://schema.org/returnFees
   */
  returnFees?: Array<SchemaOrg_ReturnFeesEnumeration>;
  /**
   * The method (from an enumeration) by which the customer obtains a return shipping label for a product returned for any reason.
   * @see https://schema.org/returnLabelSource
   */
  returnLabelSource?: Array<SchemaOrg_ReturnLabelSourceEnumeration>;
  /**
   * The type of return method offered, specified from an enumeration.
   * @see https://schema.org/returnMethod
   */
  returnMethod?: Array<SchemaOrg_ReturnMethodEnumeration>;
  /**
   * Specifies an applicable return policy (from an enumeration).
   * @see https://schema.org/returnPolicyCategory
   */
  returnPolicyCategory?: Array<SchemaOrg_MerchantReturnEnumeration>;
  /**
   * The country where the product has to be sent to for returns, for example "Ireland" using the [[name]] property of [[Country]]. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1). Note that this can be different from the country where the product was originally shipped from or sent to.
   * @see https://schema.org/returnPolicyCountry
   */
  returnPolicyCountry?: Array<SchemaOrg_Country | SchemaOrg_Text>;
  /**
   * Seasonal override of a return policy.
   * @see https://schema.org/returnPolicySeasonalOverride
   */
  returnPolicySeasonalOverride?: Array<
    SchemaOrg_MerchantReturnPolicySeasonalOverride
  >;
  /**
   * Amount of shipping costs for product returns (for any reason). Applicable when property [[returnFees]] equals [[ReturnShippingFees]].
   * @see https://schema.org/returnShippingFeesAmount
   */
  returnShippingFeesAmount?: Array<SchemaOrg_MonetaryAmount>;
}
