// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc. It is recommended to use [[PriceSpecification]] Types to describe the price of an Offer, Invoice, etc. */
export interface ClassMonetaryAmount extends ClassStructuredValue {
  /** The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR". */
  currency: Array<string>;
  /** The upper value of some characteristic or property. */
  maxValue: Array<number>;
  /** The lower value of some characteristic or property. */
  minValue: Array<number>;
  /** The date when the item becomes valid. */
  validFrom: Array<string>;
  /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
  validThrough: Array<string>;
  /** The value of a [[QuantitativeValue]] (including [[Observation]]) or property value node.\n\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text', 'Number', 'Boolean', or 'StructuredValue'.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator. */
  value: Array<boolean | number | string | { "@id": string }>;
}
