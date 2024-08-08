// DO NOT EDIT: This file is generated.
import type { SchemaOrg_PriceSpecification } from "./SchemaOrg_PriceSpecification.ts";
import type { SchemaOrg_PriceTypeEnumeration } from "./SchemaOrg_PriceTypeEnumeration.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_UnitPriceSpecification } from "./SchemaOrg_UnitPriceSpecification.ts";

/**
 * A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. "electricity" or "final cleaning").
 * @see https://schema.org/CompoundPriceSpecification
 */
export const SCHEMA_ORG_CompoundPriceSpecification =
  "https://schema.org/CompoundPriceSpecification" as const;

/**
 * A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. "electricity" or "final cleaning").
 * @see https://schema.org/CompoundPriceSpecification
 */
export interface SchemaOrg_CompoundPriceSpecification
  extends SchemaOrg_PriceSpecification {
  /**
   * This property links to all [[UnitPriceSpecification]] nodes that apply in parallel for the [[CompoundPriceSpecification]] node.
   * @see https://schema.org/priceComponent
   */
  priceComponent?: Array<SchemaOrg_UnitPriceSpecification>;
  /**
   * Defines the type of a price specified for an offered product, for example a list price, a (temporary) sale price or a manufacturer suggested retail price. If multiple prices are specified for an offer the [[priceType]] property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or as a free form text string for price types that are not already predefined in PriceTypeEnumeration.
   * @see https://schema.org/priceType
   */
  priceType?: Array<SchemaOrg_Text | SchemaOrg_PriceTypeEnumeration>;
}
