// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAllocateAction } from "./AllocateAction.ts";

/** The act of granting permission to an object. */
export interface ClassAuthorizeAction extends ClassAllocateAction {
  /** A sub property of participant. The participant who is at the receiving end of the action. */
  recipient: Array<{ "@id": string }>;
}
