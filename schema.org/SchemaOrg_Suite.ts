// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Accommodation } from "labs/SchemaOrg_Accommodation.ts";
import type { SchemaOrg_BedDetails } from "labs/SchemaOrg_BedDetails.ts";
import type { SchemaOrg_BedType } from "labs/SchemaOrg_BedType.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Suite_(hotel)">http://en.wikipedia.org/wiki/Suite_(hotel)</a>).
 * <br /><br />
 * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 * @see https://schema.org/Suite
 */
export const SCHEMA_ORG_Suite = "https://schema.org/Suite" as const;

/**
 * A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Suite_(hotel)">http://en.wikipedia.org/wiki/Suite_(hotel)</a>).
 * <br /><br />
 * See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 * @see https://schema.org/Suite
 */
export interface SchemaOrg_Suite extends SchemaOrg_Accommodation {
    /**
     * The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text.
     *       If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.
     * @see https://schema.org/bed
     */
    bed: Array<SchemaOrg_BedType | SchemaOrg_Text | SchemaOrg_BedDetails>;
    /**
     * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
     * Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
     * @see https://schema.org/numberOfRooms
     */
    numberOfRooms: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Number>;
    /**
     * The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
     * Typical unit code(s): C62 for person.
     * @see https://schema.org/occupancy
     */
    occupancy: Array<SchemaOrg_QuantitativeValue>;
}
