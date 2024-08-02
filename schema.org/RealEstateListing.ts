// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassWebPage } from "./WebPage.ts";

/**
 * A [[RealEstateListing]] is a listing that describes one or more real-estate [[Offer]]s (whose [[businessFunction]] is typically to lease out, or to sell).
 *   The [[RealEstateListing]] type itself represents the overall listing, as manifested in some [[WebPage]].
 */
export interface ClassRealEstateListing extends ClassWebPage {
  /** Publication date of an online listing. */
  datePosted: Array<string>;
  /** Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property. */
  leaseLength: Array<{ "@id": string }>;
}
