// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_TransferAction } from "labs/SchemaOrg_TransferAction.ts";

/**
 * The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.\n\nRelated actions:\n\n* [[LendAction]]: Reciprocal of BorrowAction.
 * @see https://schema.org/BorrowAction
 */
export const SCHEMA_ORG_BorrowAction = "https://schema.org/BorrowAction" as const;

/**
 * The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.\n\nRelated actions:\n\n* [[LendAction]]: Reciprocal of BorrowAction.
 * @see https://schema.org/BorrowAction
 */
export interface SchemaOrg_BorrowAction extends SchemaOrg_TransferAction {
    /**
     * A sub property of participant. The person that lends the object being borrowed.
     * @see https://schema.org/lender
     */
    lender: Array<SchemaOrg_Organization | SchemaOrg_Person>;
}
