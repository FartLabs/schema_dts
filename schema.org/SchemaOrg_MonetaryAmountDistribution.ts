// DO NOT EDIT: This file is generated.
import type { SchemaOrg_QuantitativeValueDistribution } from "./SchemaOrg_QuantitativeValueDistribution.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A statistical distribution of monetary amounts.
 * @see https://schema.org/MonetaryAmountDistribution
 */
export const SCHEMA_ORG_MonetaryAmountDistribution = "https://schema.org/MonetaryAmountDistribution" as const;

/**
 * A statistical distribution of monetary amounts.
 * @see https://schema.org/MonetaryAmountDistribution
 */
export interface SchemaOrg_MonetaryAmountDistribution extends SchemaOrg_QuantitativeValueDistribution {
    /**
     * The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
     * @see https://schema.org/currency
     */
    currency?: Array<SchemaOrg_Text>;
}
