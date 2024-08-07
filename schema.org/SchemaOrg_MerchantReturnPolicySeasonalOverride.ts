// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_Integer } from "labs/SchemaOrg_Integer.ts";
import type { SchemaOrg_MerchantReturnEnumeration } from "labs/SchemaOrg_MerchantReturnEnumeration.ts";
import type { SchemaOrg_MonetaryAmount } from "labs/SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_RefundTypeEnumeration } from "labs/SchemaOrg_RefundTypeEnumeration.ts";
import type { SchemaOrg_ReturnFeesEnumeration } from "labs/SchemaOrg_ReturnFeesEnumeration.ts";
import type { SchemaOrg_ReturnMethodEnumeration } from "labs/SchemaOrg_ReturnMethodEnumeration.ts";

/**
 * A seasonal override of a return policy, for example used for holidays.
 * @see https://schema.org/MerchantReturnPolicySeasonalOverride
 */
export const SCHEMA_ORG_MerchantReturnPolicySeasonalOverride = "https://schema.org/MerchantReturnPolicySeasonalOverride" as const;

/**
 * A seasonal override of a return policy, for example used for holidays.
 * @see https://schema.org/MerchantReturnPolicySeasonalOverride
 */
export interface SchemaOrg_MerchantReturnPolicySeasonalOverride extends SchemaOrg_Intangible {
    /**
     * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * @see https://schema.org/endDate
     */
    endDate: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the [[returnPolicyCategory]] property is specified as [[MerchantReturnFiniteReturnWindow]].
     * @see https://schema.org/merchantReturnDays
     */
    merchantReturnDays: Array<SchemaOrg_DateTime | SchemaOrg_Date | SchemaOrg_Integer>;
    /**
     * A refund type, from an enumerated list.
     * @see https://schema.org/refundType
     */
    refundType: Array<SchemaOrg_RefundTypeEnumeration>;
    /**
     * Use [[MonetaryAmount]] to specify a fixed restocking fee for product returns, or use [[Number]] to specify a percentage of the product price paid by the customer.
     * @see https://schema.org/restockingFee
     */
    restockingFee: Array<SchemaOrg_MonetaryAmount | SchemaOrg_Number>;
    /**
     * The type of return fees for purchased products (for any return reason).
     * @see https://schema.org/returnFees
     */
    returnFees: Array<SchemaOrg_ReturnFeesEnumeration>;
    /**
     * The type of return method offered, specified from an enumeration.
     * @see https://schema.org/returnMethod
     */
    returnMethod: Array<SchemaOrg_ReturnMethodEnumeration>;
    /**
     * Specifies an applicable return policy (from an enumeration).
     * @see https://schema.org/returnPolicyCategory
     */
    returnPolicyCategory: Array<SchemaOrg_MerchantReturnEnumeration>;
    /**
     * Amount of shipping costs for product returns (for any reason). Applicable when property [[returnFees]] equals [[ReturnShippingFees]].
     * @see https://schema.org/returnShippingFeesAmount
     */
    returnShippingFeesAmount: Array<SchemaOrg_MonetaryAmount>;
    /**
     * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     * @see https://schema.org/startDate
     */
    startDate: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
}
