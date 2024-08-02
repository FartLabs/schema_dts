// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassUserInteraction } from "./UserInteraction.ts";

/** UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]]. */
export interface ClassUserComments extends ClassUserInteraction {
  /** The text of the UserComment. */
  commentText: Array<string>;
  /** The time at which the UserComment was made. */
  commentTime: Array<string>;
  /** The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork. */
  creator: Array<{ "@id": string }>;
  /** Specifies the CreativeWork associated with the UserComment. */
  discusses: Array<{ "@id": string }>;
  /** The URL at which a reply may be posted to the specified UserComment. */
  replyToUrl: Array<{ "@id": string }>;
}
