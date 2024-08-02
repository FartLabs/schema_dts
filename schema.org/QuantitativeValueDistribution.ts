// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** A statistical distribution of values. */
export interface ClassQuantitativeValueDistribution
  extends ClassStructuredValue {
  /** The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). */
  duration: Array<{ "@id": string }>;
  /** The median value. */
  median: Array<number>;
  /** The 10th percentile value. */
  percentile10: Array<number>;
  /** The 25th percentile value. */
  percentile25: Array<number>;
  /** The 75th percentile value. */
  percentile75: Array<number>;
  /** The 90th percentile value. */
  percentile90: Array<number>;
}
