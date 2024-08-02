// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassFinancialProduct } from "./FinancialProduct.ts";

/** A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return. */
export interface ClassInvestmentOrDeposit extends ClassFinancialProduct {
  /** The amount of money. */
  amount: Array<number | { "@id": string }>;
}
