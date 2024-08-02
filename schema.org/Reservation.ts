// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** Describes a reservation for travel, dining or an event. Some reservations require tickets. \n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use [[Offer]]. */
export interface ClassReservation extends ClassIntangible {
  /** 'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent. */
  bookingAgent: Array<{ "@id": string }>;
  /** The date and time the reservation was booked. */
  bookingTime: Array<string>;
  /** An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. */
  broker: Array<{ "@id": string }>;
  /** The date and time the reservation was modified. */
  modifiedTime: Array<string>;
  /** The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR". */
  priceCurrency: Array<string>;
  /** Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. */
  programMembershipUsed: Array<{ "@id": string }>;
  /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
  provider: Array<{ "@id": string }>;
  /** The thing -- flight, event, restaurant, etc. being reserved. */
  reservationFor: Array<{ "@id": string }>;
  /** A unique identifier for the reservation. */
  reservationId: Array<string>;
  /** The current status of the reservation. */
  reservationStatus: Array<{ "@id": string }>;
  /** A ticket associated with the reservation. */
  reservedTicket: Array<{ "@id": string }>;
  /** The total price for the reservation or ticket, including applicable taxes, shipping, etc.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator. */
  totalPrice: Array<number | string | { "@id": string }>;
  /** The person or organization the reservation or ticket is for. */
  underName: Array<{ "@id": string }>;
}
