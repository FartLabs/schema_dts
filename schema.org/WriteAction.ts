// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreateAction } from "./CreateAction.ts";

/** The act of authoring written creative content. */
export interface ClassWriteAction extends ClassCreateAction {
  /** The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]]. */
  inLanguage: Array<string | { "@id": string }>;
  /** A sub property of instrument. The language used on this action. */
  language: Array<{ "@id": string }>;
}
