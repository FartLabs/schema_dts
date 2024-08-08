// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_TradeAction } from "./SchemaOrg_TradeAction.ts";
import type { SchemaOrg_WarrantyPromise } from "./SchemaOrg_WarrantyPromise.ts";

/**
 * The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction.
 * @see https://schema.org/BuyAction
 */
export const SCHEMA_ORG_BuyAction = "https://schema.org/BuyAction" as const;

/**
 * The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction.
 * @see https://schema.org/BuyAction
 */
export interface SchemaOrg_BuyAction extends SchemaOrg_TradeAction {
  /**
   * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
   * @see https://schema.org/seller
   */
  seller?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * 'vendor' is an earlier term for 'seller'.
   * @see https://schema.org/vendor
   */
  vendor?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * The warranty promise(s) included in the offer.
   * @see https://schema.org/warrantyPromise
   */
  warrantyPromise?: Array<SchemaOrg_WarrantyPromise>;
}
