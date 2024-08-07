// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Diet } from "labs/SchemaOrg_Diet.ts";
import type { SchemaOrg_Distance } from "labs/SchemaOrg_Distance.ts";
import type { SchemaOrg_ExercisePlan } from "labs/SchemaOrg_ExercisePlan.ts";
import type { SchemaOrg_Person } from "labs/SchemaOrg_Person.ts";
import type { SchemaOrg_Place } from "labs/SchemaOrg_Place.ts";
import type { SchemaOrg_PlayAction } from "labs/SchemaOrg_PlayAction.ts";
import type { SchemaOrg_SportsActivityLocation } from "labs/SchemaOrg_SportsActivityLocation.ts";
import type { SchemaOrg_SportsEvent } from "labs/SchemaOrg_SportsEvent.ts";
import type { SchemaOrg_SportsTeam } from "labs/SchemaOrg_SportsTeam.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * The act of participating in exertive activity for the purposes of improving health and fitness.
 * @see https://schema.org/ExerciseAction
 */
export const SCHEMA_ORG_ExerciseAction = "https://schema.org/ExerciseAction" as const;

/**
 * The act of participating in exertive activity for the purposes of improving health and fitness.
 * @see https://schema.org/ExerciseAction
 */
export interface SchemaOrg_ExerciseAction extends SchemaOrg_PlayAction {
    /**
     * A sub property of location. The course where this action was taken.
     * @see https://schema.org/course
     */
    course: Array<SchemaOrg_Place>;
    /**
     * A sub property of instrument. The diet used in this action.
     * @see https://schema.org/diet
     */
    diet: Array<SchemaOrg_Diet>;
    /**
     * The distance travelled, e.g. exercising or travelling.
     * @see https://schema.org/distance
     */
    distance: Array<SchemaOrg_Distance>;
    /**
     * A sub property of location. The course where this action was taken.
     * @see https://schema.org/exerciseCourse
     */
    exerciseCourse: Array<SchemaOrg_Place>;
    /**
     * A sub property of instrument. The exercise plan used on this action.
     * @see https://schema.org/exercisePlan
     */
    exercisePlan: Array<SchemaOrg_ExercisePlan>;
    /**
     * A sub property of instrument. The diet used in this action.
     * @see https://schema.org/exerciseRelatedDiet
     */
    exerciseRelatedDiet: Array<SchemaOrg_Diet>;
    /**
     * Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc.
     * @see https://schema.org/exerciseType
     */
    exerciseType: Array<SchemaOrg_Text>;
    /**
     * A sub property of location. The original location of the object or the agent before the action.
     * @see https://schema.org/fromLocation
     */
    fromLocation: Array<SchemaOrg_Place>;
    /**
     * A sub property of participant. The opponent on this action.
     * @see https://schema.org/opponent
     */
    opponent: Array<SchemaOrg_Person>;
    /**
     * A sub property of location. The sports activity location where this action occurred.
     * @see https://schema.org/sportsActivityLocation
     */
    sportsActivityLocation: Array<SchemaOrg_SportsActivityLocation>;
    /**
     * A sub property of location. The sports event where this action occurred.
     * @see https://schema.org/sportsEvent
     */
    sportsEvent: Array<SchemaOrg_SportsEvent>;
    /**
     * A sub property of participant. The sports team that participated on this action.
     * @see https://schema.org/sportsTeam
     */
    sportsTeam: Array<SchemaOrg_SportsTeam>;
    /**
     * A sub property of location. The final location of the object or the agent after the action.
     * @see https://schema.org/toLocation
     */
    toLocation: Array<SchemaOrg_Place>;
}
