// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTransferAction } from "./TransferAction.ts";

/** The act of transferring money from one place to another place. This may occur electronically or physically. */
export interface ClassMoneyTransfer extends ClassTransferAction {
  /** The amount of money. */
  amount: Array<number | { "@id": string }>;
  /** A bank or bank’s branch, financial institution or international financial institution operating the beneficiary’s bank account or releasing funds for the beneficiary. */
  beneficiaryBank: Array<string | { "@id": string }>;
}
