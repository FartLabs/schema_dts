// DO NOT EDIT: This file is generated.
import type { SchemaOrg_FinancialProduct } from "./SchemaOrg_FinancialProduct.ts";
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest.
 * @see https://schema.org/BankAccount
 */
export const SCHEMA_ORG_BankAccount = "https://schema.org/BankAccount" as const;

/**
 * A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest.
 * @see https://schema.org/BankAccount
 */
export interface SchemaOrg_BankAccount extends SchemaOrg_FinancialProduct {
  /**
   * A minimum amount that has to be paid in every month.
   * @see https://schema.org/accountMinimumInflow
   */
  accountMinimumInflow?: Array<SchemaOrg_MonetaryAmount>;
  /**
   * An overdraft is an extension of credit from a lending institution when an account reaches zero. An overdraft allows the individual to continue withdrawing money even if the account has no funds in it. Basically the bank allows people to borrow a set amount of money.
   * @see https://schema.org/accountOverdraftLimit
   */
  accountOverdraftLimit?: Array<SchemaOrg_MonetaryAmount>;
  /**
   * The type of a bank account.
   * @see https://schema.org/bankAccountType
   */
  bankAccountType?: Array<SchemaOrg_Text | SchemaOrg_URL>;
}
