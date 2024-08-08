// DO NOT EDIT: This file is generated.
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Enumeration } from "./SchemaOrg_Enumeration.ts";
import type { SchemaOrg_MeasurementTypeEnumeration } from "./SchemaOrg_MeasurementTypeEnumeration.ts";
import type { SchemaOrg_PropertyValue } from "./SchemaOrg_PropertyValue.ts";
import type { SchemaOrg_QualitativeValue } from "./SchemaOrg_QualitativeValue.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";

/**
 * A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.
 * @see https://schema.org/QualitativeValue
 */
export const SCHEMA_ORG_QualitativeValue = "https://schema.org/QualitativeValue" as const;

/**
 * A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.
 * @see https://schema.org/QualitativeValue
 */
export interface SchemaOrg_QualitativeValue extends SchemaOrg_Enumeration {
    /**
     * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     * @see https://schema.org/additionalProperty
     */
    additionalProperty?: Array<SchemaOrg_PropertyValue>;
    /**
     * This ordering relation for qualitative values indicates that the subject is equal to the object.
     * @see https://schema.org/equal
     */
    equal?: Array<SchemaOrg_QualitativeValue>;
    /**
     * This ordering relation for qualitative values indicates that the subject is greater than the object.
     * @see https://schema.org/greater
     */
    greater?: Array<SchemaOrg_QualitativeValue>;
    /**
     * This ordering relation for qualitative values indicates that the subject is greater than or equal to the object.
     * @see https://schema.org/greaterOrEqual
     */
    greaterOrEqual?: Array<SchemaOrg_QualitativeValue>;
    /**
     * This ordering relation for qualitative values indicates that the subject is lesser than the object.
     * @see https://schema.org/lesser
     */
    lesser?: Array<SchemaOrg_QualitativeValue>;
    /**
     * This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object.
     * @see https://schema.org/lesserOrEqual
     */
    lesserOrEqual?: Array<SchemaOrg_QualitativeValue>;
    /**
     * This ordering relation for qualitative values indicates that the subject is not equal to the object.
     * @see https://schema.org/nonEqual
     */
    nonEqual?: Array<SchemaOrg_QualitativeValue>;
    /**
     * A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
     * @see https://schema.org/valueReference
     */
    valueReference?: Array<SchemaOrg_Text | SchemaOrg_StructuredValue | SchemaOrg_DefinedTerm | SchemaOrg_QualitativeValue | SchemaOrg_MeasurementTypeEnumeration | SchemaOrg_PropertyValue | SchemaOrg_QuantitativeValue | SchemaOrg_Enumeration>;
}
