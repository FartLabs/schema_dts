// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassFindAction } from "./FindAction.ts";

/** An agent tracks an object for updates.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.\n* [[SubscribeAction]]: Unlike SubscribeAction, TrackAction refers to  the interest on the location of innanimate objects. */
export interface ClassTrackAction extends ClassFindAction {
  /** A sub property of instrument. The method of delivery. */
  deliveryMethod: Array<{ "@id": string }>;
}
