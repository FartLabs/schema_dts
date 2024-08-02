// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassLocalBusiness } from "./LocalBusiness.ts";

/** A lodging business, such as a motel, hotel, or inn. */
export interface ClassLodgingBusiness extends ClassLocalBusiness {
  /** An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs. */
  amenityFeature: Array<{ "@id": string }>;
  /** An intended audience, i.e. a group for whom something was created. */
  audience: Array<{ "@id": string }>;
  /** A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]. */
  availableLanguage: Array<string | { "@id": string }>;
  /** The earliest someone may check into a lodging establishment. */
  checkinTime: Array<string>;
  /** The latest someone may check out of a lodging establishment. */
  checkoutTime: Array<string>;
  /**
   * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
   * Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
   */
  numberOfRooms: Array<number | { "@id": string }>;
  /** Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value. */
  petsAllowed: Array<boolean | string>;
  /** An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars). */
  starRating: Array<{ "@id": string }>;
}
