// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A quotation. Often but not necessarily from some written work, attributable to a real world author and - if associated with a fictional character - to any fictional Person. Use [[isBasedOn]] to link to source/origin. The [[recordedIn]] property can be used to reference a Quotation from an [[Event]]. */
export interface ClassQuotation extends ClassCreativeWork {
  /** The (e.g. fictional) character, Person or Organization to whom the quotation is attributed within the containing CreativeWork. */
  spokenByCharacter: Array<{ "@id": string }>;
}
