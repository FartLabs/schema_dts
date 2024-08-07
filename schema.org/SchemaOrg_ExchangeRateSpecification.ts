// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MonetaryAmount } from "labs/SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_StructuredValue } from "labs/SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_UnitPriceSpecification } from "labs/SchemaOrg_UnitPriceSpecification.ts";

/**
 * A structured value representing exchange rate.
 * @see https://schema.org/ExchangeRateSpecification
 */
export const SCHEMA_ORG_ExchangeRateSpecification = "https://schema.org/ExchangeRateSpecification" as const;

/**
 * A structured value representing exchange rate.
 * @see https://schema.org/ExchangeRateSpecification
 */
export interface SchemaOrg_ExchangeRateSpecification extends SchemaOrg_StructuredValue {
    /**
     * The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
     * @see https://schema.org/currency
     */
    currency: Array<SchemaOrg_Text>;
    /**
     * The current price of a currency.
     * @see https://schema.org/currentExchangeRate
     */
    currentExchangeRate: Array<SchemaOrg_UnitPriceSpecification>;
    /**
     * The difference between the price at which a broker or other intermediary buys and sells foreign currency.
     * @see https://schema.org/exchangeRateSpread
     */
    exchangeRateSpread: Array<SchemaOrg_MonetaryAmount | SchemaOrg_Number>;
}
