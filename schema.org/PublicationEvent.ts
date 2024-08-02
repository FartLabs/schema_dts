// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassEvent } from "./Event.ts";

/** A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type, e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media. */
export interface ClassPublicationEvent extends ClassEvent {
  /** A flag to signal that the item, event, or place is accessible for free. */
  free: Array<boolean>;
  /** An agent associated with the publication event. */
  publishedBy: Array<{ "@id": string }>;
  /** A broadcast service associated with the publication event. */
  publishedOn: Array<{ "@id": string }>;
}
