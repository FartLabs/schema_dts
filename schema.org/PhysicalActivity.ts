// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassLifestyleModification } from "./LifestyleModification.ts";

/** Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan. */
export interface ClassPhysicalActivity extends ClassLifestyleModification {
  /** The anatomy of the underlying organ system or structures associated with this entity. */
  associatedAnatomy: Array<{ "@id": string }>;
  /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
  category: Array<string | { "@id": string }>;
  /** The characteristics of associated patients, such as age, gender, race etc. */
  epidemiology: Array<string>;
  /** Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition. */
  pathophysiology: Array<string>;
}
