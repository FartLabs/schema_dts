// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/**
 * A grant, typically financial or otherwise quantifiable, of resources. Typically a [[funder]] sponsors some [[MonetaryAmount]] to an [[Organization]] or [[Person]],
 *     sometimes not necessarily via a dedicated or long-lived [[Project]], resulting in one or more outputs, or [[fundedItem]]s. For financial sponsorship, indicate the [[funder]] of a [[MonetaryGrant]]. For non-financial support, indicate [[sponsor]] of [[Grant]]s of resources (e.g. office space).
 *
 * Grants support  activities directed towards some agreed collective goals, often but not always organized as [[Project]]s. Long-lived projects are sometimes sponsored by a variety of grants over time, but it is also common for a project to be associated with a single grant.
 *
 * The amount of a [[Grant]] is represented using [[amount]] as a [[MonetaryAmount]].
 */
export interface ClassGrant extends ClassIntangible {
  /** Indicates something directly or indirectly funded or sponsored through a [[Grant]]. See also [[ownershipFundingInfo]]. */
  fundedItem: Array<{ "@id": string }>;
  /** A person or organization that supports (sponsors) something through some kind of financial contribution. */
  funder: Array<{ "@id": string }>;
  /** A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event. */
  sponsor: Array<{ "@id": string }>;
}
