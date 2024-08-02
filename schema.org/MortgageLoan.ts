// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassLoanOrCredit } from "./LoanOrCredit.ts";

/** A loan in which property or real estate is used as collateral. (A loan securitized against some real estate.) */
export interface ClassMortgageLoan extends ClassLoanOrCredit {
  /** Whether borrower is a resident of the jurisdiction where the property is located. */
  domiciledMortgage: Array<boolean>;
  /** Amount of mortgage mandate that can be converted into a proper mortgage at a later stage. */
  loanMortgageMandateAmount: Array<{ "@id": string }>;
}
