// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_DeliveryMethod } from "./SchemaOrg_DeliveryMethod.ts";
import type { SchemaOrg_Event } from "./SchemaOrg_Event.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * An event involving the delivery of an item.
 * @see https://schema.org/DeliveryEvent
 */
export const SCHEMA_ORG_DeliveryEvent = "https://schema.org/DeliveryEvent" as const;

/**
 * An event involving the delivery of an item.
 * @see https://schema.org/DeliveryEvent
 */
export interface SchemaOrg_DeliveryEvent extends SchemaOrg_Event {
    /**
     * Password, PIN, or access code needed for delivery (e.g. from a locker).
     * @see https://schema.org/accessCode
     */
    accessCode?: Array<SchemaOrg_Text>;
    /**
     * When the item is available for pickup from the store, locker, etc.
     * @see https://schema.org/availableFrom
     */
    availableFrom?: Array<SchemaOrg_DateTime>;
    /**
     * After this date, the item will no longer be available for pickup.
     * @see https://schema.org/availableThrough
     */
    availableThrough?: Array<SchemaOrg_DateTime>;
    /**
     * Method used for delivery or shipping.
     * @see https://schema.org/hasDeliveryMethod
     */
    hasDeliveryMethod?: Array<SchemaOrg_DeliveryMethod>;
}
