// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTransferAction } from "./TransferAction.ts";

/** The act of physically/electronically dispatching an object for transfer from an origin to a destination. Related actions:\n\n* [[ReceiveAction]]: The reciprocal of SendAction.\n* [[GiveAction]]: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you). */
export interface ClassSendAction extends ClassTransferAction {
  /** A sub property of instrument. The method of delivery. */
  deliveryMethod: Array<{ "@id": string }>;
  /** A sub property of participant. The participant who is at the receiving end of the action. */
  recipient: Array<{ "@id": string }>;
}
