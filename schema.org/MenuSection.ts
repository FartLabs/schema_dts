// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider. */
export interface ClassMenuSection extends ClassCreativeWork {
  /** A food or drink item contained in a menu or menu section. */
  hasMenuItem: Array<{ "@id": string }>;
  /** A subgrouping of the menu (by dishes, course, serving time period, etc.). */
  hasMenuSection: Array<{ "@id": string }>;
}
