// DO NOT EDIT: This file is generated.
import type { SchemaOrg_CreativeWork } from "./SchemaOrg_CreativeWork.ts";
import type { SchemaOrg_Duration } from "./SchemaOrg_Duration.ts";
import type { SchemaOrg_Energy } from "./SchemaOrg_Energy.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_PhysicalActivity } from "./SchemaOrg_PhysicalActivity.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * Fitness-related activity designed for a specific health-related purpose, including defined exercise routines as well as activity prescribed by a clinician.
 * @see https://schema.org/ExercisePlan
 */
export const SCHEMA_ORG_ExercisePlan =
  "https://schema.org/ExercisePlan" as const;

/**
 * Fitness-related activity designed for a specific health-related purpose, including defined exercise routines as well as activity prescribed by a clinician.
 * @see https://schema.org/ExercisePlan
 */
export interface SchemaOrg_ExercisePlan
  extends SchemaOrg_CreativeWork, SchemaOrg_PhysicalActivity {
  /**
   * Length of time to engage in the activity.
   * @see https://schema.org/activityDuration
   */
  activityDuration?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Duration>;
  /**
   * How often one should engage in the activity.
   * @see https://schema.org/activityFrequency
   */
  activityFrequency?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Text>;
  /**
   * Any additional component of the exercise prescription that may need to be articulated to the patient. This may include the order of exercises, the number of repetitions of movement, quantitative distance, progressions over time, etc.
   * @see https://schema.org/additionalVariable
   */
  additionalVariable?: Array<SchemaOrg_Text>;
  /**
   * Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc.
   * @see https://schema.org/exerciseType
   */
  exerciseType?: Array<SchemaOrg_Text>;
  /**
   * Quantitative measure gauging the degree of force involved in the exercise, for example, heartbeats per minute. May include the velocity of the movement.
   * @see https://schema.org/intensity
   */
  intensity?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Text>;
  /**
   * Number of times one should repeat the activity.
   * @see https://schema.org/repetitions
   */
  repetitions?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Number>;
  /**
   * How often one should break from the activity.
   * @see https://schema.org/restPeriods
   */
  restPeriods?: Array<SchemaOrg_QuantitativeValue | SchemaOrg_Text>;
  /**
   * Quantitative measure of the physiologic output of the exercise; also referred to as energy expenditure.
   * @see https://schema.org/workload
   */
  workload?: Array<SchemaOrg_Energy | SchemaOrg_QuantitativeValue>;
}
