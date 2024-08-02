// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A trip or journey. An itinerary of visits to one or more places. */
export interface ClassTrip extends ClassIntangible {
  /** The expected arrival time. */
  arrivalTime: Array<string>;
  /** The expected departure time. */
  departureTime: Array<string>;
  /** Destination(s) ( [[Place]] ) that make up a trip. For a trip where destination order is important use [[ItemList]] to specify that order (see examples). */
  itinerary: Array<{ "@id": string }>;
  /**
   * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   */
  offers: Array<{ "@id": string }>;
  /** Identifies that this [[Trip]] is a subTrip of another Trip.  For example Day 1, Day 2, etc. of a multi-day trip. */
  partOfTrip: Array<{ "@id": string }>;
  /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller. */
  provider: Array<{ "@id": string }>;
  /** Identifies a [[Trip]] that is a subTrip of this Trip.  For example Day 1, Day 2, etc. of a multi-day trip. */
  subTrip: Array<{ "@id": string }>;
  /** The location of origin of the trip, prior to any destination(s). */
  tripOrigin: Array<{ "@id": string }>;
}
