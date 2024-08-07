// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "labs/SchemaOrg_Audience.ts";
import type { SchemaOrg_ContactPoint } from "labs/SchemaOrg_ContactPoint.ts";
import type { SchemaOrg_DeliveryMethod } from "labs/SchemaOrg_DeliveryMethod.ts";
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_TransferAction } from "labs/SchemaOrg_TransferAction.ts";

/**
 * The act of physically/electronically dispatching an object for transfer from an origin to a destination. Related actions:\n\n* [[ReceiveAction]]: The reciprocal of SendAction.\n* [[GiveAction]]: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you).
 * @see https://schema.org/SendAction
 */
export const SCHEMA_ORG_SendAction = "https://schema.org/SendAction" as const;

/**
 * The act of physically/electronically dispatching an object for transfer from an origin to a destination. Related actions:\n\n* [[ReceiveAction]]: The reciprocal of SendAction.\n* [[GiveAction]]: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you).
 * @see https://schema.org/SendAction
 */
export interface SchemaOrg_SendAction extends SchemaOrg_TransferAction {
    /**
     * A sub property of instrument. The method of delivery.
     * @see https://schema.org/deliveryMethod
     */
    deliveryMethod: Array<SchemaOrg_DeliveryMethod>;
    /**
     * A sub property of participant. The participant who is at the receiving end of the action.
     * @see https://schema.org/recipient
     */
    recipient: Array<SchemaOrg_Audience | SchemaOrg_Organization | SchemaOrg_Person | SchemaOrg_ContactPoint>;
}
