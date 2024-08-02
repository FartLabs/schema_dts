// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassEvent } from "./Event.ts";

/** Event type: Education event. */
export interface ClassEducationEvent extends ClassEvent {
  /** The item being described is intended to assess the competency or learning outcome defined by the referenced term. */
  assesses: Array<string | { "@id": string }>;
  /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators. */
  educationalLevel: Array<string | { "@id": string }>;
  /** The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term. */
  teaches: Array<string | { "@id": string }>;
}
