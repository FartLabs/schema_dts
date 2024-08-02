// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** A permit issued by an organization, e.g. a parking pass. */
export interface ClassPermit extends ClassIntangible {
  /** The organization issuing the item, for example a [[Permit]], [[Ticket]], or [[Certification]]. */
  issuedBy: Array<{ "@id": string }>;
  /** The service through which the permit was granted. */
  issuedThrough: Array<{ "@id": string }>;
  /** The target audience for this permit. */
  permitAudience: Array<{ "@id": string }>;
  /** The duration of validity of a permit or similar thing. */
  validFor: Array<{ "@id": string }>;
  /** The date when the item becomes valid. */
  validFrom: Array<string>;
  /** The geographic area where the item is valid. Applies for example to a [[Permit]], a [[Certification]], or an [[EducationalOccupationalCredential]]. */
  validIn: Array<{ "@id": string }>;
  /** The date when the item is no longer valid. */
  validUntil: Array<string>;
}
