// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTransferAction } from "./TransferAction.ts";

/** The act of returning to the origin that which was previously received (concrete objects) or taken (ownership). */
export interface ClassReturnAction extends ClassTransferAction {
  /** A sub property of participant. The participant who is at the receiving end of the action. */
  recipient: Array<{ "@id": string }>;
}
