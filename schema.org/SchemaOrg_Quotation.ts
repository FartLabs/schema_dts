// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";

/**
 * A quotation. Often but not necessarily from some written work, attributable to a real world author and - if associated with a fictional character - to any fictional Person. Use [[isBasedOn]] to link to source/origin. The [[recordedIn]] property can be used to reference a Quotation from an [[Event]].
 * @see https://schema.org/Quotation
 */
export const SCHEMA_ORG_Quotation = "https://schema.org/Quotation" as const;

/**
 * A quotation. Often but not necessarily from some written work, attributable to a real world author and - if associated with a fictional character - to any fictional Person. Use [[isBasedOn]] to link to source/origin. The [[recordedIn]] property can be used to reference a Quotation from an [[Event]].
 * @see https://schema.org/Quotation
 */
export interface SchemaOrg_Quotation extends SchemaOrg_CreativeWork {
  /**
   * The (e.g. fictional) character, Person or Organization to whom the quotation is attributed within the containing CreativeWork.
   * @see https://schema.org/spokenByCharacter
   */
  spokenByCharacter?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
}
