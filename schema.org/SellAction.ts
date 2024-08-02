// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTradeAction } from "./TradeAction.ts";

/** The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction. */
export interface ClassSellAction extends ClassTradeAction {
  /** A sub property of participant. The participant/person/organization that bought the object. */
  buyer: Array<{ "@id": string }>;
  /** The warranty promise(s) included in the offer. */
  warrantyPromise: Array<{ "@id": string }>;
}
