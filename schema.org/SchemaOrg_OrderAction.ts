// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DeliveryMethod } from "labs/SchemaOrg_DeliveryMethod.ts";
import type { SchemaOrg_TradeAction } from "labs/SchemaOrg_TradeAction.ts";

/**
 * An agent orders an object/product/service to be delivered/sent.
 * @see https://schema.org/OrderAction
 */
export const SCHEMA_ORG_OrderAction = "https://schema.org/OrderAction" as const;

/**
 * An agent orders an object/product/service to be delivered/sent.
 * @see https://schema.org/OrderAction
 */
export interface SchemaOrg_OrderAction extends SchemaOrg_TradeAction {
    /**
     * A sub property of instrument. The method of delivery.
     * @see https://schema.org/deliveryMethod
     */
    deliveryMethod: Array<SchemaOrg_DeliveryMethod>;
}
