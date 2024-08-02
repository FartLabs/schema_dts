// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassService } from "./Service.ts";

/** A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry. */
export interface ClassFinancialProduct extends ClassService {
  /** The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction. */
  annualPercentageRate: Array<number | { "@id": string }>;
  /** Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization. */
  feesAndCommissionsSpecification: Array<string | { "@id": string }>;
  /** The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate. */
  interestRate: Array<number | { "@id": string }>;
}
