// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction. */
export interface ClassInteractionCounter extends ClassStructuredValue {
  /** The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions. */
  endTime: Array<string>;
  /** The WebSite or SoftwareApplication where the interactions took place. */
  interactionService: Array<{ "@id": string }>;
  /** The Action representing the type of interaction. For up votes, +1s, etc. use [[LikeAction]]. For down votes use [[DislikeAction]]. Otherwise, use the most specific Action. */
  interactionType: Array<{ "@id": string }>;
  /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place. */
  location: Array<string | { "@id": string }>;
  /** The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions. */
  startTime: Array<string>;
  /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. */
  userInteractionCount: Array<{ "@id": string }>;
}
