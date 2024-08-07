// DO NOT EDIT: This file is generated.
import type { SchemaOrg_GenderType } from "labs/SchemaOrg_GenderType.ts";
import type { SchemaOrg_QualitativeValue } from "labs/SchemaOrg_QualitativeValue.ts";
import type { SchemaOrg_QuantitativeValue } from "labs/SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_SizeGroupEnumeration } from "labs/SchemaOrg_SizeGroupEnumeration.ts";
import type { SchemaOrg_SizeSystemEnumeration } from "labs/SchemaOrg_SizeSystemEnumeration.ts";
import type { SchemaOrg_Text } from "labs/SchemaOrg_Text.ts";

/**
 * Size related properties of a product, typically a size code ([[name]]) and optionally a [[sizeSystem]], [[sizeGroup]], and product measurements ([[hasMeasurement]]). In addition, the intended audience can be defined through [[suggestedAge]], [[suggestedGender]], and suggested body measurements ([[suggestedMeasurement]]).
 * @see https://schema.org/SizeSpecification
 */
export const SCHEMA_ORG_SizeSpecification = "https://schema.org/SizeSpecification" as const;

/**
 * Size related properties of a product, typically a size code ([[name]]) and optionally a [[sizeSystem]], [[sizeGroup]], and product measurements ([[hasMeasurement]]). In addition, the intended audience can be defined through [[suggestedAge]], [[suggestedGender]], and suggested body measurements ([[suggestedMeasurement]]).
 * @see https://schema.org/SizeSpecification
 */
export interface SchemaOrg_SizeSpecification extends SchemaOrg_QualitativeValue {
    /**
     * A measurement of an item, For example, the inseam of pants, the wheel size of a bicycle, the gauge of a screw, or the carbon footprint measured for certification by an authority. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
     * @see https://schema.org/hasMeasurement
     */
    hasMeasurement: Array<SchemaOrg_QuantitativeValue>;
    /**
     * The size group (also known as "size type") for a product's size. Size groups are common in the fashion industry to define size segments and suggested audiences for wearable products. Multiple values can be combined, for example "men's big and tall", "petite maternity" or "regular".
     * @see https://schema.org/sizeGroup
     */
    sizeGroup: Array<SchemaOrg_SizeGroupEnumeration | SchemaOrg_Text>;
    /**
     * The size system used to identify a product's size. Typically either a standard (for example, "GS1" or "ISO-EN13402"), country code (for example "US" or "JP"), or a measuring system (for example "Metric" or "Imperial").
     * @see https://schema.org/sizeSystem
     */
    sizeSystem: Array<SchemaOrg_Text | SchemaOrg_SizeSystemEnumeration>;
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
     * A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
     * @see https://schema.org/suggestedMeasurement
     */
    suggestedMeasurement: Array<SchemaOrg_QuantitativeValue>;
}
