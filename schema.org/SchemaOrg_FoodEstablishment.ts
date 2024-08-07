// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "labs/SchemaOrg_Boolean.ts";
import type { SchemaOrg_LocalBusiness } from "labs/SchemaOrg_LocalBusiness.ts";
import type { SchemaOrg_Menu } from "labs/SchemaOrg_Menu.ts";
import type { SchemaOrg_Rating } from "labs/SchemaOrg_Rating.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * A food-related business.
 * @see https://schema.org/FoodEstablishment
 */
export const SCHEMA_ORG_FoodEstablishment = "https://schema.org/FoodEstablishment" as const;

/**
 * A food-related business.
 * @see https://schema.org/FoodEstablishment
 */
export interface SchemaOrg_FoodEstablishment extends SchemaOrg_LocalBusiness {
    /**
     * Indicates whether a FoodEstablishment accepts reservations. Values can be Boolean, an URL at which reservations can be made or (for backwards compatibility) the strings ```Yes``` or ```No```.
     * @see https://schema.org/acceptsReservations
     */
    acceptsReservations: Array<SchemaOrg_URL | SchemaOrg_Boolean | SchemaOrg_Text>;
    /**
     * Either the actual menu as a structured representation, as text, or a URL of the menu.
     * @see https://schema.org/hasMenu
     */
    hasMenu: Array<SchemaOrg_URL | SchemaOrg_Text | SchemaOrg_Menu>;
    /**
     * Either the actual menu as a structured representation, as text, or a URL of the menu.
     * @see https://schema.org/menu
     */
    menu: Array<SchemaOrg_URL | SchemaOrg_Text | SchemaOrg_Menu>;
    /**
     * The cuisine of the restaurant.
     * @see https://schema.org/servesCuisine
     */
    servesCuisine: Array<SchemaOrg_Text>;
    /**
     * An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars).
     * @see https://schema.org/starRating
     */
    starRating: Array<SchemaOrg_Rating>;
}
