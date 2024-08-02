// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassArticle } from "./Article.ts";

/** A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc. */
export interface ClassTechArticle extends ClassArticle {
  /** Prerequisites needed to fulfill steps in article. */
  dependencies: Array<string>;
  /** Proficiency needed for this content; expected values: 'Beginner', 'Expert'. */
  proficiencyLevel: Array<string>;
}
