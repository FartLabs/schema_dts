// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** Instructions that explain how to achieve a result by performing a sequence of steps. */
export interface ClassHowTo extends ClassCreativeWork {
  /** The estimated cost of the supply or supplies consumed when performing instructions. */
  estimatedCost: Array<string | { "@id": string }>;
  /** The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601). */
  performTime: Array<{ "@id": string }>;
  /** The length of time it takes to prepare the items to be used in instructions or a direction, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601). */
  prepTime: Array<{ "@id": string }>;
  /** A single step item (as HowToStep, text, document, video, etc.) or a HowToSection. */
  step: Array<string | { "@id": string }>;
  /** A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred). */
  steps: Array<string | { "@id": string }>;
  /** A sub-property of instrument. A supply consumed when performing instructions or a direction. */
  supply: Array<string | { "@id": string }>;
  /** A sub property of instrument. An object used (but not consumed) when performing instructions or a direction. */
  tool: Array<string | { "@id": string }>;
  /** The total time required to perform instructions or a direction (including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601). */
  totalTime: Array<{ "@id": string }>;
  /** The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles. */
  yield: Array<string | { "@id": string }>;
}
