// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Audience } from "labs/SchemaOrg_Audience.ts";
import type { SchemaOrg_GenderType } from "labs/SchemaOrg_GenderType.ts";
import type { SchemaOrg_Integer } from "labs/SchemaOrg_Integer.ts";
import type { SchemaOrg_MedicalCondition } from "labs/SchemaOrg_MedicalCondition.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A set of characteristics belonging to people, e.g. who compose an item's target audience.
 * @see https://schema.org/PeopleAudience
 */
export const SCHEMA_ORG_PeopleAudience = "https://schema.org/PeopleAudience" as const;

/**
 * A set of characteristics belonging to people, e.g. who compose an item's target audience.
 * @see https://schema.org/PeopleAudience
 */
export interface SchemaOrg_PeopleAudience extends SchemaOrg_Audience {
    /**
     * Specifying the health condition(s) of a patient, medical study, or other target audience.
     * @see https://schema.org/healthCondition
     */
    healthCondition: Array<SchemaOrg_MedicalCondition>;
    /**
     * Audiences defined by a person's gender.
     * @see https://schema.org/requiredGender
     */
    requiredGender: Array<SchemaOrg_Text>;
    /**
     * Audiences defined by a person's maximum age.
     * @see https://schema.org/requiredMaxAge
     */
    requiredMaxAge: Array<SchemaOrg_Integer>;
    /**
     * Audiences defined by a person's minimum age.
     * @see https://schema.org/requiredMinAge
     */
    requiredMinAge: Array<SchemaOrg_Integer>;
    /**
     * The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
     * @see https://schema.org/suggestedAge
     */
    suggestedAge: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
     * @see https://schema.org/suggestedGender
     */
    suggestedGender: Array<SchemaOrg_Text | SchemaOrg_GenderType>;
    /**
     * Maximum recommended age in years for the audience or user.
     * @see https://schema.org/suggestedMaxAge
     */
    suggestedMaxAge: Array<SchemaOrg_Number>;
    /**
     * A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
     * @see https://schema.org/suggestedMeasurement
     */
    suggestedMeasurement: Array<SchemaOrg_QuantitativeValue>;
    /**
     * Minimum recommended age in years for the audience or user.
     * @see https://schema.org/suggestedMinAge
     */
    suggestedMinAge: Array<SchemaOrg_Number>;
}
