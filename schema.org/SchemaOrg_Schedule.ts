// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Date } from "./SchemaOrg_Date.ts";
import type { SchemaOrg_DateTime } from "./SchemaOrg_DateTime.ts";
import type { SchemaOrg_DayOfWeek } from "./SchemaOrg_DayOfWeek.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Integer } from "./SchemaOrg_Integer.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Time } from "./SchemaOrg_Time.ts";

/**
 * A schedule defines a repeating time period used to describe a regularly occurring [[Event]]. At a minimum a schedule will specify [[repeatFrequency]] which describes the interval between occurrences of the event. Additional information can be provided to specify the schedule more precisely.
 *       This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also
 *       have start and end dates to indicate when they are active, e.g. to define a limited calendar of events.
 * @see https://schema.org/Schedule
 */
export const SCHEMA_ORG_Schedule = "https://schema.org/Schedule" as const;

/**
 * A schedule defines a repeating time period used to describe a regularly occurring [[Event]]. At a minimum a schedule will specify [[repeatFrequency]] which describes the interval between occurrences of the event. Additional information can be provided to specify the schedule more precisely.
 *       This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also
 *       have start and end dates to indicate when they are active, e.g. to define a limited calendar of events.
 * @see https://schema.org/Schedule
 */
export interface SchemaOrg_Schedule extends SchemaOrg_Intangible {
  /**
   * Defines the day(s) of the week on which a recurring [[Event]] takes place. May be specified using either [[DayOfWeek]], or alternatively [[Text]] conforming to iCal's syntax for byDay recurrence rules.
   * @see https://schema.org/byDay
   */
  byDay?: Array<SchemaOrg_Text | SchemaOrg_DayOfWeek>;
  /**
   * Defines the month(s) of the year on which a recurring [[Event]] takes place. Specified as an [[Integer]] between 1-12. January is 1.
   * @see https://schema.org/byMonth
   */
  byMonth?: Array<SchemaOrg_Integer>;
  /**
   * Defines the day(s) of the month on which a recurring [[Event]] takes place. Specified as an [[Integer]] between 1-31.
   * @see https://schema.org/byMonthDay
   */
  byMonthDay?: Array<SchemaOrg_Integer>;
  /**
   * Defines the week(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-5. For clarity, byMonthWeek is best used in conjunction with byDay to indicate concepts like the first and third Mondays of a month.
   * @see https://schema.org/byMonthWeek
   */
  byMonthWeek?: Array<SchemaOrg_Integer>;
  /**
   * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
   * @see https://schema.org/duration
   */
  duration?: Array<SchemaOrg_Duration>;
  /**
   * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
   * @see https://schema.org/endDate
   */
  endDate?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
  /**
   * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   * @see https://schema.org/endTime
   */
  endTime?: Array<SchemaOrg_Time | SchemaOrg_DateTime>;
  /**
   * Defines a [[Date]] or [[DateTime]] during which a scheduled [[Event]] will not take place. The property allows exceptions to
   *       a [[Schedule]] to be specified. If an exception is specified as a [[DateTime]] then only the event that would have started at that specific date and time
   *       should be excluded from the schedule. If an exception is specified as a [[Date]] then any event that is scheduled for that 24 hour period should be
   *       excluded from the schedule. This allows a whole day to be excluded from the schedule without having to itemise every scheduled event.
   * @see https://schema.org/exceptDate
   */
  exceptDate?: Array<SchemaOrg_DateTime | SchemaOrg_Date>;
  /**
   * Defines the number of times a recurring [[Event]] will take place.
   * @see https://schema.org/repeatCount
   */
  repeatCount?: Array<SchemaOrg_Integer>;
  /**
   * Defines the frequency at which [[Event]]s will occur according to a schedule [[Schedule]]. The intervals between
   *       events should be defined as a [[Duration]] of time.
   * @see https://schema.org/repeatFrequency
   */
  repeatFrequency?: Array<SchemaOrg_Duration | SchemaOrg_Text>;
  /**
   * Indicates the timezone for which the time(s) indicated in the [[Schedule]] are given. The value provided should be among those listed in the IANA Time Zone Database.
   * @see https://schema.org/scheduleTimezone
   */
  scheduleTimezone?: Array<SchemaOrg_Text>;
  /**
   * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
   * @see https://schema.org/startDate
   */
  startDate?: Array<SchemaOrg_Date | SchemaOrg_DateTime>;
  /**
   * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   * @see https://schema.org/startTime
   */
  startTime?: Array<SchemaOrg_DateTime | SchemaOrg_Time>;
}
