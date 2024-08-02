// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTradeAction } from "./TradeAction.ts";

/** The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction. */
export interface ClassBuyAction extends ClassTradeAction {
  /** An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider. */
  seller: Array<{ "@id": string }>;
  /** 'vendor' is an earlier term for 'seller'. */
  vendor: Array<{ "@id": string }>;
  /** The warranty promise(s) included in the offer. */
  warrantyPromise: Array<{ "@id": string }>;
}
