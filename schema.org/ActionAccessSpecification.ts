// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A set of requirements that must be fulfilled in order to perform an Action. */
export interface ClassActionAccessSpecification extends ClassIntangible {
  /** The end of the availability of the product or service included in the offer. */
  availabilityEnds: Array<string>;
  /** The beginning of the availability of the product or service included in the offer. */
  availabilityStarts: Array<string>;
  /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
  category: Array<string | { "@id": string }>;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
   */
  eligibleRegion: Array<string | { "@id": string }>;
  /** An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it. */
  expectsAcceptanceOf: Array<{ "@id": string }>;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
   */
  ineligibleRegion: Array<string | { "@id": string }>;
  /** Indicates if use of the media require a subscription  (either paid or free). Allowed values are ```true``` or ```false``` (note that an earlier version had 'yes', 'no'). */
  requiresSubscription: Array<boolean | { "@id": string }>;
}
