// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";

/**
 * A structured value representing repayment.
 * @see https://schema.org/RepaymentSpecification
 */
export const SCHEMA_ORG_RepaymentSpecification =
  "https://schema.org/RepaymentSpecification" as const;

/**
 * A structured value representing repayment.
 * @see https://schema.org/RepaymentSpecification
 */
export interface SchemaOrg_RepaymentSpecification
  extends SchemaOrg_StructuredValue {
  /**
   * a type of payment made in cash during the onset of the purchase of an expensive good/service. The payment typically represents only a percentage of the full purchase price.
   * @see https://schema.org/downPayment
   */
  downPayment?: Array<SchemaOrg_MonetaryAmount | SchemaOrg_Number>;
  /**
   * The amount to be paid as a penalty in the event of early payment of the loan.
   * @see https://schema.org/earlyPrepaymentPenalty
   */
  earlyPrepaymentPenalty?: Array<SchemaOrg_MonetaryAmount>;
  /**
   * The amount of money to pay in a single payment.
   * @see https://schema.org/loanPaymentAmount
   */
  loanPaymentAmount?: Array<SchemaOrg_MonetaryAmount>;
  /**
   * Frequency of payments due, i.e. number of months between payments. This is defined as a frequency, i.e. the reciprocal of a period of time.
   * @see https://schema.org/loanPaymentFrequency
   */
  loanPaymentFrequency?: Array<SchemaOrg_Number>;
  /**
   * The number of payments contractually required at origination to repay the loan. For monthly paying loans this is the number of months from the contractual first payment date to the maturity date.
   * @see https://schema.org/numberOfLoanPayments
   */
  numberOfLoanPayments?: Array<SchemaOrg_Number>;
}
