// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A subscription which allows a user to access media including audio, video, books, etc. */
export interface ClassMediaSubscription extends ClassIntangible {
  /** The Organization responsible for authenticating the user's subscription. For example, many media apps require a cable/satellite provider to authenticate your subscription before playing media. */
  authenticator: Array<{ "@id": string }>;
  /** An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it. */
  expectsAcceptanceOf: Array<{ "@id": string }>;
}
