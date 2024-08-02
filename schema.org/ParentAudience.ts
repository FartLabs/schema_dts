// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassPeopleAudience } from "./PeopleAudience.ts";

/** A set of characteristics describing parents, who can be interested in viewing some content. */
export interface ClassParentAudience extends ClassPeopleAudience {
  /** Maximal age of the child. */
  childMaxAge: Array<number>;
  /** Minimal age of the child. */
  childMinAge: Array<number>;
}
