// DO NOT EDIT: This file is generated.
import type { SchemaOrg_FinancialProduct } from "./SchemaOrg_FinancialProduct.ts";
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";

/**
 * A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return.
 * @see https://schema.org/InvestmentOrDeposit
 */
export const SCHEMA_ORG_InvestmentOrDeposit =
  "https://schema.org/InvestmentOrDeposit" as const;

/**
 * A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return.
 * @see https://schema.org/InvestmentOrDeposit
 */
export interface SchemaOrg_InvestmentOrDeposit
  extends SchemaOrg_FinancialProduct {
  /**
   * The amount of money.
   * @see https://schema.org/amount
   */
  amount?: Array<SchemaOrg_MonetaryAmount | SchemaOrg_Number>;
}
