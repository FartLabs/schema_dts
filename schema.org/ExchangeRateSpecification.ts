// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** A structured value representing exchange rate. */
export interface ClassExchangeRateSpecification extends ClassStructuredValue {
  /** The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR". */
  currency: Array<string>;
  /** The current price of a currency. */
  currentExchangeRate: Array<{ "@id": string }>;
  /** The difference between the price at which a broker or other intermediary buys and sells foreign currency. */
  exchangeRateSpread: Array<number | { "@id": string }>;
}
