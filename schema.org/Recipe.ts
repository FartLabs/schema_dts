// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassHowTo } from "./HowTo.ts";

/** A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet]]. The [[keywords]] property can also be used to add more detail. */
export interface ClassRecipe extends ClassHowTo {
  /** The time it takes to actually cook the dish, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601). */
  cookTime: Array<{ "@id": string }>;
  /** The method of cooking, such as Frying, Steaming, ... */
  cookingMethod: Array<string>;
  /** A single ingredient used in the recipe, e.g. sugar, flour or garlic. */
  ingredients: Array<string>;
  /** Nutrition information about the recipe or menu item. */
  nutrition: Array<{ "@id": string }>;
  /** The category of the recipe—for example, appetizer, entree, etc. */
  recipeCategory: Array<string>;
  /** The cuisine of the recipe (for example, French or Ethiopian). */
  recipeCuisine: Array<string>;
  /** A single ingredient used in the recipe, e.g. sugar, flour or garlic. */
  recipeIngredient: Array<string>;
  /** A step in making the recipe, in the form of a single item (document, video, etc.) or an ordered list with HowToStep and/or HowToSection items. */
  recipeInstructions: Array<string | { "@id": string }>;
  /** The quantity produced by the recipe (for example, number of people served, number of servings, etc). */
  recipeYield: Array<string | { "@id": string }>;
  /** Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc. */
  suitableForDiet: Array<{ "@id": string }>;
}
