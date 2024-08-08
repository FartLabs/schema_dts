// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Accommodation } from "./SchemaOrg_Accommodation.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";

/**
 * An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Apartment">http://en.wikipedia.org/wiki/Apartment</a>).
 * @see https://schema.org/Apartment
 */
export const SCHEMA_ORG_Apartment = "https://schema.org/Apartment" as const;

/**
 * An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Apartment">http://en.wikipedia.org/wiki/Apartment</a>).
 * @see https://schema.org/Apartment
 */
export interface SchemaOrg_Apartment extends SchemaOrg_Accommodation {
  /**
   * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
   * Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
   * @see https://schema.org/numberOfRooms
   */
  numberOfRooms?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Number>;
  /**
   * The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
   * Typical unit code(s): C62 for person.
   * @see https://schema.org/occupancy
   */
  occupancy?: Array<SchemaOrg_QuantitativeValue>;
}
