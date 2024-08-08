// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Product } from "./SchemaOrg_Product.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A ProductGroup represents a group of [[Product]]s that vary only in certain well-described ways, such as by [[size]], [[color]], [[material]] etc.
 *
 * While a ProductGroup itself is not directly offered for sale, the various varying products that it represents can be. The ProductGroup serves as a prototype or template, standing in for all of the products who have an [[isVariantOf]] relationship to it. As such, properties (including additional types) can be applied to the ProductGroup to represent characteristics shared by each of the (possibly very many) variants. Properties that reference a ProductGroup are not included in this mechanism; neither are the following specific properties [[variesBy]], [[hasVariant]], [[url]].
 * @see https://schema.org/ProductGroup
 */
export const SCHEMA_ORG_ProductGroup =
  "https://schema.org/ProductGroup" as const;

/**
 * A ProductGroup represents a group of [[Product]]s that vary only in certain well-described ways, such as by [[size]], [[color]], [[material]] etc.
 *
 * While a ProductGroup itself is not directly offered for sale, the various varying products that it represents can be. The ProductGroup serves as a prototype or template, standing in for all of the products who have an [[isVariantOf]] relationship to it. As such, properties (including additional types) can be applied to the ProductGroup to represent characteristics shared by each of the (possibly very many) variants. Properties that reference a ProductGroup are not included in this mechanism; neither are the following specific properties [[variesBy]], [[hasVariant]], [[url]].
 * @see https://schema.org/ProductGroup
 */
export interface SchemaOrg_ProductGroup extends SchemaOrg_Product {
  /**
   * Indicates a [[Product]] that is a member of this [[ProductGroup]] (or [[ProductModel]]).
   * @see https://schema.org/hasVariant
   */
  hasVariant?: Array<SchemaOrg_Product>;
  /**
   * Indicates a textual identifier for a ProductGroup.
   * @see https://schema.org/productGroupID
   */
  productGroupID?: Array<SchemaOrg_Text>;
  /**
   * Indicates the property or properties by which the variants in a [[ProductGroup]] vary, e.g. their size, color etc. Schema.org properties can be referenced by their short name e.g. "color"; terms defined elsewhere can be referenced with their URIs.
   * @see https://schema.org/variesBy
   */
  variesBy?: Array<SchemaOrg_Text | SchemaOrg_DefinedTerm>;
}
