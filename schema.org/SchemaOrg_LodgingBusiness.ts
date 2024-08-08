// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "./SchemaOrg_Audience.ts";
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Language } from "./SchemaOrg_Language.ts";
import type { SchemaOrg_LocalBusiness } from "./SchemaOrg_LocalBusiness.ts";
import type { SchemaOrg_LocationFeatureSpecification } from "./SchemaOrg_LocationFeatureSpecification.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Rating } from "./SchemaOrg_Rating.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Time } from "./SchemaOrg_Time.ts";

/**
 * A lodging business, such as a motel, hotel, or inn.
 * @see https://schema.org/LodgingBusiness
 */
export const SCHEMA_ORG_LodgingBusiness =
  "https://schema.org/LodgingBusiness" as const;

/**
 * A lodging business, such as a motel, hotel, or inn.
 * @see https://schema.org/LodgingBusiness
 */
export interface SchemaOrg_LodgingBusiness extends SchemaOrg_LocalBusiness {
  /**
   * An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
   * @see https://schema.org/amenityFeature
   */
  amenityFeature?: Array<SchemaOrg_LocationFeatureSpecification>;
  /**
   * An intended audience, i.e. a group for whom something was created.
   * @see https://schema.org/audience
   */
  audience?: Array<SchemaOrg_Audience>;
  /**
   * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]].
   * @see https://schema.org/availableLanguage
   */
  availableLanguage?: Array<SchemaOrg_Text | SchemaOrg_Language>;
  /**
   * The earliest someone may check into a lodging establishment.
   * @see https://schema.org/checkinTime
   */
  checkinTime?: Array<SchemaOrg_DateTime | SchemaOrg_Time>;
  /**
   * The latest someone may check out of a lodging establishment.
   * @see https://schema.org/checkoutTime
   */
  checkoutTime?: Array<SchemaOrg_DateTime | SchemaOrg_Time>;
  /**
   * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
   * Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
   * @see https://schema.org/numberOfRooms
   */
  numberOfRooms?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Number>;
  /**
   * Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.
   * @see https://schema.org/petsAllowed
   */
  petsAllowed?: Array<SchemaOrg_Text | SchemaOrg_Boolean>;
  /**
   * An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars).
   * @see https://schema.org/starRating
   */
  starRating?: Array<SchemaOrg_Rating>;
}
