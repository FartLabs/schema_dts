// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** Used to describe a ticket to an event, a flight, a bus ride, etc. */
export interface ClassTicket extends ClassIntangible {
  /** The date the ticket was issued. */
  dateIssued: Array<string>;
  /** The organization issuing the item, for example a [[Permit]], [[Ticket]], or [[Certification]]. */
  issuedBy: Array<{ "@id": string }>;
  /** The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR". */
  priceCurrency: Array<string>;
  /** The unique identifier for the ticket. */
  ticketNumber: Array<string>;
  /** Reference to an asset (e.g., Barcode, QR code image or PDF) usable for entrance. */
  ticketToken: Array<string | { "@id": string }>;
  /** The seat associated with the ticket. */
  ticketedSeat: Array<{ "@id": string }>;
  /** The total price for the reservation or ticket, including applicable taxes, shipping, etc.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator. */
  totalPrice: Array<number | string | { "@id": string }>;
  /** The person or organization the reservation or ticket is for. */
  underName: Array<{ "@id": string }>;
}
