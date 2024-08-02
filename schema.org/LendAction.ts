// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTransferAction } from "./TransferAction.ts";

/** The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.\n\nRelated actions:\n\n* [[BorrowAction]]: Reciprocal of LendAction. */
export interface ClassLendAction extends ClassTransferAction {
  /** A sub property of participant. The person that borrows the object being lent. */
  borrower: Array<{ "@id": string }>;
}
