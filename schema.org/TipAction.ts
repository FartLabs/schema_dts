// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTradeAction } from "./TradeAction.ts";

/** The act of giving money voluntarily to a beneficiary in recognition of services rendered. */
export interface ClassTipAction extends ClassTradeAction {
  /** A sub property of participant. The participant who is at the receiving end of the action. */
  recipient: Array<{ "@id": string }>;
}
