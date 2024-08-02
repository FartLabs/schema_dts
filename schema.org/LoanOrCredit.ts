// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassFinancialProduct } from "./FinancialProduct.ts";

/** A financial product for the loaning of an amount of money, or line of credit, under agreed terms and charges. */
export interface ClassLoanOrCredit extends ClassFinancialProduct {
  /** The amount of money. */
  amount: Array<number | { "@id": string }>;
  /** The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR". */
  currency: Array<string>;
  /** The period of time after any due date that the borrower has to fulfil its obligations before a default (failure to pay) is deemed to have occurred. */
  gracePeriod: Array<{ "@id": string }>;
  /** A form of paying back money previously borrowed from a lender. Repayment usually takes the form of periodic payments that normally include part principal plus interest in each payment. */
  loanRepaymentForm: Array<{ "@id": string }>;
  /** The duration of the loan or credit agreement. */
  loanTerm: Array<{ "@id": string }>;
  /** The type of a loan or credit. */
  loanType: Array<string | { "@id": string }>;
  /** The only way you get the money back in the event of default is the security. Recourse is where you still have the opportunity to go back to the borrower for the rest of the money. */
  recourseLoan: Array<boolean>;
  /** Whether the terms for payment of interest can be renegotiated during the life of the loan. */
  renegotiableLoan: Array<boolean>;
  /** Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.) */
  requiredCollateral: Array<string | { "@id": string }>;
}
