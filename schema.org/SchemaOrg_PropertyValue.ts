// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_DefinedTerm } from "./SchemaOrg_DefinedTerm.ts";
import type { SchemaOrg_Enumeration } from "./SchemaOrg_Enumeration.ts";
import type { SchemaOrg_MeasurementMethodEnum } from "./SchemaOrg_MeasurementMethodEnum.ts";
import type { SchemaOrg_MeasurementTypeEnumeration } from "./SchemaOrg_MeasurementTypeEnumeration.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_PropertyValue } from "./SchemaOrg_PropertyValue.ts";
import type { SchemaOrg_QualitativeValue } from "./SchemaOrg_QualitativeValue.ts";
import type { SchemaOrg_QuantitativeValue } from "./SchemaOrg_QuantitativeValue.ts";
import type { SchemaOrg_StructuredValue } from "./SchemaOrg_StructuredValue.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_URL } from "./SchemaOrg_URL.ts";

/**
 * A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.\n\n Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.
 * @see https://schema.org/PropertyValue
 */
export const SCHEMA_ORG_PropertyValue =
  "https://schema.org/PropertyValue" as const;

/**
 * A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.\n\n Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.
 * @see https://schema.org/PropertyValue
 */
export interface SchemaOrg_PropertyValue extends SchemaOrg_StructuredValue {
  /**
   * The upper value of some characteristic or property.
   * @see https://schema.org/maxValue
   */
  maxValue?: Array<SchemaOrg_Number>;
  /**
   * A subproperty of [[measurementTechnique]] that can be used for specifying specific methods, in particular via [[MeasurementMethodEnum]].
   * @see https://schema.org/measurementMethod
   */
  measurementMethod?: Array<
    | SchemaOrg_Text
    | SchemaOrg_DefinedTerm
    | SchemaOrg_MeasurementMethodEnum
    | SchemaOrg_URL
  >;
  /**
   * A technique, method or technology used in an [[Observation]], [[StatisticalVariable]] or [[Dataset]] (or [[DataDownload]], [[DataCatalog]]), corresponding to the method used for measuring the corresponding variable(s) (for datasets, described using [[variableMeasured]]; for [[Observation]], a [[StatisticalVariable]]). Often but not necessarily each [[variableMeasured]] will have an explicit representation as (or mapping to) an property such as those defined in Schema.org, or other RDF vocabularies and "knowledge graphs". In that case the subproperty of [[variableMeasured]] called [[measuredProperty]] is applicable.
   *
   * The [[measurementTechnique]] property helps when extra clarification is needed about how a [[measuredProperty]] was measured. This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but can often serve as a high level summary for dataset discovery.
   *
   * For example, if [[variableMeasured]] is: molecule concentration, [[measurementTechnique]] could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence". If the [[variableMeasured]] is "depression rating", the [[measurementTechnique]] could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
   *
   * If there are several [[variableMeasured]] properties recorded for some given data object, use a [[PropertyValue]] for each [[variableMeasured]] and attach the corresponding [[measurementTechnique]]. The value can also be from an enumeration, organized as a [[MeasurementMetholdEnumeration]].
   * @see https://schema.org/measurementTechnique
   */
  measurementTechnique?: Array<
    | SchemaOrg_Text
    | SchemaOrg_DefinedTerm
    | SchemaOrg_MeasurementMethodEnum
    | SchemaOrg_URL
  >;
  /**
   * The lower value of some characteristic or property.
   * @see https://schema.org/minValue
   */
  minValue?: Array<SchemaOrg_Number>;
  /**
   * A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be
   * (1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific ID of the property), or (3)
   * a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).
   * Standards bodies should promote a standard prefix for the identifiers of properties from their standards.
   * @see https://schema.org/propertyID
   */
  propertyID?: Array<SchemaOrg_URL | SchemaOrg_Text>;
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
  value?: Array<
    | SchemaOrg_Text
    | SchemaOrg_StructuredValue
    | SchemaOrg_Number
    | SchemaOrg_Boolean
  >;
  /**
   * A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
   * @see https://schema.org/valueReference
   */
  valueReference?: Array<
    | SchemaOrg_Text
    | SchemaOrg_StructuredValue
    | SchemaOrg_DefinedTerm
    | SchemaOrg_QualitativeValue
    | SchemaOrg_MeasurementTypeEnumeration
    | SchemaOrg_PropertyValue
    | SchemaOrg_QuantitativeValue
    | SchemaOrg_Enumeration
  >;
}
