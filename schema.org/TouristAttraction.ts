// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassPlace } from "./Place.ts";

/** A tourist attraction.  In principle any Thing can be a [[TouristAttraction]], from a [[Mountain]] and [[LandmarksOrHistoricalBuildings]] to a [[LocalBusiness]].  This Type can be used on its own to describe a general [[TouristAttraction]], or be used as an [[additionalType]] to add tourist attraction properties to any other type.  (See examples below) */
export interface ClassTouristAttraction extends ClassPlace {
  /** A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]. */
  availableLanguage: Array<string | { "@id": string }>;
  /** Attraction suitable for type(s) of tourist. E.g. children, visitors from a particular country, etc. */
  touristType: Array<string | { "@id": string }>;
}
