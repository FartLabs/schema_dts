// DO NOT EDIT: This file is generated.
import type { SchemaOrg_AnatomicalStructure } from "./SchemaOrg_AnatomicalStructure.ts";
import type { SchemaOrg_AnatomicalSystem } from "./SchemaOrg_AnatomicalSystem.ts";
import type { SchemaOrg_CategoryCode } from "./SchemaOrg_CategoryCode.ts";
import type { SchemaOrg_LifestyleModification } from "./SchemaOrg_LifestyleModification.ts";
import type { SchemaOrg_PhysicalActivityCategory } from "./SchemaOrg_PhysicalActivityCategory.ts";
import type { SchemaOrg_SuperficialAnatomy } from "./SchemaOrg_SuperficialAnatomy.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan.
 * @see https://schema.org/PhysicalActivity
 */
export const SCHEMA_ORG_PhysicalActivity = "https://schema.org/PhysicalActivity" as const;

/**
 * Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan.
 * @see https://schema.org/PhysicalActivity
 */
export interface SchemaOrg_PhysicalActivity extends SchemaOrg_LifestyleModification {
    /**
     * The anatomy of the underlying organ system or structures associated with this entity.
     * @see https://schema.org/associatedAnatomy
     */
    associatedAnatomy?: Array<SchemaOrg_AnatomicalStructure | SchemaOrg_AnatomicalSystem | SchemaOrg_SuperficialAnatomy>;
    /**
     * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
     * @see https://schema.org/category
     */
    category?: Array<SchemaOrg_URL | SchemaOrg_Thing | SchemaOrg_PhysicalActivityCategory | SchemaOrg_CategoryCode | SchemaOrg_Text>;
    /**
     * The characteristics of associated patients, such as age, gender, race etc.
     * @see https://schema.org/epidemiology
     */
    epidemiology?: Array<SchemaOrg_Text>;
    /**
     * Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.
     * @see https://schema.org/pathophysiology
     */
    pathophysiology?: Array<SchemaOrg_Text>;
}
