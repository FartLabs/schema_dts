// DO NOT EDIT: This file is generated.
import type { SchemaOrg_BedDetails } from "./SchemaOrg_BedDetails.ts";
import type { SchemaOrg_BedType } from "./SchemaOrg_BedType.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Room } from "./SchemaOrg_Room.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A hotel room is a single room in a hotel.
 * <br /><br />
 * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 * @see https://schema.org/HotelRoom
 */
export const SCHEMA_ORG_HotelRoom = "https://schema.org/HotelRoom" as const;

/**
 * A hotel room is a single room in a hotel.
 * <br /><br />
 * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 * @see https://schema.org/HotelRoom
 */
export interface SchemaOrg_HotelRoom extends SchemaOrg_Room {
  /**
   * The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text.
   *       If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.
   * @see https://schema.org/bed
   */
  bed?: Array<SchemaOrg_BedType | SchemaOrg_Text | SchemaOrg_BedDetails>;
  /**
   * The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
   * Typical unit code(s): C62 for person.
   * @see https://schema.org/occupancy
   */
  occupancy?: Array<SchemaOrg_QuantitativeValue>;
}
