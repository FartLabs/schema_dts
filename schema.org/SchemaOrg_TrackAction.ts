// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DeliveryMethod } from "./SchemaOrg_DeliveryMethod.ts";
import type { SchemaOrg_FindAction } from "./SchemaOrg_FindAction.ts";

/**
 * An agent tracks an object for updates.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.\n* [[SubscribeAction]]: Unlike SubscribeAction, TrackAction refers to  the interest on the location of innanimate objects.
 * @see https://schema.org/TrackAction
 */
export const SCHEMA_ORG_TrackAction = "https://schema.org/TrackAction" as const;

/**
 * An agent tracks an object for updates.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.\n* [[SubscribeAction]]: Unlike SubscribeAction, TrackAction refers to  the interest on the location of innanimate objects.
 * @see https://schema.org/TrackAction
 */
export interface SchemaOrg_TrackAction extends SchemaOrg_FindAction {
  /**
   * A sub property of instrument. The method of delivery.
   * @see https://schema.org/deliveryMethod
   */
  deliveryMethod?: Array<SchemaOrg_DeliveryMethod>;
}
