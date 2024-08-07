// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Intangible } from "labs/SchemaOrg_Intangible.ts";
import type { SchemaOrg_QualitativeValue } from "labs/SchemaOrg_QualitativeValue.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * Used to describe a seat, such as a reserved seat in an event reservation.
 * @see https://schema.org/Seat
 */
export const SCHEMA_ORG_Seat = "https://schema.org/Seat" as const;

/**
 * Used to describe a seat, such as a reserved seat in an event reservation.
 * @see https://schema.org/Seat
 */
export interface SchemaOrg_Seat extends SchemaOrg_Intangible {
    /**
     * The location of the reserved seat (e.g., 27).
     * @see https://schema.org/seatNumber
     */
    seatNumber: Array<SchemaOrg_Text>;
    /**
     * The row location of the reserved seat (e.g., B).
     * @see https://schema.org/seatRow
     */
    seatRow: Array<SchemaOrg_Text>;
    /**
     * The section location of the reserved seat (e.g. Orchestra).
     * @see https://schema.org/seatSection
     */
    seatSection: Array<SchemaOrg_Text>;
    /**
     * The type/class of the seat.
     * @see https://schema.org/seatingType
     */
    seatingType: Array<SchemaOrg_Text | SchemaOrg_QualitativeValue>;
}
