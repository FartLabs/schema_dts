// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTransferAction } from "./TransferAction.ts";

/** The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.\n\nRelated actions:\n\n* [[LendAction]]: Reciprocal of BorrowAction. */
export interface ClassBorrowAction extends ClassTransferAction {
  /** A sub property of participant. The person that lends the object being borrowed. */
  lender: Array<{ "@id": string }>;
}
