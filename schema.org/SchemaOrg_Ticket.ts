// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_PriceSpecification } from "labs/SchemaOrg_PriceSpecification.ts";
import type { SchemaOrg_Seat } from "labs/SchemaOrg_Seat.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * Used to describe a ticket to an event, a flight, a bus ride, etc.
 * @see https://schema.org/Ticket
 */
export const SCHEMA_ORG_Ticket = "https://schema.org/Ticket" as const;

/**
 * Used to describe a ticket to an event, a flight, a bus ride, etc.
 * @see https://schema.org/Ticket
 */
export interface SchemaOrg_Ticket extends SchemaOrg_Intangible {
    /**
     * The date the ticket was issued.
     * @see https://schema.org/dateIssued
     */
    dateIssued: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * The organization issuing the item, for example a [[Permit]], [[Ticket]], or [[Certification]].
     * @see https://schema.org/issuedBy
     */
    issuedBy: Array<SchemaOrg_Organization>;
    /**
     * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
     * @see https://schema.org/priceCurrency
     */
    priceCurrency: Array<SchemaOrg_Text>;
    /**
     * The unique identifier for the ticket.
     * @see https://schema.org/ticketNumber
     */
    ticketNumber: Array<SchemaOrg_Text>;
    /**
     * Reference to an asset (e.g., Barcode, QR code image or PDF) usable for entrance.
     * @see https://schema.org/ticketToken
     */
    ticketToken: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * The seat associated with the ticket.
     * @see https://schema.org/ticketedSeat
     */
    ticketedSeat: Array<SchemaOrg_Seat>;
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
