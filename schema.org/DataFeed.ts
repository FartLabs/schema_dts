// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassDataset } from "./Dataset.ts";

/** A single feed providing structured information about one or more entities or topics. */
export interface ClassDataFeed extends ClassDataset {
  /** An item within a data feed. Data feeds may have many elements. */
  dataFeedElement: Array<string | { "@id": string }>;
}
