// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTrip } from "./Trip.ts";

/**
 * A tourist trip. A created itinerary of visits to one or more places of interest ([[TouristAttraction]]/[[TouristDestination]]) often linked by a similar theme, geographic area, or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines tourism trip as the Trip taken by visitors.
 *   (See examples below.)
 */
export interface ClassTouristTrip extends ClassTrip {
  /** Attraction suitable for type(s) of tourist. E.g. children, visitors from a particular country, etc. */
  touristType: Array<string | { "@id": string }>;
}
