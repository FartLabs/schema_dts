// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Product } from "./SchemaOrg_Product.ts";
import type { SchemaOrg_ProductGroup } from "./SchemaOrg_ProductGroup.ts";
import type { SchemaOrg_ProductModel } from "./SchemaOrg_ProductModel.ts";

/**
 * A datasheet or vendor specification of a product (in the sense of a prototypical description).
 * @see https://schema.org/ProductModel
 */
export const SCHEMA_ORG_ProductModel = "https://schema.org/ProductModel" as const;

/**
 * A datasheet or vendor specification of a product (in the sense of a prototypical description).
 * @see https://schema.org/ProductModel
 */
export interface SchemaOrg_ProductModel extends SchemaOrg_Product {
    /**
     * Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group.
     * @see https://schema.org/isVariantOf
     */
    isVariantOf?: Array<SchemaOrg_ProductGroup | SchemaOrg_ProductModel>;
    /**
     * A pointer from a previous, often discontinued variant of the product to its newer variant.
     * @see https://schema.org/predecessorOf
     */
    predecessorOf?: Array<SchemaOrg_ProductModel>;
    /**
     * A pointer from a newer variant of a product  to its previous, often discontinued predecessor.
     * @see https://schema.org/successorOf
     */
    successorOf?: Array<SchemaOrg_ProductModel>;
}
