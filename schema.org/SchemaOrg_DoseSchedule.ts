// DO NOT EDIT: This file is generated.
import type { SchemaOrg_MedicalIntangible } from "labs/SchemaOrg_MedicalIntangible.ts";
import type { SchemaOrg_Number } from "labs/SchemaOrg_Number.ts";
import type { SchemaOrg_QualitativeValue } from "labs/SchemaOrg_QualitativeValue.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * A specific dosing schedule for a drug or supplement.
 * @see https://schema.org/DoseSchedule
 */
export const SCHEMA_ORG_DoseSchedule = "https://schema.org/DoseSchedule" as const;

/**
 * A specific dosing schedule for a drug or supplement.
 * @see https://schema.org/DoseSchedule
 */
export interface SchemaOrg_DoseSchedule extends SchemaOrg_MedicalIntangible {
    /**
     * The unit of the dose, e.g. 'mg'.
     * @see https://schema.org/doseUnit
     */
    doseUnit: Array<SchemaOrg_Text>;
    /**
     * The value of the dose, e.g. 500.
     * @see https://schema.org/doseValue
     */
    doseValue: Array<SchemaOrg_Number | SchemaOrg_QualitativeValue>;
    /**
     * How often the dose is taken, e.g. 'daily'.
     * @see https://schema.org/frequency
     */
    frequency: Array<SchemaOrg_Text>;
    /**
     * Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.
     * @see https://schema.org/targetPopulation
     */
    targetPopulation: Array<SchemaOrg_Text>;
}
