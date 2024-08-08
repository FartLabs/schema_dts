// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreateAction } from "./SchemaOrg_CreateAction.ts";
import type { SchemaOrg_FoodEstablishment } from "./SchemaOrg_FoodEstablishment.ts";
import type { SchemaOrg_FoodEvent } from "./SchemaOrg_FoodEvent.ts";
import type { SchemaOrg_Place } from "./SchemaOrg_Place.ts";
import type { SchemaOrg_Recipe } from "./SchemaOrg_Recipe.ts";

/**
 * The act of producing/preparing food.
 * @see https://schema.org/CookAction
 */
export const SCHEMA_ORG_CookAction = "https://schema.org/CookAction" as const;

/**
 * The act of producing/preparing food.
 * @see https://schema.org/CookAction
 */
export interface SchemaOrg_CookAction extends SchemaOrg_CreateAction {
  /**
   * A sub property of location. The specific food establishment where the action occurred.
   * @see https://schema.org/foodEstablishment
   */
  foodEstablishment?: Array<SchemaOrg_Place | SchemaOrg_FoodEstablishment>;
  /**
   * A sub property of location. The specific food event where the action occurred.
   * @see https://schema.org/foodEvent
   */
  foodEvent?: Array<SchemaOrg_FoodEvent>;
  /**
   * A sub property of instrument. The recipe/instructions used to perform the action.
   * @see https://schema.org/recipe
   */
  recipe?: Array<SchemaOrg_Recipe>;
}
