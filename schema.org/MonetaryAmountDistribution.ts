// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassQuantitativeValueDistribution } from "./QuantitativeValueDistribution.ts";

/** A statistical distribution of monetary amounts. */
export interface ClassMonetaryAmountDistribution
  extends ClassQuantitativeValueDistribution {
  /** The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR". */
  currency: Array<string>;
}
