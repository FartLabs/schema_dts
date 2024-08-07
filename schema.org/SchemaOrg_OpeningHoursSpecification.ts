// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Date } from "labs/SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "labs/SchemaOrg_DateTime.ts";
import type { SchemaOrg_DayOfWeek } from "labs/SchemaOrg_DayOfWeek.ts";
import type { SchemaOrg_StructuredValue } from "labs/SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Time } from "labs/SchemaOrg_Time.ts";

/**
 * A structured value providing information about the opening hours of a place or a certain service inside a place.\n\n
 * The place is __open__ if the [[opens]] property is specified, and __closed__ otherwise.\n\nIf the value for the [[closes]] property is less than the value for the [[opens]] property then the hour range is assumed to span over the next day.
 * @see https://schema.org/OpeningHoursSpecification
 */
export const SCHEMA_ORG_OpeningHoursSpecification = "https://schema.org/OpeningHoursSpecification" as const;

/**
 * A structured value providing information about the opening hours of a place or a certain service inside a place.\n\n
 * The place is __open__ if the [[opens]] property is specified, and __closed__ otherwise.\n\nIf the value for the [[closes]] property is less than the value for the [[opens]] property then the hour range is assumed to span over the next day.
 * @see https://schema.org/OpeningHoursSpecification
 */
export interface SchemaOrg_OpeningHoursSpecification extends SchemaOrg_StructuredValue {
    /**
     * The closing hour of the place or service on the given day(s) of the week.
     * @see https://schema.org/closes
     */
    closes: Array<SchemaOrg_Time>;
    /**
     * The day of the week for which these opening hours are valid.
     * @see https://schema.org/dayOfWeek
     */
    dayOfWeek: Array<SchemaOrg_DayOfWeek>;
    /**
     * The opening hour of the place or service on the given day(s) of the week.
     * @see https://schema.org/opens
     */
    opens: Array<SchemaOrg_Time>;
    /**
     * The date when the item becomes valid.
     * @see https://schema.org/validFrom
     */
    validFrom: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
    /**
     * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     * @see https://schema.org/validThrough
     */
    validThrough: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
}
