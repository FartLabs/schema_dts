// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Accommodation } from "./SchemaOrg_Accommodation.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";

/**
 * A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/House">http://en.wikipedia.org/wiki/House</a>).
 * @see https://schema.org/House
 */
export const SCHEMA_ORG_House = "https://schema.org/House" as const;

/**
 * A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/House">http://en.wikipedia.org/wiki/House</a>).
 * @see https://schema.org/House
 */
export interface SchemaOrg_House extends SchemaOrg_Accommodation {
    /**
     * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
     * Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
     * @see https://schema.org/numberOfRooms
     */
    numberOfRooms?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Number>;
}
