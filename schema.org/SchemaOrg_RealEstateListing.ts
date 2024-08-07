// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_Duration } from "labs/SchemaOrg_Duration.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_WebPage } from "labs/SchemaOrg_WebPage.ts";

/**
 * A [[RealEstateListing]] is a listing that describes one or more real-estate [[Offer]]s (whose [[businessFunction]] is typically to lease out, or to sell).
 *   The [[RealEstateListing]] type itself represents the overall listing, as manifested in some [[WebPage]].
 * @see https://schema.org/RealEstateListing
 */
export const SCHEMA_ORG_RealEstateListing = "https://schema.org/RealEstateListing" as const;

/**
 * A [[RealEstateListing]] is a listing that describes one or more real-estate [[Offer]]s (whose [[businessFunction]] is typically to lease out, or to sell).
 *   The [[RealEstateListing]] type itself represents the overall listing, as manifested in some [[WebPage]].
 * @see https://schema.org/RealEstateListing
 */
export interface SchemaOrg_RealEstateListing extends SchemaOrg_WebPage {
    /**
     * Publication date of an online listing.
     * @see https://schema.org/datePosted
     */
    datePosted: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
    /**
     * Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.
     * @see https://schema.org/leaseLength
     */
    leaseLength: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Duration>;
}
