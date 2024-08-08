// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Enumeration } from "./SchemaOrg_Enumeration.ts";
import type { SchemaOrg_MeasurementTypeEnumeration } from "./SchemaOrg_MeasurementTypeEnumeration.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_PropertyValue } from "./SchemaOrg_PropertyValue.ts";
import type { SchemaOrg_QualitativeValue } from "./SchemaOrg_QualitativeValue.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A point value or interval for product characteristics and other purposes.
 * @see https://schema.org/QuantitativeValue
 */
export const SCHEMA_ORG_QuantitativeValue = "https://schema.org/QuantitativeValue" as const;

/**
 * A point value or interval for product characteristics and other purposes.
 * @see https://schema.org/QuantitativeValue
 */
export interface SchemaOrg_QuantitativeValue extends SchemaOrg_StructuredValue {
    /**
     * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     * @see https://schema.org/additionalProperty
     */
    additionalProperty?: Array<SchemaOrg_PropertyValue>;
    /**
     * The upper value of some characteristic or property.
     * @see https://schema.org/maxValue
     */
    maxValue?: Array<SchemaOrg_Number>;
    /**
     * The lower value of some characteristic or property.
     * @see https://schema.org/minValue
     */
    minValue?: Array<SchemaOrg_Number>;
    /**
     * The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
     * @see https://schema.org/unitCode
     */
    unitCode?: Array<SchemaOrg_URL | SchemaOrg_Text>;
    /**
     * A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
     * <a href='unitCode'>unitCode</a>.
     * @see https://schema.org/unitText
     */
    unitText?: Array<SchemaOrg_Text>;
    /**
     * The value of a [[QuantitativeValue]] (including [[Observation]]) or property value node.\n\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text', 'Number', 'Boolean', or 'StructuredValue'.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     * @see https://schema.org/value
     */
    value?: Array<SchemaOrg_Text | SchemaOrg_StructuredValue | SchemaOrg_Number | SchemaOrg_Boolean>;
    /**
     * A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
     * @see https://schema.org/valueReference
     */
    valueReference?: Array<SchemaOrg_Text | SchemaOrg_StructuredValue | SchemaOrg_DefinedTerm | SchemaOrg_QualitativeValue | SchemaOrg_MeasurementTypeEnumeration | SchemaOrg_PropertyValue | SchemaOrg_QuantitativeValue | SchemaOrg_Enumeration>;
}
