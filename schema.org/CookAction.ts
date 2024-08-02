// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreateAction } from "./CreateAction.ts";

/** The act of producing/preparing food. */
export interface ClassCookAction extends ClassCreateAction {
  /** A sub property of location. The specific food establishment where the action occurred. */
  foodEstablishment: Array<{ "@id": string }>;
  /** A sub property of location. The specific food event where the action occurred. */
  foodEvent: Array<{ "@id": string }>;
  /** A sub property of instrument. The recipe/instructions used to perform the action. */
  recipe: Array<{ "@id": string }>;
}
