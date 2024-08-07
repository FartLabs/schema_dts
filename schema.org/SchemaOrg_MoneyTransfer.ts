// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BankOrCreditUnion } from "labs/SchemaOrg_BankOrCreditUnion.ts";
import type { SchemaOrg_MonetaryAmount } from "labs/SchemaOrg_MonetaryAmount.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";
import type { SchemaOrg_TransferAction } from "labs/SchemaOrg_TransferAction.ts";

/**
 * The act of transferring money from one place to another place. This may occur electronically or physically.
 * @see https://schema.org/MoneyTransfer
 */
export const SCHEMA_ORG_MoneyTransfer = "https://schema.org/MoneyTransfer" as const;

/**
 * The act of transferring money from one place to another place. This may occur electronically or physically.
 * @see https://schema.org/MoneyTransfer
 */
export interface SchemaOrg_MoneyTransfer extends SchemaOrg_TransferAction {
    /**
     * The amount of money.
     * @see https://schema.org/amount
     */
    amount: Array<SchemaOrg_MonetaryAmount | SchemaOrg_Number>;
    /**
     * A bank or bank’s branch, financial institution or international financial institution operating the beneficiary’s bank account or releasing funds for the beneficiary.
     * @see https://schema.org/beneficiaryBank
     */
    beneficiaryBank: Array<SchemaOrg_Text | SchemaOrg_BankOrCreditUnion>;
}
