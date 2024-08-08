// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "./SchemaOrg_Audience.ts";
import type { SchemaOrg_DeliveryMethod } from "./SchemaOrg_DeliveryMethod.ts";
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_TransferAction } from "./SchemaOrg_TransferAction.ts";

/**
 * The act of physically/electronically taking delivery of an object that has been transferred from an origin to a destination. Reciprocal of SendAction.\n\nRelated actions:\n\n* [[SendAction]]: The reciprocal of ReceiveAction.\n* [[TakeAction]]: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transferred (e.g. I can receive a package, but it does not mean the package is now mine).
 * @see https://schema.org/ReceiveAction
 */
export const SCHEMA_ORG_ReceiveAction = "https://schema.org/ReceiveAction" as const;

/**
 * The act of physically/electronically taking delivery of an object that has been transferred from an origin to a destination. Reciprocal of SendAction.\n\nRelated actions:\n\n* [[SendAction]]: The reciprocal of ReceiveAction.\n* [[TakeAction]]: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transferred (e.g. I can receive a package, but it does not mean the package is now mine).
 * @see https://schema.org/ReceiveAction
 */
export interface SchemaOrg_ReceiveAction extends SchemaOrg_TransferAction {
    /**
     * A sub property of instrument. The method of delivery.
     * @see https://schema.org/deliveryMethod
     */
    deliveryMethod?: Array<SchemaOrg_DeliveryMethod>;
    /**
     * A sub property of participant. The participant who is at the sending end of the action.
     * @see https://schema.org/sender
     */
    sender?: Array<SchemaOrg_Audience | SchemaOrg_Organization | SchemaOrg_Person>;
}
