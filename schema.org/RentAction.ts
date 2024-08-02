// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassTradeAction } from "./TradeAction.ts";

/** The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment. */
export interface ClassRentAction extends ClassTradeAction {
  /** A sub property of participant. The owner of the real estate property. */
  landlord: Array<{ "@id": string }>;
  /** A sub property of participant. The real estate agent involved in the action. */
  realEstateAgent: Array<{ "@id": string }>;
}
