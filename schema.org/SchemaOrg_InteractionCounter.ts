// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Action } from "./SchemaOrg_Action.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_PostalAddress } from "./SchemaOrg_PostalAddress.ts";
import type { SchemaOrg_SoftwareApplication } from "./SchemaOrg_SoftwareApplication.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Time } from "./SchemaOrg_Time.ts";
import type { SchemaOrg_VirtualLocation } from "./SchemaOrg_VirtualLocation.ts";
import type { SchemaOrg_WebSite } from "./SchemaOrg_WebSite.ts";

/**
 * A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.
 * @see https://schema.org/InteractionCounter
 */
export const SCHEMA_ORG_InteractionCounter = "https://schema.org/InteractionCounter" as const;

/**
 * A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.
 * @see https://schema.org/InteractionCounter
 */
export interface SchemaOrg_InteractionCounter extends SchemaOrg_StructuredValue {
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     * @see https://schema.org/endTime
     */
    endTime?: Array<SchemaOrg_Time | SchemaOrg_DateTime>;
    /**
     * The WebSite or SoftwareApplication where the interactions took place.
     * @see https://schema.org/interactionService
     */
    interactionService?: Array<SchemaOrg_SoftwareApplication | SchemaOrg_WebSite>;
    /**
     * The Action representing the type of interaction. For up votes, +1s, etc. use [[LikeAction]]. For down votes use [[DislikeAction]]. Otherwise, use the most specific Action.
     * @see https://schema.org/interactionType
     */
    interactionType?: Array<SchemaOrg_Action>;
    /**
     * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
     * @see https://schema.org/location
     */
    location?: Array<SchemaOrg_Text | SchemaOrg_VirtualLocation | SchemaOrg_Place | SchemaOrg_PostalAddress>;
    /**
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     * @see https://schema.org/startTime
     */
    startTime?: Array<SchemaOrg_DateTime | SchemaOrg_Time>;
    /**
     * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication.
     * @see https://schema.org/userInteractionCount
     */
    userInteractionCount?: Array<SchemaOrg_Integer>;
}
