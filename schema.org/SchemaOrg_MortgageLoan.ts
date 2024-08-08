// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_LoanOrCredit } from "./SchemaOrg_LoanOrCredit.ts";
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";

/**
 * A loan in which property or real estate is used as collateral. (A loan securitized against some real estate.)
 * @see https://schema.org/MortgageLoan
 */
export const SCHEMA_ORG_MortgageLoan =
  "https://schema.org/MortgageLoan" as const;

/**
 * A loan in which property or real estate is used as collateral. (A loan securitized against some real estate.)
 * @see https://schema.org/MortgageLoan
 */
export interface SchemaOrg_MortgageLoan extends SchemaOrg_LoanOrCredit {
  /**
   * Whether borrower is a resident of the jurisdiction where the property is located.
   * @see https://schema.org/domiciledMortgage
   */
  domiciledMortgage?: Array<SchemaOrg_Boolean>;
  /**
   * Amount of mortgage mandate that can be converted into a proper mortgage at a later stage.
   * @see https://schema.org/loanMortgageMandateAmount
   */
  loanMortgageMandateAmount?: Array<SchemaOrg_MonetaryAmount>;
}
