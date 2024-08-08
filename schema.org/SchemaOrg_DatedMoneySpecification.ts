// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_MonetaryAmount } from "./SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. __Note:__ This type has been superseded by [[MonetaryAmount]], use of that type is recommended.
 * @see https://schema.org/DatedMoneySpecification
 */
export const SCHEMA_ORG_DatedMoneySpecification =
  "https://schema.org/DatedMoneySpecification" as const;

/**
 * A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. __Note:__ This type has been superseded by [[MonetaryAmount]], use of that type is recommended.
 * @see https://schema.org/DatedMoneySpecification
 */
export interface SchemaOrg_DatedMoneySpecification
  extends SchemaOrg_StructuredValue {
  /**
   * The amount of money.
   * @see https://schema.org/amount
   */
  amount?: Array<SchemaOrg_MonetaryAmount | SchemaOrg_Number>;
  /**
   * The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
   * @see https://schema.org/currency
   */
  currency?: Array<SchemaOrg_Text>;
  /**
   * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
   * @see https://schema.org/endDate
   */
  endDate?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
  /**
   * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
   * @see https://schema.org/startDate
   */
  startDate?: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
}
