// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_FinancialProduct } from "./SchemaOrg_FinancialProduct.ts";
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_PaymentMethod } from "./SchemaOrg_PaymentMethod.ts";

/**
 * A payment method using a credit, debit, store or other card to associate the payment with an account.
 * @see https://schema.org/PaymentCard
 */
export const SCHEMA_ORG_PaymentCard = "https://schema.org/PaymentCard" as const;

/**
 * A payment method using a credit, debit, store or other card to associate the payment with an account.
 * @see https://schema.org/PaymentCard
 */
export interface SchemaOrg_PaymentCard
  extends SchemaOrg_PaymentMethod, SchemaOrg_FinancialProduct {
  /**
   * A cardholder benefit that pays the cardholder a small percentage of their net expenditures.
   * @see https://schema.org/cashBack
   */
  cashBack?: Array<SchemaOrg_Boolean | SchemaOrg_Number>;
  /**
   * A secure method for consumers to purchase products or services via debit, credit or smartcards by using RFID or NFC technology.
   * @see https://schema.org/contactlessPayment
   */
  contactlessPayment?: Array<SchemaOrg_Boolean>;
  /**
   * A floor limit is the amount of money above which credit card transactions must be authorized.
   * @see https://schema.org/floorLimit
   */
  floorLimit?: Array<SchemaOrg_MonetaryAmount>;
  /**
   * The minimum payment is the lowest amount of money that one is required to pay on a credit card statement each month.
   * @see https://schema.org/monthlyMinimumRepaymentAmount
   */
  monthlyMinimumRepaymentAmount?: Array<
    SchemaOrg_MonetaryAmount | SchemaOrg_Number
  >;
}
