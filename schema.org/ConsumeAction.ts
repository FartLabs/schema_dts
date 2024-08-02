// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAction } from "./Action.ts";

/** The act of ingesting information/resources/food. */
export interface ClassConsumeAction extends ClassAction {
  /** A set of requirements that must be fulfilled in order to perform an Action. If more than one value is specified, fulfilling one set of requirements will allow the Action to be performed. */
  actionAccessibilityRequirement: Array<{ "@id": string }>;
  /** An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it. */
  expectsAcceptanceOf: Array<{ "@id": string }>;
}
