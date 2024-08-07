// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "labs/SchemaOrg_Boolean.ts";
import type { SchemaOrg_CategoryCode } from "labs/SchemaOrg_CategoryCode.ts";
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_GeoShape } from "labs/SchemaOrg_GeoShape.ts";
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_MediaSubscription } from "labs/SchemaOrg_MediaSubscription.ts";
import type { SchemaOrg_Offer } from "labs/SchemaOrg_Offer.ts";
import type { SchemaOrg_PhysicalActivityCategory } from "labs/SchemaOrg_PhysicalActivityCategory.ts";
import type { SchemaOrg_Place } from "labs/SchemaOrg_Place.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "labs/SchemaOrg_Thing.ts";
import type { SchemaOrg_Time } from "labs/SchemaOrg_Time.ts";
import type { SchemaOrg_URL } from "labs/SchemaOrg_URL.ts";

/**
 * A set of requirements that must be fulfilled in order to perform an Action.
 * @see https://schema.org/ActionAccessSpecification
 */
export const SCHEMA_ORG_ActionAccessSpecification = "https://schema.org/ActionAccessSpecification" as const;

/**
 * A set of requirements that must be fulfilled in order to perform an Action.
 * @see https://schema.org/ActionAccessSpecification
 */
export interface SchemaOrg_ActionAccessSpecification extends SchemaOrg_Intangible {
    /**
     * The end of the availability of the product or service included in the offer.
     * @see https://schema.org/availabilityEnds
     */
    availabilityEnds: Array<SchemaOrg_DateTime | SchemaOrg_Time | SchemaOrg_Date>;
    /**
     * The beginning of the availability of the product or service included in the offer.
     * @see https://schema.org/availabilityStarts
     */
    availabilityStarts: Array<SchemaOrg_Date | SchemaOrg_DateTime | SchemaOrg_Time>;
    /**
     * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
     * @see https://schema.org/category
     */
    category: Array<SchemaOrg_URL | SchemaOrg_Thing | SchemaOrg_PhysicalActivityCategory | SchemaOrg_CategoryCode | SchemaOrg_Text>;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
     * @see https://schema.org/eligibleRegion
     */
    eligibleRegion: Array<SchemaOrg_GeoShape | SchemaOrg_Text | SchemaOrg_Place>;
    /**
     * An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.
     * @see https://schema.org/expectsAcceptanceOf
     */
    expectsAcceptanceOf: Array<SchemaOrg_Offer>;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
     * @see https://schema.org/ineligibleRegion
     */
    ineligibleRegion: Array<SchemaOrg_GeoShape | SchemaOrg_Text | SchemaOrg_Place>;
    /**
     * Indicates if use of the media require a subscription  (either paid or free). Allowed values are ```true``` or ```false``` (note that an earlier version had 'yes', 'no').
     * @see https://schema.org/requiresSubscription
     */
    requiresSubscription: Array<SchemaOrg_Boolean | SchemaOrg_MediaSubscription>;
}
