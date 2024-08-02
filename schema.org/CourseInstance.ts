// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassEvent } from "./Event.ts";

/** An instance of a [[Course]] which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students. */
export interface ClassCourseInstance extends ClassEvent {
  /** The medium or means of delivery of the course instance or the mode of study, either as a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or as a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous). */
  courseMode: Array<string | { "@id": string }>;
  /** Represents the length and pace of a course, expressed as a [[Schedule]]. */
  courseSchedule: Array<{ "@id": string }>;
  /** The amount of work expected of students taking the course, often provided as a figure per week or per month, and may be broken down by type. For example, "2 hours of lectures, 1 hour of lab work and 3 hours of independent study per week". */
  courseWorkload: Array<string>;
  /** A person assigned to instruct or provide instructional assistance for the [[CourseInstance]]. */
  instructor: Array<{ "@id": string }>;
}
