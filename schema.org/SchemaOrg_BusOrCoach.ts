// DO NOT EDIT: This file is generated.
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Vehicle } from "./SchemaOrg_Vehicle.ts";

/**
 * A bus (also omnibus or autobus) is a road vehicle designed to carry passengers. Coaches are luxury buses, usually in service for long distance travel.
 * @see https://schema.org/BusOrCoach
 */
export const SCHEMA_ORG_BusOrCoach = "https://schema.org/BusOrCoach" as const;

/**
 * A bus (also omnibus or autobus) is a road vehicle designed to carry passengers. Coaches are luxury buses, usually in service for long distance travel.
 * @see https://schema.org/BusOrCoach
 */
export interface SchemaOrg_BusOrCoach extends SchemaOrg_Vehicle {
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
