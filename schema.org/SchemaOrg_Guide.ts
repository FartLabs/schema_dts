// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "labs/SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * [[Guide]] is a page or article that recommends specific products or services, or aspects of a thing for a user to consider. A [[Guide]] may represent a Buying Guide and detail aspects of products or services for a user to consider. A [[Guide]] may represent a Product Guide and recommend specific products or services. A [[Guide]] may represent a Ranked List and recommend specific products or services with ranking.
 * @see https://schema.org/Guide
 */
export const SCHEMA_ORG_Guide = "https://schema.org/Guide" as const;

/**
 * [[Guide]] is a page or article that recommends specific products or services, or aspects of a thing for a user to consider. A [[Guide]] may represent a Buying Guide and detail aspects of products or services for a user to consider. A [[Guide]] may represent a Product Guide and recommend specific products or services. A [[Guide]] may represent a Ranked List and recommend specific products or services with ranking.
 * @see https://schema.org/Guide
 */
export interface SchemaOrg_Guide extends SchemaOrg_CreativeWork {
    /**
     * This Review or Rating is relevant to this part or facet of the itemReviewed.
     * @see https://schema.org/reviewAspect
     */
    reviewAspect: Array<SchemaOrg_Text>;
}
