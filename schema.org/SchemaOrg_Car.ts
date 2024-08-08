// DO NOT EDIT: This file is generated.
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Vehicle } from "./SchemaOrg_Vehicle.ts";

/**
 * A car is a wheeled, self-powered motor vehicle used for transportation.
 * @see https://schema.org/Car
 */
export const SCHEMA_ORG_Car = "https://schema.org/Car" as const;

/**
 * A car is a wheeled, self-powered motor vehicle used for transportation.
 * @see https://schema.org/Car
 */
export interface SchemaOrg_Car extends SchemaOrg_Vehicle {
  /**
   * The ACRISS Car Classification Code is a code used by many car rental companies, for classifying vehicles. ACRISS stands for Association of Car Rental Industry Systems and Standards.
   * @see https://schema.org/acrissCode
   */
  acrissCode?: Array<SchemaOrg_Text>;
  /**
   * The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]]\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
   * @see https://schema.org/roofLoad
   */
  roofLoad?: Array<SchemaOrg_QuantitativeValue>;
}
