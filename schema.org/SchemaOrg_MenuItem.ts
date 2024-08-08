// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Demand } from "./SchemaOrg_Demand.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_MenuItem } from "./SchemaOrg_MenuItem.ts";
import type { SchemaOrg_MenuSection } from "./SchemaOrg_MenuSection.ts";
import type { SchemaOrg_NutritionInformation } from "./SchemaOrg_NutritionInformation.ts";
import type { SchemaOrg_Offer } from "./SchemaOrg_Offer.ts";
import type { SchemaOrg_RestrictedDiet } from "./SchemaOrg_RestrictedDiet.ts";

/**
 * A food or drink item listed in a menu or menu section.
 * @see https://schema.org/MenuItem
 */
export const SCHEMA_ORG_MenuItem = "https://schema.org/MenuItem" as const;

/**
 * A food or drink item listed in a menu or menu section.
 * @see https://schema.org/MenuItem
 */
export interface SchemaOrg_MenuItem extends SchemaOrg_Intangible {
  /**
   * Additional menu item(s) such as a side dish of salad or side order of fries that can be added to this menu item. Additionally it can be a menu section containing allowed add-on menu items for this menu item.
   * @see https://schema.org/menuAddOn
   */
  menuAddOn?: Array<SchemaOrg_MenuItem | SchemaOrg_MenuSection>;
  /**
   * Nutrition information about the recipe or menu item.
   * @see https://schema.org/nutrition
   */
  nutrition?: Array<SchemaOrg_NutritionInformation>;
  /**
   * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   * @see https://schema.org/offers
   */
  offers?: Array<SchemaOrg_Demand | SchemaOrg_Offer>;
  /**
   * Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.
   * @see https://schema.org/suitableForDiet
   */
  suitableForDiet?: Array<SchemaOrg_RestrictedDiet>;
}
