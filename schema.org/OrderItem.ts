// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** An order item is a line of an order. It includes the quantity and shipping details of a bought offer. */
export interface ClassOrderItem extends ClassIntangible {
  /** The delivery of the parcel related to this order or order item. */
  orderDelivery: Array<{ "@id": string }>;
  /** The identifier of the order item. */
  orderItemNumber: Array<string>;
  /** The current status of the order item. */
  orderItemStatus: Array<{ "@id": string }>;
  /** The number of the item ordered. If the property is not set, assume the quantity is one. */
  orderQuantity: Array<number>;
  /** The item ordered. */
  orderedItem: Array<{ "@id": string }>;
}
