// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassStructuredValue } from "./StructuredValue.ts";

/** Nutritional information about the recipe. */
export interface ClassNutritionInformation extends ClassStructuredValue {
  /** The number of calories. */
  calories: Array<{ "@id": string }>;
  /** The number of grams of carbohydrates. */
  carbohydrateContent: Array<{ "@id": string }>;
  /** The number of milligrams of cholesterol. */
  cholesterolContent: Array<{ "@id": string }>;
  /** The number of grams of fat. */
  fatContent: Array<{ "@id": string }>;
  /** The number of grams of fiber. */
  fiberContent: Array<{ "@id": string }>;
  /** The number of grams of protein. */
  proteinContent: Array<{ "@id": string }>;
  /** The number of grams of saturated fat. */
  saturatedFatContent: Array<{ "@id": string }>;
  /** The serving size, in terms of the number of volume or mass. */
  servingSize: Array<string>;
  /** The number of milligrams of sodium. */
  sodiumContent: Array<{ "@id": string }>;
  /** The number of grams of sugar. */
  sugarContent: Array<{ "@id": string }>;
  /** The number of grams of trans fat. */
  transFatContent: Array<{ "@id": string }>;
  /** The number of grams of unsaturated fat. */
  unsaturatedFatContent: Array<{ "@id": string }>;
}
