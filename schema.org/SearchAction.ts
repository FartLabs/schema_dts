// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAction } from "./Action.ts";

/** The act of searching for an object.\n\nRelated actions:\n\n* [[FindAction]]: SearchAction generally leads to a FindAction, but not necessarily. */
export interface ClassSearchAction extends ClassAction {
  /** A sub property of instrument. The query used on this action. */
  query: Array<string>;
}
