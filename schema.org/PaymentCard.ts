// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassPaymentMethod } from "./PaymentMethod.ts";
import type { ClassFinancialProduct } from "./FinancialProduct.ts";

/** A payment method using a credit, debit, store or other card to associate the payment with an account. */
export interface ClassPaymentCard
  extends ClassPaymentMethod, ClassFinancialProduct {
  /** A cardholder benefit that pays the cardholder a small percentage of their net expenditures. */
  cashBack: Array<boolean | number>;
  /** A secure method for consumers to purchase products or services via debit, credit or smartcards by using RFID or NFC technology. */
  contactlessPayment: Array<boolean>;
  /** A floor limit is the amount of money above which credit card transactions must be authorized. */
  floorLimit: Array<{ "@id": string }>;
  /** The minimum payment is the lowest amount of money that one is required to pay on a credit card statement each month. */
  monthlyMinimumRepaymentAmount: Array<number | { "@id": string }>;
}
