// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassEvent } from "./Event.ts";

/** An event involving the delivery of an item. */
export interface ClassDeliveryEvent extends ClassEvent {
  /** Password, PIN, or access code needed for delivery (e.g. from a locker). */
  accessCode: Array<string>;
  /** When the item is available for pickup from the store, locker, etc. */
  availableFrom: Array<string>;
  /** After this date, the item will no longer be available for pickup. */
  availableThrough: Array<string>;
  /** Method used for delivery or shipping. */
  hasDeliveryMethod: Array<{ "@id": string }>;
}
