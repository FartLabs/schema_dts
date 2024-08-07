// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Organization } from "labs/SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_TradeAction } from "labs/SchemaOrg_TradeAction.ts";
import type { SchemaOrg_WarrantyPromise } from "labs/SchemaOrg_WarrantyPromise.ts";

/**
 * The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction.
 * @see https://schema.org/SellAction
 */
export const SCHEMA_ORG_SellAction = "https://schema.org/SellAction" as const;

/**
 * The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction.
 * @see https://schema.org/SellAction
 */
export interface SchemaOrg_SellAction extends SchemaOrg_TradeAction {
    /**
     * A sub property of participant. The participant/person/organization that bought the object.
     * @see https://schema.org/buyer
     */
    buyer: Array<SchemaOrg_Organization | SchemaOrg_Person>;
    /**
     * The warranty promise(s) included in the offer.
     * @see https://schema.org/warrantyPromise
     */
    warrantyPromise: Array<SchemaOrg_WarrantyPromise>;
}
