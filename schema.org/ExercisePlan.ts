// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassCreativeWork } from "./CreativeWork.ts";
import type { ClassPhysicalActivity } from "./PhysicalActivity.ts";

/** Fitness-related activity designed for a specific health-related purpose, including defined exercise routines as well as activity prescribed by a clinician. */
export interface ClassExercisePlan
  extends ClassCreativeWork, ClassPhysicalActivity {
  /** Length of time to engage in the activity. */
  activityDuration: Array<{ "@id": string }>;
  /** How often one should engage in the activity. */
  activityFrequency: Array<string | { "@id": string }>;
  /** Any additional component of the exercise prescription that may need to be articulated to the patient. This may include the order of exercises, the number of repetitions of movement, quantitative distance, progressions over time, etc. */
  additionalVariable: Array<string>;
  /** Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc. */
  exerciseType: Array<string>;
  /** Quantitative measure gauging the degree of force involved in the exercise, for example, heartbeats per minute. May include the velocity of the movement. */
  intensity: Array<string | { "@id": string }>;
  /** Number of times one should repeat the activity. */
  repetitions: Array<number | { "@id": string }>;
  /** How often one should break from the activity. */
  restPeriods: Array<string | { "@id": string }>;
  /** Quantitative measure of the physiologic output of the exercise; also referred to as energy expenditure. */
  workload: Array<{ "@id": string }>;
}
