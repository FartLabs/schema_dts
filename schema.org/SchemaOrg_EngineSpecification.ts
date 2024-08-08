// DO NOT EDIT: This file is generated.
import type { SchemaOrg_QualitativeValue } from "./SchemaOrg_QualitativeValue.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities.
 * @see https://schema.org/EngineSpecification
 */
export const SCHEMA_ORG_EngineSpecification =
  "https://schema.org/EngineSpecification" as const;

/**
 * Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities.
 * @see https://schema.org/EngineSpecification
 */
export interface SchemaOrg_EngineSpecification
  extends SchemaOrg_StructuredValue {
  /**
   * The volume swept by all of the pistons inside the cylinders of an internal combustion engine in a single movement. \n\nTypical unit code(s): CMQ for cubic centimeter, LTR for liters, INQ for cubic inches\n* Note 1: You can link to information about how the given value has been determined using the [[valueReference]] property.\n* Note 2: You can use [[minValue]] and [[maxValue]] to indicate ranges.
   * @see https://schema.org/engineDisplacement
   */
  engineDisplacement?: Array<SchemaOrg_QuantitativeValue>;
  /**
   * The power of the vehicle's engine.
   *     Typical unit code(s): KWT for kilowatt, BHP for brake horsepower, N12 for metric horsepower (PS, with 1 PS = 735,49875 W)\n\n* Note 1: There are many different ways of measuring an engine's power. For an overview, see  [http://en.wikipedia.org/wiki/Horsepower#Engine\_power\_test\_codes](http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes).\n* Note 2: You can link to information about how the given value has been determined using the [[valueReference]] property.\n* Note 3: You can use [[minValue]] and [[maxValue]] to indicate ranges.
   * @see https://schema.org/enginePower
   */
  enginePower?: Array<SchemaOrg_QuantitativeValue>;
  /**
   * The type of engine or engines powering the vehicle.
   * @see https://schema.org/engineType
   */
  engineType?: Array<
    SchemaOrg_QualitativeValue | SchemaOrg_URL | SchemaOrg_Text
  >;
  /**
   * The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.
   * @see https://schema.org/fuelType
   */
  fuelType?: Array<SchemaOrg_Text | SchemaOrg_QualitativeValue | SchemaOrg_URL>;
  /**
   * The torque (turning force) of the vehicle's engine.\n\nTypical unit code(s): NU for newton metre (N m), F17 for pound-force per foot, or F48 for pound-force per inch\n\n* Note 1: You can link to information about how the given value has been determined (e.g. reference RPM) using the [[valueReference]] property.\n* Note 2: You can use [[minValue]] and [[maxValue]] to indicate ranges.
   * @see https://schema.org/torque
   */
  torque?: Array<SchemaOrg_QuantitativeValue>;
}
