// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassHouse } from "./House.ts";

/** Residence type: Single-family home. */
export interface ClassSingleFamilyResidence extends ClassHouse {
  /**
   * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
   * Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
   */
  numberOfRooms: Array<number | { "@id": string }>;
  /**
   * The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
   * Typical unit code(s): C62 for person.
   */
  occupancy: Array<{ "@id": string }>;
}
