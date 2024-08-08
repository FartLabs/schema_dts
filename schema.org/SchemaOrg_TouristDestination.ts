// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "./SchemaOrg_Audience.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_TouristAttraction } from "./SchemaOrg_TouristAttraction.ts";

/**
 * A tourist destination. In principle any [[Place]] can be a [[TouristDestination]] from a [[City]], Region or [[Country]] to an [[AmusementPark]] or [[Hotel]]. This Type can be used on its own to describe a general [[TouristDestination]], or be used as an [[additionalType]] to add tourist relevant properties to any other [[Place]].  A [[TouristDestination]] is defined as a [[Place]] that contains, or is colocated with, one or more [[TouristAttraction]]s, often linked by a similar theme or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines Destination (main destination of a tourism trip) as the place visited that is central to the decision to take the trip.
 *   (See examples below.)
 * @see https://schema.org/TouristDestination
 */
export const SCHEMA_ORG_TouristDestination =
  "https://schema.org/TouristDestination" as const;

/**
 * A tourist destination. In principle any [[Place]] can be a [[TouristDestination]] from a [[City]], Region or [[Country]] to an [[AmusementPark]] or [[Hotel]]. This Type can be used on its own to describe a general [[TouristDestination]], or be used as an [[additionalType]] to add tourist relevant properties to any other [[Place]].  A [[TouristDestination]] is defined as a [[Place]] that contains, or is colocated with, one or more [[TouristAttraction]]s, often linked by a similar theme or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines Destination (main destination of a tourism trip) as the place visited that is central to the decision to take the trip.
 *   (See examples below.)
 * @see https://schema.org/TouristDestination
 */
export interface SchemaOrg_TouristDestination extends SchemaOrg_Place {
  /**
   * Attraction located at destination.
   * @see https://schema.org/includesAttraction
   */
  includesAttraction?: Array<SchemaOrg_TouristAttraction>;
  /**
   * Attraction suitable for type(s) of tourist. E.g. children, visitors from a particular country, etc.
   * @see https://schema.org/touristType
   */
  touristType?: Array<SchemaOrg_Text | SchemaOrg_Audience>;
}
