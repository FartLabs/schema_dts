// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_OrderItem } from "labs/SchemaOrg_OrderItem.ts";
import type { SchemaOrg_OrderStatus } from "labs/SchemaOrg_OrderStatus.ts";
import type { SchemaOrg_ParcelDelivery } from "labs/SchemaOrg_ParcelDelivery.ts";
import type { SchemaOrg_Product } from "labs/SchemaOrg_Product.ts";
import type { SchemaOrg_Service } from "labs/SchemaOrg_Service.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * An order item is a line of an order. It includes the quantity and shipping details of a bought offer.
 * @see https://schema.org/OrderItem
 */
export const SCHEMA_ORG_OrderItem = "https://schema.org/OrderItem" as const;

/**
 * An order item is a line of an order. It includes the quantity and shipping details of a bought offer.
 * @see https://schema.org/OrderItem
 */
export interface SchemaOrg_OrderItem extends SchemaOrg_Intangible {
    /**
     * The delivery of the parcel related to this order or order item.
     * @see https://schema.org/orderDelivery
     */
    orderDelivery: Array<SchemaOrg_ParcelDelivery>;
    /**
     * The identifier of the order item.
     * @see https://schema.org/orderItemNumber
     */
    orderItemNumber: Array<SchemaOrg_Text>;
    /**
     * The current status of the order item.
     * @see https://schema.org/orderItemStatus
     */
    orderItemStatus: Array<SchemaOrg_OrderStatus>;
    /**
     * The number of the item ordered. If the property is not set, assume the quantity is one.
     * @see https://schema.org/orderQuantity
     */
    orderQuantity: Array<SchemaOrg_Number>;
    /**
     * The item ordered.
     * @see https://schema.org/orderedItem
     */
    orderedItem: Array<SchemaOrg_Product | SchemaOrg_OrderItem | SchemaOrg_Service>;
}
