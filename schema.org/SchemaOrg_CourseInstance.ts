// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Event } from "./SchemaOrg_Event.ts";
import type { SchemaOrg_Person } from "./SchemaOrg_Person.ts";
import type { SchemaOrg_Schedule } from "./SchemaOrg_Schedule.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * An instance of a [[Course]] which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students.
 * @see https://schema.org/CourseInstance
 */
export const SCHEMA_ORG_CourseInstance = "https://schema.org/CourseInstance" as const;

/**
 * An instance of a [[Course]] which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students.
 * @see https://schema.org/CourseInstance
 */
export interface SchemaOrg_CourseInstance extends SchemaOrg_Event {
    /**
     * The medium or means of delivery of the course instance or the mode of study, either as a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or as a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous).
     * @see https://schema.org/courseMode
     */
    courseMode?: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * Represents the length and pace of a course, expressed as a [[Schedule]].
     * @see https://schema.org/courseSchedule
     */
    courseSchedule?: Array<SchemaOrg_Schedule>;
    /**
     * The amount of work expected of students taking the course, often provided as a figure per week or per month, and may be broken down by type. For example, "2 hours of lectures, 1 hour of lab work and 3 hours of independent study per week".
     * @see https://schema.org/courseWorkload
     */
    courseWorkload?: Array<SchemaOrg_Text>;
    /**
     * A person assigned to instruct or provide instructional assistance for the [[CourseInstance]].
     * @see https://schema.org/instructor
     */
    instructor?: Array<SchemaOrg_Person>;
}
