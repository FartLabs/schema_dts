// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassHowToItem } from "./HowToItem.ts";

/** A supply consumed when performing the instructions for how to achieve a result. */
export interface ClassHowToSupply extends ClassHowToItem {
  /** The estimated cost of the supply or supplies consumed when performing instructions. */
  estimatedCost: Array<string | { "@id": string }>;
}
