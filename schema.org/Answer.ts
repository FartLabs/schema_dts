// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassComment } from "./Comment.ts";

/** An answer offered to a question; perhaps correct, perhaps opinionated or wrong. */
export interface ClassAnswer extends ClassComment {
  /** A step-by-step or full explanation about Answer. Can outline how this Answer was achieved or contain more broad clarification or statement about it. */
  answerExplanation: Array<{ "@id": string }>;
  /** The parent of a question, answer or item in general. Typically used for Q/A discussion threads e.g. a chain of comments with the first comment being an [[Article]] or other [[CreativeWork]]. See also [[comment]] which points from something to a comment about it. */
  parentItem: Array<{ "@id": string }>;
}
