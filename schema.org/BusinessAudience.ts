// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAudience } from "./Audience.ts";

/** A set of characteristics belonging to businesses, e.g. who compose an item's target audience. */
export interface ClassBusinessAudience extends ClassAudience {
  /** The number of employees in an organization, e.g. business. */
  numberOfEmployees: Array<{ "@id": string }>;
  /** The size of the business in annual revenue. */
  yearlyRevenue: Array<{ "@id": string }>;
  /** The age of the business. */
  yearsInOperation: Array<{ "@id": string }>;
}
