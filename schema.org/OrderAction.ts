// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTradeAction } from "./TradeAction.ts";

/** An agent orders an object/product/service to be delivered/sent. */
export interface ClassOrderAction extends ClassTradeAction {
  /** A sub property of instrument. The method of delivery. */
  deliveryMethod: Array<{ "@id": string }>;
}
