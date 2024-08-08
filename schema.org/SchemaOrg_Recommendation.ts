// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CategoryCode } from "./SchemaOrg_CategoryCode.ts";
import type { SchemaOrg_PhysicalActivityCategory } from "./SchemaOrg_PhysicalActivityCategory.ts";
import type { SchemaOrg_Review } from "./SchemaOrg_Review.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * [[Recommendation]] is a type of [[Review]] that suggests or proposes something as the best option or best course of action. Recommendations may be for products or services, or other concrete things, as in the case of a ranked list or product guide. A [[Guide]] may list multiple recommendations for different categories. For example, in a [[Guide]] about which TVs to buy, the author may have several [[Recommendation]]s.
 * @see https://schema.org/Recommendation
 */
export const SCHEMA_ORG_Recommendation = "https://schema.org/Recommendation" as const;

/**
 * [[Recommendation]] is a type of [[Review]] that suggests or proposes something as the best option or best course of action. Recommendations may be for products or services, or other concrete things, as in the case of a ranked list or product guide. A [[Guide]] may list multiple recommendations for different categories. For example, in a [[Guide]] about which TVs to buy, the author may have several [[Recommendation]]s.
 * @see https://schema.org/Recommendation
 */
export interface SchemaOrg_Recommendation extends SchemaOrg_Review {
    /**
     * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
     * @see https://schema.org/category
     */
    category?: Array<SchemaOrg_URL | SchemaOrg_Thing | SchemaOrg_PhysicalActivityCategory | SchemaOrg_CategoryCode | SchemaOrg_Text>;
}
