// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Action } from "./SchemaOrg_Action.ts";
import type { SchemaOrg_ActionAccessSpecification } from "./SchemaOrg_ActionAccessSpecification.ts";
import type { SchemaOrg_Offer } from "./SchemaOrg_Offer.ts";

/**
 * The act of ingesting information/resources/food.
 * @see https://schema.org/ConsumeAction
 */
export const SCHEMA_ORG_ConsumeAction =
  "https://schema.org/ConsumeAction" as const;

/**
 * The act of ingesting information/resources/food.
 * @see https://schema.org/ConsumeAction
 */
export interface SchemaOrg_ConsumeAction extends SchemaOrg_Action {
  /**
   * A set of requirements that must be fulfilled in order to perform an Action. If more than one value is specified, fulfilling one set of requirements will allow the Action to be performed.
   * @see https://schema.org/actionAccessibilityRequirement
   */
  actionAccessibilityRequirement?: Array<SchemaOrg_ActionAccessSpecification>;
  /**
   * An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.
   * @see https://schema.org/expectsAcceptanceOf
   */
  expectsAcceptanceOf?: Array<SchemaOrg_Offer>;
}
