// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_PriceSpecification } from "labs/SchemaOrg_PriceSpecification.ts";
import type { SchemaOrg_ProgramMembership } from "labs/SchemaOrg_ProgramMembership.ts";
import type { SchemaOrg_ReservationStatusType } from "labs/SchemaOrg_ReservationStatusType.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "labs/SchemaOrg_Thing.ts";
import type { SchemaOrg_Ticket } from "labs/SchemaOrg_Ticket.ts";

/**
 * Describes a reservation for travel, dining or an event. Some reservations require tickets. \n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use [[Offer]].
 * @see https://schema.org/Reservation
 */
export const SCHEMA_ORG_Reservation = "https://schema.org/Reservation" as const;

/**
 * Describes a reservation for travel, dining or an event. Some reservations require tickets. \n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use [[Offer]].
 * @see https://schema.org/Reservation
 */
export interface SchemaOrg_Reservation extends SchemaOrg_Intangible {
    /**
     * 'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent.
     * @see https://schema.org/bookingAgent
     */
    bookingAgent: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The date and time the reservation was booked.
     * @see https://schema.org/bookingTime
     */
    bookingTime: Array<SchemaOrg_DateTime>;
    /**
     * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
     * @see https://schema.org/broker
     */
    broker: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The date and time the reservation was modified.
     * @see https://schema.org/modifiedTime
     */
    modifiedTime: Array<SchemaOrg_DateTime>;
    /**
     * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
     * @see https://schema.org/priceCurrency
     */
    priceCurrency: Array<SchemaOrg_Text>;
    /**
     * Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation.
     * @see https://schema.org/programMembershipUsed
     */
    programMembershipUsed: Array<SchemaOrg_ProgramMembership>;
    /**
     * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     * @see https://schema.org/provider
     */
    provider: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The thing -- flight, event, restaurant, etc. being reserved.
     * @see https://schema.org/reservationFor
     */
    reservationFor: Array<SchemaOrg_Thing>;
    /**
     * A unique identifier for the reservation.
     * @see https://schema.org/reservationId
     */
    reservationId: Array<SchemaOrg_Text>;
    /**
     * The current status of the reservation.
     * @see https://schema.org/reservationStatus
     */
    reservationStatus: Array<SchemaOrg_ReservationStatusType>;
    /**
     * A ticket associated with the reservation.
     * @see https://schema.org/reservedTicket
     */
    reservedTicket: Array<SchemaOrg_Ticket>;
    /**
     * The total price for the reservation or ticket, including applicable taxes, shipping, etc.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     * @see https://schema.org/totalPrice
     */
    totalPrice: Array<SchemaOrg_Text | SchemaOrg_Number | SchemaOrg_PriceSpecification>;
    /**
     * The person or organization the reservation or ticket is for.
     * @see https://schema.org/underName
     */
    underName: Array<SchemaOrg_Organization | SchemaOrg_Person>;
}
