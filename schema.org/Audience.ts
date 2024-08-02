// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassIntangible } from "./Intangible.ts";

/** Intended audience for an item, i.e. the group for whom the item was created. */
export interface ClassAudience extends ClassIntangible {
  /** The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.). */
  audienceType: Array<string>;
  /** The geographic area associated with the audience. */
  geographicArea: Array<{ "@id": string }>;
}
