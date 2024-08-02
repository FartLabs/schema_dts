// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassPlayAction } from "./PlayAction.ts";

/** The act of participating in exertive activity for the purposes of improving health and fitness. */
export interface ClassExerciseAction extends ClassPlayAction {
  /** A sub property of location. The course where this action was taken. */
  course: Array<{ "@id": string }>;
  /** A sub property of instrument. The diet used in this action. */
  diet: Array<{ "@id": string }>;
  /** The distance travelled, e.g. exercising or travelling. */
  distance: Array<{ "@id": string }>;
  /** A sub property of location. The course where this action was taken. */
  exerciseCourse: Array<{ "@id": string }>;
  /** A sub property of instrument. The exercise plan used on this action. */
  exercisePlan: Array<{ "@id": string }>;
  /** A sub property of instrument. The diet used in this action. */
  exerciseRelatedDiet: Array<{ "@id": string }>;
  /** Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc. */
  exerciseType: Array<string>;
  /** A sub property of location. The original location of the object or the agent before the action. */
  fromLocation: Array<{ "@id": string }>;
  /** A sub property of participant. The opponent on this action. */
  opponent: Array<{ "@id": string }>;
  /** A sub property of location. The sports activity location where this action occurred. */
  sportsActivityLocation: Array<{ "@id": string }>;
  /** A sub property of location. The sports event where this action occurred. */
  sportsEvent: Array<{ "@id": string }>;
  /** A sub property of participant. The sports team that participated on this action. */
  sportsTeam: Array<{ "@id": string }>;
  /** A sub property of location. The final location of the object or the agent after the action. */
  toLocation: Array<{ "@id": string }>;
}
