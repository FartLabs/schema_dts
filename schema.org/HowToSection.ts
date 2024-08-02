// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassListItem } from "./ListItem.ts";
import type { ClassCreativeWork } from "./CreativeWork.ts";
import type { ClassItemList } from "./ItemList.ts";

/** A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe). */
export interface ClassHowToSection
  extends ClassListItem, ClassCreativeWork, ClassItemList {
  /** A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred). */
  steps: Array<string | { "@id": string }>;
}
