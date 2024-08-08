// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Service } from "./SchemaOrg_Service.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry.
 * @see https://schema.org/FinancialProduct
 */
export const SCHEMA_ORG_FinancialProduct = "https://schema.org/FinancialProduct" as const;

/**
 * A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry.
 * @see https://schema.org/FinancialProduct
 */
export interface SchemaOrg_FinancialProduct extends SchemaOrg_Service {
    /**
     * The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.
     * @see https://schema.org/annualPercentageRate
     */
    annualPercentageRate?: Array<SchemaOrg_Number | SchemaOrg_QuantitativeValue>;
    /**
     * Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.
     * @see https://schema.org/feesAndCommissionsSpecification
     */
    feesAndCommissionsSpecification?: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate.
     * @see https://schema.org/interestRate
     */
    interestRate?: Array<SchemaOrg_Number | SchemaOrg_QuantitativeValue>;
}
