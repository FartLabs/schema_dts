// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BioChemEntity } from "./SchemaOrg_BioChemEntity.ts";
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Event } from "./SchemaOrg_Event.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_MedicalEntity } from "./SchemaOrg_MedicalEntity.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Product } from "./SchemaOrg_Product.ts";

/**
 * A grant, typically financial or otherwise quantifiable, of resources. Typically a [[funder]] sponsors some [[MonetaryAmount]] to an [[Organization]] or [[Person]],
 *     sometimes not necessarily via a dedicated or long-lived [[Project]], resulting in one or more outputs, or [[fundedItem]]s. For financial sponsorship, indicate the [[funder]] of a [[MonetaryGrant]]. For non-financial support, indicate [[sponsor]] of [[Grant]]s of resources (e.g. office space).
 *
 * Grants support  activities directed towards some agreed collective goals, often but not always organized as [[Project]]s. Long-lived projects are sometimes sponsored by a variety of grants over time, but it is also common for a project to be associated with a single grant.
 *
 * The amount of a [[Grant]] is represented using [[amount]] as a [[MonetaryAmount]].
 * @see https://schema.org/Grant
 */
export const SCHEMA_ORG_Grant = "https://schema.org/Grant" as const;

/**
 * A grant, typically financial or otherwise quantifiable, of resources. Typically a [[funder]] sponsors some [[MonetaryAmount]] to an [[Organization]] or [[Person]],
 *     sometimes not necessarily via a dedicated or long-lived [[Project]], resulting in one or more outputs, or [[fundedItem]]s. For financial sponsorship, indicate the [[funder]] of a [[MonetaryGrant]]. For non-financial support, indicate [[sponsor]] of [[Grant]]s of resources (e.g. office space).
 *
 * Grants support  activities directed towards some agreed collective goals, often but not always organized as [[Project]]s. Long-lived projects are sometimes sponsored by a variety of grants over time, but it is also common for a project to be associated with a single grant.
 *
 * The amount of a [[Grant]] is represented using [[amount]] as a [[MonetaryAmount]].
 * @see https://schema.org/Grant
 */
export interface SchemaOrg_Grant extends SchemaOrg_Intangible {
  /**
   * Indicates something directly or indirectly funded or sponsored through a [[Grant]]. See also [[ownershipFundingInfo]].
   * @see https://schema.org/fundedItem
   */
  fundedItem?: Array<
    | SchemaOrg_Organization
    | SchemaOrg_Person
    | SchemaOrg_BioChemEntity
    | SchemaOrg_Product
    | SchemaOrg_Event
    | SchemaOrg_MedicalEntity
    | SchemaOrg_CreativeWork
  >;
  /**
   * A person or organization that supports (sponsors) something through some kind of financial contribution.
   * @see https://schema.org/funder
   */
  funder?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   * @see https://schema.org/sponsor
   */
  sponsor?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
}
