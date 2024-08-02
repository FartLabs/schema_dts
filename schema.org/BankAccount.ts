// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassFinancialProduct } from "./FinancialProduct.ts";

/** A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest. */
export interface ClassBankAccount extends ClassFinancialProduct {
  /** A minimum amount that has to be paid in every month. */
  accountMinimumInflow: Array<{ "@id": string }>;
  /** An overdraft is an extension of credit from a lending institution when an account reaches zero. An overdraft allows the individual to continue withdrawing money even if the account has no funds in it. Basically the bank allows people to borrow a set amount of money. */
  accountOverdraftLimit: Array<{ "@id": string }>;
  /** The type of a bank account. */
  bankAccountType: Array<string | { "@id": string }>;
}
