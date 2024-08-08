// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Demand } from "./SchemaOrg_Demand.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_ItemList } from "./SchemaOrg_ItemList.ts";
import type { SchemaOrg_Offer } from "./SchemaOrg_Offer.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_Time } from "./SchemaOrg_Time.ts";
import type { SchemaOrg_Trip } from "./SchemaOrg_Trip.ts";

/**
 * A trip or journey. An itinerary of visits to one or more places.
 * @see https://schema.org/Trip
 */
export const SCHEMA_ORG_Trip = "https://schema.org/Trip" as const;

/**
 * A trip or journey. An itinerary of visits to one or more places.
 * @see https://schema.org/Trip
 */
export interface SchemaOrg_Trip extends SchemaOrg_Intangible {
    /**
     * The expected arrival time.
     * @see https://schema.org/arrivalTime
     */
    arrivalTime?: Array<SchemaOrg_DateTime | SchemaOrg_Time>;
    /**
     * The expected departure time.
     * @see https://schema.org/departureTime
     */
    departureTime?: Array<SchemaOrg_DateTime | SchemaOrg_Time>;
    /**
     * Destination(s) ( [[Place]] ) that make up a trip. For a trip where destination order is important use [[ItemList]] to specify that order (see examples).
     * @see https://schema.org/itinerary
     */
    itinerary?: Array<SchemaOrg_Place | SchemaOrg_ItemList>;
    /**
     * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
     * @see https://schema.org/offers
     */
    offers?: Array<SchemaOrg_Demand | SchemaOrg_Offer>;
    /**
     * Identifies that this [[Trip]] is a subTrip of another Trip.  For example Day 1, Day 2, etc. of a multi-day trip.
     * @see https://schema.org/partOfTrip
     */
    partOfTrip?: Array<SchemaOrg_Trip>;
    /**
     * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     * @see https://schema.org/provider
     */
    provider?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * Identifies a [[Trip]] that is a subTrip of this Trip.  For example Day 1, Day 2, etc. of a multi-day trip.
     * @see https://schema.org/subTrip
     */
    subTrip?: Array<SchemaOrg_Trip>;
    /**
     * The location of origin of the trip, prior to any destination(s).
     * @see https://schema.org/tripOrigin
     */
    tripOrigin?: Array<SchemaOrg_Place>;
}
