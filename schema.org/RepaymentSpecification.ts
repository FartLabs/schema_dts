// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** A structured value representing repayment. */
export interface ClassRepaymentSpecification extends ClassStructuredValue {
  /** a type of payment made in cash during the onset of the purchase of an expensive good/service. The payment typically represents only a percentage of the full purchase price. */
  downPayment: Array<number | { "@id": string }>;
  /** The amount to be paid as a penalty in the event of early payment of the loan. */
  earlyPrepaymentPenalty: Array<{ "@id": string }>;
  /** The amount of money to pay in a single payment. */
  loanPaymentAmount: Array<{ "@id": string }>;
  /** Frequency of payments due, i.e. number of months between payments. This is defined as a frequency, i.e. the reciprocal of a period of time. */
  loanPaymentFrequency: Array<number>;
  /** The number of payments contractually required at origination to repay the loan. For monthly paying loans this is the number of months from the contractual first payment date to the maturity date. */
  numberOfLoanPayments: Array<number>;
}
