// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_HowTo } from "./SchemaOrg_HowTo.ts";
import type { SchemaOrg_ItemList } from "./SchemaOrg_ItemList.ts";
import type { SchemaOrg_NutritionInformation } from "./SchemaOrg_NutritionInformation.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_RestrictedDiet } from "./SchemaOrg_RestrictedDiet.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet]]. The [[keywords]] property can also be used to add more detail.
 * @see https://schema.org/Recipe
 */
export const SCHEMA_ORG_Recipe = "https://schema.org/Recipe" as const;

/**
 * A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet]]. The [[keywords]] property can also be used to add more detail.
 * @see https://schema.org/Recipe
 */
export interface SchemaOrg_Recipe extends SchemaOrg_HowTo {
  /**
   * The time it takes to actually cook the dish, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
   * @see https://schema.org/cookTime
   */
  cookTime?: Array<SchemaOrg_Duration>;
  /**
   * The method of cooking, such as Frying, Steaming, ...
   * @see https://schema.org/cookingMethod
   */
  cookingMethod?: Array<SchemaOrg_Text>;
  /**
   * A single ingredient used in the recipe, e.g. sugar, flour or garlic.
   * @see https://schema.org/ingredients
   */
  ingredients?: Array<SchemaOrg_Text>;
  /**
   * Nutrition information about the recipe or menu item.
   * @see https://schema.org/nutrition
   */
  nutrition?: Array<SchemaOrg_NutritionInformation>;
  /**
   * The category of the recipe—for example, appetizer, entree, etc.
   * @see https://schema.org/recipeCategory
   */
  recipeCategory?: Array<SchemaOrg_Text>;
  /**
   * The cuisine of the recipe (for example, French or Ethiopian).
   * @see https://schema.org/recipeCuisine
   */
  recipeCuisine?: Array<SchemaOrg_Text>;
  /**
   * A single ingredient used in the recipe, e.g. sugar, flour or garlic.
   * @see https://schema.org/recipeIngredient
   */
  recipeIngredient?: Array<SchemaOrg_Text>;
  /**
   * A step in making the recipe, in the form of a single item (document, video, etc.) or an ordered list with HowToStep and/or HowToSection items.
   * @see https://schema.org/recipeInstructions
   */
  recipeInstructions?: Array<
    SchemaOrg_CreativeWork | SchemaOrg_ItemList | SchemaOrg_Text
  >;
  /**
   * The quantity produced by the recipe (for example, number of people served, number of servings, etc).
   * @see https://schema.org/recipeYield
   */
  recipeYield?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Text>;
  /**
   * Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.
   * @see https://schema.org/suitableForDiet
   */
  suitableForDiet?: Array<SchemaOrg_RestrictedDiet>;
}
