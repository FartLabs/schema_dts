// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_Property } from "./SchemaOrg_Property.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * The ConstraintNode type is provided to support usecases in which a node in a structured data graph is described with properties which appear to describe a single entity, but are being used in a situation where they serve a more abstract purpose. A [[ConstraintNode]] can be described using [[constraintProperty]] and [[numConstraints]]. These constraint properties can serve a
 *     variety of purposes, and their values may sometimes be understood to indicate sets of possible values rather than single, exact and specific values.
 * @see https://schema.org/ConstraintNode
 */
export const SCHEMA_ORG_ConstraintNode =
  "https://schema.org/ConstraintNode" as const;

/**
 * The ConstraintNode type is provided to support usecases in which a node in a structured data graph is described with properties which appear to describe a single entity, but are being used in a situation where they serve a more abstract purpose. A [[ConstraintNode]] can be described using [[constraintProperty]] and [[numConstraints]]. These constraint properties can serve a
 *     variety of purposes, and their values may sometimes be understood to indicate sets of possible values rather than single, exact and specific values.
 * @see https://schema.org/ConstraintNode
 */
export interface SchemaOrg_ConstraintNode extends SchemaOrg_Intangible {
  /**
   * Indicates a property used as a constraint. For example, in the definition of a [[StatisticalVariable]]. The value is a property, either from within Schema.org or from other compatible (e.g. RDF) systems such as DataCommons.org or Wikidata.org.
   * @see https://schema.org/constraintProperty
   */
  constraintProperty?: Array<SchemaOrg_Property | SchemaOrg_URL>;
  /**
   * Indicates the number of constraints property values defined for a particular [[ConstraintNode]] such as [[StatisticalVariable]]. This helps applications understand if they have access to a sufficiently complete description of a [[StatisticalVariable]] or other construct that is defined using properties on template-style nodes.
   * @see https://schema.org/numConstraints
   */
  numConstraints?: Array<SchemaOrg_Integer>;
}
