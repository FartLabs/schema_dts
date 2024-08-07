// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "labs/SchemaOrg_Audience.ts";
import type { SchemaOrg_Language } from "labs/SchemaOrg_Language.ts";
import type { SchemaOrg_Place } from "labs/SchemaOrg_Place.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A tourist attraction.  In principle any Thing can be a [[TouristAttraction]], from a [[Mountain]] and [[LandmarksOrHistoricalBuildings]] to a [[LocalBusiness]].  This Type can be used on its own to describe a general [[TouristAttraction]], or be used as an [[additionalType]] to add tourist attraction properties to any other type.  (See examples below)
 * @see https://schema.org/TouristAttraction
 */
export const SCHEMA_ORG_TouristAttraction = "https://schema.org/TouristAttraction" as const;

/**
 * A tourist attraction.  In principle any Thing can be a [[TouristAttraction]], from a [[Mountain]] and [[LandmarksOrHistoricalBuildings]] to a [[LocalBusiness]].  This Type can be used on its own to describe a general [[TouristAttraction]], or be used as an [[additionalType]] to add tourist attraction properties to any other type.  (See examples below)
 * @see https://schema.org/TouristAttraction
 */
export interface SchemaOrg_TouristAttraction extends SchemaOrg_Place {
    /**
     * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]].
     * @see https://schema.org/availableLanguage
     */
    availableLanguage: Array<SchemaOrg_Text | SchemaOrg_Language>;
    /**
     * Attraction suitable for type(s) of tourist. E.g. children, visitors from a particular country, etc.
     * @see https://schema.org/touristType
     */
    touristType: Array<SchemaOrg_Text | SchemaOrg_Audience>;
}
