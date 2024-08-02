// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTransferAction } from "./TransferAction.ts";

/** The act of physically/electronically taking delivery of an object that has been transferred from an origin to a destination. Reciprocal of SendAction.\n\nRelated actions:\n\n* [[SendAction]]: The reciprocal of ReceiveAction.\n* [[TakeAction]]: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transferred (e.g. I can receive a package, but it does not mean the package is now mine). */
export interface ClassReceiveAction extends ClassTransferAction {
  /** A sub property of instrument. The method of delivery. */
  deliveryMethod: Array<{ "@id": string }>;
  /** A sub property of participant. The participant who is at the sending end of the action. */
  sender: Array<{ "@id": string }>;
}
