// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";

/** A structured representation of food or drink items available from a FoodEstablishment. */
export interface ClassMenu extends ClassCreativeWork {
  /** A food or drink item contained in a menu or menu section. */
  hasMenuItem: Array<{ "@id": string }>;
  /** A subgrouping of the menu (by dishes, course, serving time period, etc.). */
  hasMenuSection: Array<{ "@id": string }>;
}
