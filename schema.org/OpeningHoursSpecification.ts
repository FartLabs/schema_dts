// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/**
 * A structured value providing information about the opening hours of a place or a certain service inside a place.\n\n
 * The place is __open__ if the [[opens]] property is specified, and __closed__ otherwise.\n\nIf the value for the [[closes]] property is less than the value for the [[opens]] property then the hour range is assumed to span over the next day.
 */
export interface ClassOpeningHoursSpecification extends ClassStructuredValue {
  /** The closing hour of the place or service on the given day(s) of the week. */
  closes: Array<string>;
  /** The day of the week for which these opening hours are valid. */
  dayOfWeek: Array<{ "@id": string }>;
  /** The opening hour of the place or service on the given day(s) of the week. */
  opens: Array<string>;
  /** The date when the item becomes valid. */
  validFrom: Array<string>;
  /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours. */
  validThrough: Array<string>;
}
