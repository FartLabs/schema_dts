// DO NOT EDIT: This file is generated.
import type { SchemaOrg_Boolean } from "./SchemaOrg_Boolean.ts";
import type { SchemaOrg_Intangible } from "./SchemaOrg_Intangible.ts";
import type { SchemaOrg_Number } from "./SchemaOrg_Number.ts";
import type { SchemaOrg_Text } from "./SchemaOrg_Text.ts";
import type { SchemaOrg_Thing } from "./SchemaOrg_Thing.ts";

/**
 * A Property value specification.
 * @see https://schema.org/PropertyValueSpecification
 */
export const SCHEMA_ORG_PropertyValueSpecification =
  "https://schema.org/PropertyValueSpecification" as const;

/**
 * A Property value specification.
 * @see https://schema.org/PropertyValueSpecification
 */
export interface SchemaOrg_PropertyValueSpecification
  extends SchemaOrg_Intangible {
  /**
   * The default value of the input.  For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values.
   * @see https://schema.org/defaultValue
   */
  defaultValue?: Array<SchemaOrg_Text | SchemaOrg_Thing>;
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
   * Whether multiple values are allowed for the property.  Default is false.
   * @see https://schema.org/multipleValues
   */
  multipleValues?: Array<SchemaOrg_Boolean>;
  /**
   * Whether or not a property is mutable.  Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form.
   * @see https://schema.org/readonlyValue
   */
  readonlyValue?: Array<SchemaOrg_Boolean>;
  /**
   * The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification.
   * @see https://schema.org/stepValue
   */
  stepValue?: Array<SchemaOrg_Number>;
  /**
   * Specifies the allowed range for number of characters in a literal value.
   * @see https://schema.org/valueMaxLength
   */
  valueMaxLength?: Array<SchemaOrg_Number>;
  /**
   * Specifies the minimum allowed range for number of characters in a literal value.
   * @see https://schema.org/valueMinLength
   */
  valueMinLength?: Array<SchemaOrg_Number>;
  /**
   * Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name.
   * @see https://schema.org/valueName
   */
  valueName?: Array<SchemaOrg_Text>;
  /**
   * Specifies a regular expression for testing literal values according to the HTML spec.
   * @see https://schema.org/valuePattern
   */
  valuePattern?: Array<SchemaOrg_Text>;
  /**
   * Whether the property must be filled in to complete the action.  Default is false.
   * @see https://schema.org/valueRequired
   */
  valueRequired?: Array<SchemaOrg_Boolean>;
}
