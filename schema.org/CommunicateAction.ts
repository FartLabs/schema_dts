// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassInteractAction } from "./InteractAction.ts";

/** The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation. */
export interface ClassCommunicateAction extends ClassInteractAction {
  /** The subject matter of the content. */
  about: Array<{ "@id": string }>;
  /** The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]]. */
  inLanguage: Array<string | { "@id": string }>;
  /** A sub property of instrument. The language used on this action. */
  language: Array<{ "@id": string }>;
  /** A sub property of participant. The participant who is at the receiving end of the action. */
  recipient: Array<{ "@id": string }>;
}
