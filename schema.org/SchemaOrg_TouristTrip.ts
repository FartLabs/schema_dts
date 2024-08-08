// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "./SchemaOrg_Audience.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Trip } from "./SchemaOrg_Trip.ts";

/**
 * A tourist trip. A created itinerary of visits to one or more places of interest ([[TouristAttraction]]/[[TouristDestination]]) often linked by a similar theme, geographic area, or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines tourism trip as the Trip taken by visitors.
 *   (See examples below.)
 * @see https://schema.org/TouristTrip
 */
export const SCHEMA_ORG_TouristTrip = "https://schema.org/TouristTrip" as const;

/**
 * A tourist trip. A created itinerary of visits to one or more places of interest ([[TouristAttraction]]/[[TouristDestination]]) often linked by a similar theme, geographic area, or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines tourism trip as the Trip taken by visitors.
 *   (See examples below.)
 * @see https://schema.org/TouristTrip
 */
export interface SchemaOrg_TouristTrip extends SchemaOrg_Trip {
  /**
   * Attraction suitable for type(s) of tourist. E.g. children, visitors from a particular country, etc.
   * @see https://schema.org/touristType
   */
  touristType?: Array<SchemaOrg_Text | SchemaOrg_Audience>;
}
