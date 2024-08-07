// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "labs/SchemaOrg_Boolean.ts";
import type { SchemaOrg_Duration } from "labs/SchemaOrg_Duration.ts";
import type { SchemaOrg_FinancialProduct } from "labs/SchemaOrg_FinancialProduct.ts";
import type { SchemaOrg_MonetaryAmount } from "labs/SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_RepaymentSpecification } from "labs/SchemaOrg_RepaymentSpecification.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "labs/SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * A financial product for the loaning of an amount of money, or line of credit, under agreed terms and charges.
 * @see https://schema.org/LoanOrCredit
 */
export const SCHEMA_ORG_LoanOrCredit = "https://schema.org/LoanOrCredit" as const;

/**
 * A financial product for the loaning of an amount of money, or line of credit, under agreed terms and charges.
 * @see https://schema.org/LoanOrCredit
 */
export interface SchemaOrg_LoanOrCredit extends SchemaOrg_FinancialProduct {
    /**
     * The amount of money.
     * @see https://schema.org/amount
     */
    amount: Array<SchemaOrg_MonetaryAmount | SchemaOrg_Number>;
    /**
     * The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
     * @see https://schema.org/currency
     */
    currency: Array<SchemaOrg_Text>;
    /**
     * The period of time after any due date that the borrower has to fulfil its obligations before a default (failure to pay) is deemed to have occurred.
     * @see https://schema.org/gracePeriod
     */
    gracePeriod: Array<SchemaOrg_Duration>;
    /**
     * A form of paying back money previously borrowed from a lender. Repayment usually takes the form of periodic payments that normally include part principal plus interest in each payment.
     * @see https://schema.org/loanRepaymentForm
     */
    loanRepaymentForm: Array<SchemaOrg_RepaymentSpecification>;
    /**
     * The duration of the loan or credit agreement.
     * @see https://schema.org/loanTerm
     */
    loanTerm: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The type of a loan or credit.
     * @see https://schema.org/loanType
     */
    loanType: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * The only way you get the money back in the event of default is the security. Recourse is where you still have the opportunity to go back to the borrower for the rest of the money.
     * @see https://schema.org/recourseLoan
     */
    recourseLoan: Array<SchemaOrg_Boolean>;
    /**
     * Whether the terms for payment of interest can be renegotiated during the life of the loan.
     * @see https://schema.org/renegotiableLoan
     */
    renegotiableLoan: Array<SchemaOrg_Boolean>;
    /**
     * Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)
     * @see https://schema.org/requiredCollateral
     */
    requiredCollateral: Array<SchemaOrg_Text | SchemaOrg_Thing>;
}
