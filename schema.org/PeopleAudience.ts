// DO NOT EDIT: This file is generated from schema.org data.
import type { ClassAudience } from "./Audience.ts";

/** A set of characteristics belonging to people, e.g. who compose an item's target audience. */
export interface ClassPeopleAudience extends ClassAudience {
  /** Specifying the health condition(s) of a patient, medical study, or other target audience. */
  healthCondition: Array<{ "@id": string }>;
  /** Audiences defined by a person's gender. */
  requiredGender: Array<string>;
  /** Audiences defined by a person's maximum age. */
  requiredMaxAge: Array<{ "@id": string }>;
  /** Audiences defined by a person's minimum age. */
  requiredMinAge: Array<{ "@id": string }>;
  /** The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers. */
  suggestedAge: Array<{ "@id": string }>;
  /** The suggested gender of the intended person or audience, for example "male", "female", or "unisex". */
  suggestedGender: Array<string | { "@id": string }>;
  /** Maximum recommended age in years for the audience or user. */
  suggestedMaxAge: Array<number>;
  /** A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products. */
  suggestedMeasurement: Array<{ "@id": string }>;
  /** Minimum recommended age in years for the audience or user. */
  suggestedMinAge: Array<number>;
}
