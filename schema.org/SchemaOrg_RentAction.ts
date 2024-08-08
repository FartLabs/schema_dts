// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Organization } from "./SchemaOrg_Organization.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_RealEstateAgent } from "./SchemaOrg_RealEstateAgent.ts";
import type { SchemaOrg_TradeAction } from "./SchemaOrg_TradeAction.ts";

/**
 * The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment.
 * @see https://schema.org/RentAction
 */
export const SCHEMA_ORG_RentAction = "https://schema.org/RentAction" as const;

/**
 * The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment.
 * @see https://schema.org/RentAction
 */
export interface SchemaOrg_RentAction extends SchemaOrg_TradeAction {
  /**
   * A sub property of participant. The owner of the real estate property.
   * @see https://schema.org/landlord
   */
  landlord?: Array<SchemaOrg_Organization | SchemaOrg_Person>;
  /**
   * A sub property of participant. The real estate agent involved in the action.
   * @see https://schema.org/realEstateAgent
   */
  realEstateAgent?: Array<SchemaOrg_RealEstateAgent>;
}
