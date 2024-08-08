// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";

/**
 * A statistical distribution of values.
 * @see https://schema.org/QuantitativeValueDistribution
 */
export const SCHEMA_ORG_QuantitativeValueDistribution =
  "https://schema.org/QuantitativeValueDistribution" as const;

/**
 * A statistical distribution of values.
 * @see https://schema.org/QuantitativeValueDistribution
 */
export interface SchemaOrg_QuantitativeValueDistribution
  extends SchemaOrg_StructuredValue {
  /**
   * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
   * @see https://schema.org/duration
   */
  duration?: Array<SchemaOrg_Duration>;
  /**
   * The median value.
   * @see https://schema.org/median
   */
  median?: Array<SchemaOrg_Number>;
  /**
   * The 10th percentile value.
   * @see https://schema.org/percentile10
   */
  percentile10?: Array<SchemaOrg_Number>;
  /**
   * The 25th percentile value.
   * @see https://schema.org/percentile25
   */
  percentile25?: Array<SchemaOrg_Number>;
  /**
   * The 75th percentile value.
   * @see https://schema.org/percentile75
   */
  percentile75?: Array<SchemaOrg_Number>;
  /**
   * The 90th percentile value.
   * @see https://schema.org/percentile90
   */
  percentile90?: Array<SchemaOrg_Number>;
}
