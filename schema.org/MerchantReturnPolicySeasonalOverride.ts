// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A seasonal override of a return policy, for example used for holidays. */
export interface ClassMerchantReturnPolicySeasonalOverride
  extends ClassIntangible {
  /** The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)). */
  endDate: Array<string>;
  /** Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the [[returnPolicyCategory]] property is specified as [[MerchantReturnFiniteReturnWindow]]. */
  merchantReturnDays: Array<string | { "@id": string }>;
  /** A refund type, from an enumerated list. */
  refundType: Array<{ "@id": string }>;
  /** Use [[MonetaryAmount]] to specify a fixed restocking fee for product returns, or use [[Number]] to specify a percentage of the product price paid by the customer. */
  restockingFee: Array<number | { "@id": string }>;
  /** The type of return fees for purchased products (for any return reason). */
  returnFees: Array<{ "@id": string }>;
  /** The type of return method offered, specified from an enumeration. */
  returnMethod: Array<{ "@id": string }>;
  /** Specifies an applicable return policy (from an enumeration). */
  returnPolicyCategory: Array<{ "@id": string }>;
  /** Amount of shipping costs for product returns (for any reason). Applicable when property [[returnFees]] equals [[ReturnShippingFees]]. */
  returnShippingFeesAmount: Array<{ "@id": string }>;
  /** The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)). */
  startDate: Array<string>;
}
