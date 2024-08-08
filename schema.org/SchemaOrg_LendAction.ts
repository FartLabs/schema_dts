// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_TransferAction } from "./SchemaOrg_TransferAction.ts";

/**
 * The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.\n\nRelated actions:\n\n* [[BorrowAction]]: Reciprocal of LendAction.
 * @see https://schema.org/LendAction
 */
export const SCHEMA_ORG_LendAction = "https://schema.org/LendAction" as const;

/**
 * The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.\n\nRelated actions:\n\n* [[BorrowAction]]: Reciprocal of LendAction.
 * @see https://schema.org/LendAction
 */
export interface SchemaOrg_LendAction extends SchemaOrg_TransferAction {
  /**
   * A sub property of participant. The person that borrows the object being lent.
   * @see https://schema.org/borrower
   */
  borrower?: Array<SchemaOrg_Person>;
}
