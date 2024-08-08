// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Energy } from "./SchemaOrg_Energy.ts";
import type { SchemaOrg_Mass } from "./SchemaOrg_Mass.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * Nutritional information about the recipe.
 * @see https://schema.org/NutritionInformation
 */
export const SCHEMA_ORG_NutritionInformation = "https://schema.org/NutritionInformation" as const;

/**
 * Nutritional information about the recipe.
 * @see https://schema.org/NutritionInformation
 */
export interface SchemaOrg_NutritionInformation extends SchemaOrg_StructuredValue {
    /**
     * The number of calories.
     * @see https://schema.org/calories
     */
    calories?: Array<SchemaOrg_Energy>;
    /**
     * The number of grams of carbohydrates.
     * @see https://schema.org/carbohydrateContent
     */
    carbohydrateContent?: Array<SchemaOrg_Mass>;
    /**
     * The number of milligrams of cholesterol.
     * @see https://schema.org/cholesterolContent
     */
    cholesterolContent?: Array<SchemaOrg_Mass>;
    /**
     * The number of grams of fat.
     * @see https://schema.org/fatContent
     */
    fatContent?: Array<SchemaOrg_Mass>;
    /**
     * The number of grams of fiber.
     * @see https://schema.org/fiberContent
     */
    fiberContent?: Array<SchemaOrg_Mass>;
    /**
     * The number of grams of protein.
     * @see https://schema.org/proteinContent
     */
    proteinContent?: Array<SchemaOrg_Mass>;
    /**
     * The number of grams of saturated fat.
     * @see https://schema.org/saturatedFatContent
     */
    saturatedFatContent?: Array<SchemaOrg_Mass>;
    /**
     * The serving size, in terms of the number of volume or mass.
     * @see https://schema.org/servingSize
     */
    servingSize?: Array<SchemaOrg_Text>;
    /**
     * The number of milligrams of sodium.
     * @see https://schema.org/sodiumContent
     */
    sodiumContent?: Array<SchemaOrg_Mass>;
    /**
     * The number of grams of sugar.
     * @see https://schema.org/sugarContent
     */
    sugarContent?: Array<SchemaOrg_Mass>;
    /**
     * The number of grams of trans fat.
     * @see https://schema.org/transFatContent
     */
    transFatContent?: Array<SchemaOrg_Mass>;
    /**
     * The number of grams of unsaturated fat.
     * @see https://schema.org/unsaturatedFatContent
     */
    unsaturatedFatContent?: Array<SchemaOrg_Mass>;
}
