// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassLocalBusiness } from "./LocalBusiness.ts";

/** A food-related business. */
export interface ClassFoodEstablishment extends ClassLocalBusiness {
  /** Indicates whether a FoodEstablishment accepts reservations. Values can be Boolean, an URL at which reservations can be made or (for backwards compatibility) the strings ```Yes``` or ```No```. */
  acceptsReservations: Array<boolean | string | { "@id": string }>;
  /** Either the actual menu as a structured representation, as text, or a URL of the menu. */
  hasMenu: Array<string | { "@id": string }>;
  /** Either the actual menu as a structured representation, as text, or a URL of the menu. */
  menu: Array<string | { "@id": string }>;
  /** The cuisine of the restaurant. */
  servesCuisine: Array<string>;
  /** An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars). */
  starRating: Array<{ "@id": string }>;
}
